import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { notesByDate } from '../../graphql/queries';
import { Container, Grid, Loader } from 'semantic-ui-react'
import './ExtraCssNotes.css'
import { Helmet } from "react-helmet";
import Dashboard from "./components/Dashboard";
import GetStarted from "./components/GetStarted";

export const Notes = () => {

    const [loading, setLoading] = useState(true)
    const [getStartedDisplay, setGetStartedDisplay] = useState(false)
    const [notes, setNotes] = useState([])


    useEffect(() => {
        fetchNotes()
    }, [])

    async function fetchNotes() {
        try {
            const notesData = await API.graphql(graphqlOperation(notesByDate, { type: "Note", sortDirection: 'DESC' }))
            const notes = notesData.data.notesByDate.items
            setNotes(notes)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const dismissWelcome = () => {
        setGetStartedDisplay(true)
    }
    return (

        <Container fluid style={{padding:'15px'}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Notes Dashboard</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            {!loading ?
                <Grid centered style={{ padding: '20px', height: "100vh" }} verticalAlign="middle">
                    {notes.length > 0 || getStartedDisplay ?
                        <Dashboard notesList={notes} />
                        :

                        <GetStarted dismissWelcome={dismissWelcome} />
                    }
                </Grid>
                :
                <Loader className='loader' active size='large'>Loading...</Loader>

            }
        </Container>
    )
}

export default Notes;