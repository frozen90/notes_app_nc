import React, { useEffect, useState } from "react";
import { Grid, Segment, Icon, Button, Menu, Search, Card } from 'semantic-ui-react'
import '.././ExtraCssNotes.css';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import Note from "./Note";
import Folder from "../../Folders/Folder";

const folders = [{ folder_name: 'New Folder 1', id: 1 }, { folder_name: 'New Folder 2', id: 1 }, { folder_name: 'New Folder 3', id: 1 }, { folder_name: 'New Folder 4', id: 1 }, { folder_name: 'New Folder 5', id: 1 }, { folder_name: 'New Folder 6', id: 1 }]

export const NotesDashboard = ({ notes }) => {
    const [notesLits, setNotesList] = useState(notes)
    const [foldersList, setFoldersList] = useState(folders)
    const [navSelection, setNavSelection] = useState('Notes')
    const [showSearch, setShowSearch] = useState(false)
    const createNewNote = () => {

    }
    const listFolders = folders.map((folder) => {
        return (<Grid.Column mobile={11} tablet={8} computer={3}>
            <Folder />
        </Grid.Column>)
    })
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
                        name={navSelection}>
                    </Menu.Item>
                    <Menu.Item
                        className='tools'
                        position='right'
                        name='search'
                    >
                        <Search fluid className='search-bar' input={{ icon: 'search', iconPosition: 'left' }} />

                    </Menu.Item>

                </Menu>
                <Segment className='remove-bg' textAlign='center'>
                    <Button size='huge' value='Notes' className={navSelection === 'Notes' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Notes</Button>
                    <Button size='huge' value='Folders' className={navSelection === 'Folders' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Folders</Button>
                </Segment>
                <Grid centered className='remove-bg notes-segment'>
                    {navSelection === 'Notes' && (<>
                        <Grid.Column mobile={11} tablet={8} computer={3}>
                            <Note />
                        </Grid.Column>
                        <Grid.Column mobile={10} tablet={8} computer={3}>
                            <Note />
                        </Grid.Column>
                        <Grid.Column mobile={10} tablet={8} computer={3}>
                            <Note />
                        </Grid.Column>
                        <Grid.Column mobile={10} tablet={8} computer={3}>
                            <Note />
                        </Grid.Column>
                        <Grid.Column mobile={10} tablet={8} computer={3}>
                            <Note />
                        </Grid.Column>
                        <Button className='remove-bg fixed-btn' onClick={createNewNote}><Button.Content><Icon circular size='huge' name='file text' className='add-new-note' /></Button.Content></Button></>
                    )}
                    {navSelection === 'Folders' && <> {listFolders} <Button className='remove-bg fixed-btn'><Button.Content><Icon circular size='huge' name='folder' className='add-new-note' /></Button.Content></Button></>}
                </Grid>

            </Grid.Column>

        </>
    )
}

NotesDashboard.propTypes = {
    notes: PropTypes.array
}


export default NotesDashboard;