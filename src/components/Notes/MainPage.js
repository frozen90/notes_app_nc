import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { notesByDate, listFolders } from '../../graphql/queries';
import { Container, Grid, Loader } from 'semantic-ui-react'
import { Helmet } from "react-helmet";
import Dashboard from "../Dashboard/Dashboard";
import GetStarted from "./components/GetStarted";

export const MainPage = () => {

    const [loading, setLoading] = useState(true)
    const [getStartedDisplay, setGetStartedDisplay] = useState(false)
    const [notes, setNotes] = useState([])
    const [folders, setFolders] = useState([])

    useEffect(() => {
        fetchNotes()
        fetchFolders()
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
    async function fetchFolders() {
        try {
            const foldersData = await API.graphql(graphqlOperation(listFolders))
            const folders = foldersData.data.listFolders.items
            setFolders(folders)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }


    const dismissWelcome = () => {
        setGetStartedDisplay(true)
    }
    return (

        <Container fluid style={{ padding: '15px' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
                <link rel="canonical" href="/dashboard" />
            </Helmet>
            {!loading ?
                <Grid centered style={{ padding: '20px', height: "100vh" }} verticalAlign="middle">
                    {notes.length > 0 || getStartedDisplay ?
                        <Dashboard notesList={notes} foldersList={folders} />
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

export default MainPage;