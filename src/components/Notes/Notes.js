import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '../../graphql/queries';
import { Container, Grid, Menu, Segment, Icon, Form , Button} from 'semantic-ui-react'
import './ExtraCssNotes.css'
import { Helmet } from "react-helmet";
export const Notes = () => {

    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetchNotes()
    }, [])

    async function fetchNotes() {
        try {
            const notesData = await API.graphql(graphqlOperation(listNotes))
            const notes = notesData.data.listNotes.items
            setNotes(notes)
        } catch (err) {
            console.log('error')
        }
    }

    return (
        <Container fluid>
            <Grid centered style={{ padding: '50px' }} verticalAlign="middle">
                <Grid.Column computer={16} mobile={16} tablet={16} className="notes-dashboard">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Notes Dashboard</title>
                        <link rel="canonical" href="/login" />
                    </Helmet>
                    <Segment textAlign='center' style={{ background:'transparent'}}>

                       
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Notes;