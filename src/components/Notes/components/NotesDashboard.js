import React, { useEffect, useState } from "react";
import { Grid, Segment, Icon, Button, Menu, Search, Card } from 'semantic-ui-react'
import '.././ExtraCssNotes.css';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import Note from "./Note";
import Folder from "../../Folders/Folder";
import { API, graphqlOperation } from 'aws-amplify';
import { createNotes, deleteNotes } from '../../../graphql/mutations';


const folders = [{ folder_name: 'New Folder 1', id: 1 }, { folder_name: 'New Folder 2 ', id: 2 }, { folder_name: 'New Folder 3 sadsadasdadasdsadasad', id: 3 }, { folder_name: 'New Folder 4', id: 4 }, { folder_name: 'New Folder 5', id: 5 }, { folder_name: 'New Folder 6', id: 6 }]

export const NotesDashboard = ({ notesList }) => {
    const [btnLoading, setBtnLoading] = useState(false)
    const [notes, setNotes] = useState(notesList)
    console.log(notesList)
    const [foldersList, setFoldersList] = useState(folders)
    const [navSelection, setNavSelection] = useState('Notes')

    const listNotes = notes.map((note) => {
        return (<Note deleteNote={deleteNote} key={note.id} note={note} />)
    })
    const listFolders = folders.map((folder) => {
        return (<Folder folder={folder} key={folder.id} />)
    })
    async function createNewNote() {
        try {
            setBtnLoading(true)
            const notesData = await API.graphql(graphqlOperation(createNotes, { input: { title: 'Untitled Note', content: 'Please add some content...', locked: false, password: '', type:'Note' } }))
            let note = notesData.data.createNotes
            setNotes([note, ...notes])
            setBtnLoading(false)
        } catch (err) {
            setBtnLoading(false)
            console.log('error')
        }
    }
    async function deleteNote(id) {
        try {
            await API.graphql(graphqlOperation(deleteNotes, { input: { id: id } }))
            let removeIndex = notes.findIndex(item => item.id === id);
            notes.splice(removeIndex, 1)
            setNotes([...notes])

        } catch (err) {
            console.log(err)
            console.log('error')
        }
    }


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            <Grid.Column computer={16} mobile={16} tablet={16} className="notes-dashboard">
                <Menu fluid compact className='notes-menu'>
                    <Menu.Item
                        as='h2'
                        name={navSelection}>
                    </Menu.Item>
                    <Menu.Item
                        className='tools'
                        position='right'
                        name='search'
                    >
                        <Search fluid className='search-bar' input={{ icon: 'search', color: 'red', iconPosition: 'left' }} />

                    </Menu.Item>

                </Menu>
                <Segment className='remove-bg' textAlign='center'>
                    <Button size='huge' value='Notes' className={navSelection === 'Notes' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Notes</Button>
                    <Button size='huge' value='Folders' className={navSelection === 'Folders' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Folders</Button>
                </Segment>
                <Segment textAlign='center' className='remove-bg notes-segment'>
                    {navSelection === 'Notes' && (
                        <>
                            <Card.Group centered itemsPerRow={4} stackable >
                                {listNotes}
                            </Card.Group>
                            <Button className='remove-bg fixed-btn' onClick={createNewNote} loading={btnLoading} >
                                <Button.Content>
                                    <Icon circular size='huge' name='plus' className='add-new-note' />
                                </Button.Content>
                            </Button>
                        </>

                    )}
                    {navSelection === 'Folders' && (
                        <Card.Group centered itemsPerRow={6}>
                            {listFolders}
                            <Button className='remove-bg fixed-btn'>
                                <Button.Content>
                                    <Icon circular size='huge' name='plus' className='add-new-note' />
                                </Button.Content>
                            </Button>
                        </Card.Group>)}
                </Segment>

            </Grid.Column>

        </>
    )
}

NotesDashboard.propTypes = {
    notes: PropTypes.array
}


export default NotesDashboard;