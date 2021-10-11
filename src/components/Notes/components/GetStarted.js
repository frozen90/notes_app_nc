import React from "react";
import { Grid, Segment, Button, Icon, Header } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

export const GetStarted = ({dismissWelcome}) => {

    return (
        <Grid.Column computer={16} mobile={16} tablet={16} className="notes-dashboard">
            <motion.div animate={{
                scale: [0.1, 1],
            }} transition={{ duration: 0.5 }} >
                <Segment textAlign='center' style={{ marginTop: '100px', background: 'transparent' }}>
                    <Icon size="massive" inverted name='book' />
                    <Header as="h1" inverted>Nordcloud notes</Header>
                    <p style={{ color: 'white' }}>Take notes, reminders, share them with friends in secure manner</p>
                    <Button className="get-started-btn" content='Get Started' onClick={()=>{dismissWelcome()}} />
                </Segment>
            </motion.div>

        </Grid.Column>
    )
}

GetStarted.propTypes = {
    dismissWelcome: PropTypes.func,
}

export default GetStarted