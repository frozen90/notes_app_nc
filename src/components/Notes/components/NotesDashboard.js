import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '../../../graphql/queries'
import { Grid, Segment, Icon, Button, Header, Menu } from 'semantic-ui-react'
import '.././ExtraCssNotes.css'
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion"

export const NotesDashboard = ({ notes }) => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Notes Dashboard</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            <Grid.Column computer={16} mobile={16} tablet={16} className="notes-dashboard">
            <Menu className='notes-menu'>
                <Menu.Item
                name='Notes'>
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