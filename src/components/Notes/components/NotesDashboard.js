import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '../../../graphql/queries'
import { Grid, Segment, Icon, Button, Header, Menu, Search, Dropdown } from 'semantic-ui-react'
import '.././ExtraCssNotes.css';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion"

export const NotesDashboard = ({ notes }) => {
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
                        <Dropdown item icon='ellipsis horizontal' className='elipsis-icon' onClick={()=>{setShowSearch(false)}}>
                        <Dropdown.Menu className="tools-menu">
                            <Dropdown.Item>Option #2</Dropdown.Item>
                            <Dropdown.Item>Option #3</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>



                </Menu>
            </Grid.Column>
        </>
    )
}

NotesDashboard.propTypes = {
    notes: PropTypes.array
}


export default NotesDashboard;