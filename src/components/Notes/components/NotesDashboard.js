import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '../../../graphql/queries'
import { Grid, Segment, Icon, Button, Header } from 'semantic-ui-react'
import '.././ExtraCssNotes.css'
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

export const NotesDashboard = ({ notes }) => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Notes Dashboard</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            <Grid.Column computer={16} mobile={16} tablet={16} className="notes-dashboard">
                <Segment textAlign='center' style={{ marginTop: '100px', background: 'transparent' }}>
                </Segment>
            </Grid.Column>
        </>
    )
}

NotesDashboard.propTypes = {
    notes: PropTypes.array
}


export default NotesDashboard;