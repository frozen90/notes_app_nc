import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '../../graphql/queries';
import { Grid, Segment, Icon, Button, Header} from 'semantic-ui-react'
import './ExtraCssNotes.css'
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

export const NotesDashboard = ({notes}) => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Notes Dashboard</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            <Grid.Column computer={16} mobile={16} tablet={16} className="notes-dashboard">

                <Segment textAlign='center' style={{ marginTop: '100px', background: 'transparent' }}>
                    <Icon size="massive" name='book' />
                    <Header as="h1" inverted>Nordcloud notes</Header>
                    <p style={{ color: 'white' }}>Take notes, reminders, share them with friends in secure manner</p>
                    <Button className="get-started-btn" content='Get Started' onClick={() => { setStart(true) }} />
                </Segment>
            </Grid.Column>
        </>
    )
}

NotesDashboard.propTypes ={
    notes: PropTypes.array
}


export default NotesDashboard;