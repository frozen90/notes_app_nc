import React from "react"
import { Segment, Grid, Header, Label, Icon } from "semantic-ui-react"
import { motion } from 'framer-motion'

export const Event = ({ event, fetchEvents }) => {




    return (

        <Grid.Row key={event.id} style={{ padding: '25px' }}>
            <Segment raised className='event' style={{ width: '700px', height: '150px' }}>
                <motion.div>
                    <Label ribbon='right' color='green' attached='top right' size='large' style={{ marginRight: '-310px' }} >{new Date(event.date).toTimeString()}</Label>
                    <Header inverted>Title </Header>
                    <div style={{ color: 'white' }}>{event.content}</div>
                    <Label className='remove-bg' attached='bottom right' circular >
                        <Icon name='trash' color='red' size='large' floated='right' style={{ cursor: 'pointer' }} />
                    </Label>
                </motion.div>
            </Segment>

        </Grid.Row>

    )
}

export default Event