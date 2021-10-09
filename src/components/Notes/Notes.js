import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '../../graphql/queries';
import { Container, Grid, Segment, Icon, Loader, Button, Header, Dimmer } from 'semantic-ui-react'
import './ExtraCssNotes.css'
import { Helmet } from "react-helmet";


export const Notes = () => {

    const [loading, setLoading] = useState(true)
    const [start, setStart] = useState(false)
    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetchNotes()
    }, [])

    async function fetchNotes() {
        try {
            const notesData = await API.graphql(graphqlOperation(listNotes))
            const notes = notesData.data.listNotes.items
            setNotes(notes)
            setLoading(false)
        } catch (err) {
            console.log('error')
        }
    }

    return (

        <Container fluid>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Notes Dashboard</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            {!loading ?
                <Grid centered style={{ height: "100vh" }} verticalAlign="middle">
                    {notes.length > 0 && !start ?
                        null
                        :
                        <Grid.Column computer={16} mobile={16} tablet={16} className="notes-dashboard">
                            <Segment textAlign='center' style={{ marginTop: '100px', background: 'transparent' }}>
                                <Icon size="massive" name='book' />
                                <Header as="h1" inverted>Nordcloud notes</Header>
                                <p style={{ color: 'white' }}>Take notes, reminders, share them with friends in secure manner</p>
                                <Button className="get-started-btn" content='Get Started' onClick={() => { setStart(true) }} />
                            </Segment>
                        </Grid.Column>
                    }
                </Grid>

                :
                <Loader className='loader' active size='large'>Please Wait Loading...</Loader>

            }


        </Container>
    )
}

export default Notes;