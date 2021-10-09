import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '../../../graphql/queries'
import { Grid, Segment, Icon, Button, Menu, Search, Popup } from 'semantic-ui-react'
import '.././ExtraCssNotes.css';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion"
import Note from "./Note";

export const NotesDashboard = ({ notes }) => {
    const [notesLits, setNotesList] = useState(notes)
    const [navSelection, setNavSelection] = useState('Notes')
    const [showSearch, setShowSearch] = useState(false)
    const createNewNote = () => {

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
                        name={navSelection}>
                    </Menu.Item>
                    <Menu.Item
                        className='tools'
                        position='right'
                        name='search'
                    >
                        {!showSearch && <Icon name='search' onClick={() => { setShowSearch(true) }} />}
                        {showSearch && (
                            <Search fluid className='search-bar' input={{ icon: 'search', iconPosition: 'left' }} />

                        )}
                    </Menu.Item>

                </Menu>
                <Segment className='remove-bg' textAlign='center'>
                    <Button size='huge' value='Notes' className={navSelection === 'Notes' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Notes</Button>
                    <Button size='huge' value='Folders' className={navSelection === 'Folders' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Folders</Button>
                </Segment>
                <Segment textAlign='center' style={{minHeight:'50vh', overflow:'hidden'}} className='remove-bg'>
                <Grid centered columns={4}  stackable>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                    <Grid.Column >
                        <Note /> 
                    </Grid.Column>
                </Grid>
                </Segment>
                <Segment attached='bottom' className='remove-bg' >
                    <Menu fluid compact className='notes-menu'>
                        <Menu.Item position='right'>
                            {navSelection === 'Notes' && (<Button className='remove-bg' onClick={createNewNote}><Button.Content><Icon circular size='huge' name='file text' className='add-new-note' /></Button.Content></Button>)}
                            {navSelection === 'Folders' && (<Button className='remove-bg'><Button.Content><Icon circular size='huge' name='folder' className='add-new-note' /></Button.Content></Button>)}
                        </Menu.Item>
                    </Menu>
                </Segment>
            </Grid.Column>

        </>
    )
}

NotesDashboard.propTypes = {
    notes: PropTypes.array
}


export default NotesDashboard;