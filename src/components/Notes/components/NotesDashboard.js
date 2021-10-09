import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '../../../graphql/queries'
import { Grid, Segment, Icon, Button, Header, Menu, Search, Dropdown } from 'semantic-ui-react'
import '.././ExtraCssNotes.css';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion"

export const NotesDashboard = ({ notes }) => {
    const [navSelection, setNavSelection] = useState('Notes')
    const [showSearch, setShowSearch] = useState(false)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Notes Dashboard</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            <Grid.Column computer={16} mobile={16} tablet={16} className="notes-dashboard">
                <Menu fluid compact className='notes-menu'>
                    <Menu.Item
                        name='Notes'>
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
                        <Dropdown item icon='ellipsis horizontal' className='elipsis-icon' onClick={() => { setShowSearch(false) }}>
                            <Dropdown.Menu className="tools-menu">
                                <Dropdown.Item>Option #2</Dropdown.Item>
                                <Dropdown.Item>Option #3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>

                </Menu>
                <Segment className='remove-bg' textAlign='center' style={{ minHeight: '60vh' }}>
                    <Button size='huge' value='Notes' className={navSelection === 'Notes' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Notes</Button>
                    <Button size='huge' value='Folders' className={navSelection === 'Folders' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Folders</Button>
                </Segment>
                <Segment attached='bottom' className='remove-bg' >
                    <Menu fluid compact className='notes-menu'>
                        <Menu.Item position='right'>
                            <Button className='remove-bg'><Button.Content><Icon circular size='huge' name='file text'  className='add-new-note' /></Button.Content></Button>
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