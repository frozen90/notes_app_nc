import React, { useEffect, useState } from "react";
import { Container, Grid, Loader, Segment } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import { notesByLink } from "../../../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import ExpiredLink from "./components/ExpiredLink";
import ProtectedNote from "./components/ProtectedNote";

export const ShareNote = (props) => {
    const link = props.match.params.link
    const [noteId, setNoteId] = useState('')
    const [expired, setExpired] = useState(false)
    const [loading, setLoading] = useState(true)
    const [expiryDate, setExpiryDate] = useState('')

    useEffect(() => {
        fetchExpiryDate()
    }, [])
    
    async function fetchExpiryDate() {
        try {
            const expiryDate = await API.graphql({query:notesByLink,variables:{ link: link, sortDirection: 'DESC' }, authMode:"AWS_IAM"})
            setExpiryDate(expiryDate.data.notesByLink.items[0].expire_date)
            setNoteId(expiryDate.data.notesByLink.items[0].id)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (expiryDate.length > 0) {
            if (new Date(expiryDate).toLocaleString('sv').replace(' ', 'T') > new Date().toLocaleString('sv').replace(' ', 'T')) {
                console.log(true)
                setLoading(false)
                setExpired(false)
            } else {
                setExpired(true)
                setLoading(false)
            }
        }
    }, [expiryDate])
    return (
        <Container fluid>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Shared Note</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            {!loading ?
                <Grid centered style={{ padding: '20px', height: "100vh" }}>
                    <Grid.Column textAlign='center' verticalAlign="middle" computer={16} mobile={16} tablet={16} className="notes-dashboard">
                        <Segment className='remove-bg' style={{ height: '80vh' }} >
                            {expired ? <ExpiredLink /> : <ProtectedNote noteId={noteId} />}
                        </Segment>
                    </Grid.Column>
                </Grid>
                :
                <Loader className='loader' active size='large'>Loading...</Loader>

            }
        </Container>
    )
}

export default ShareNote