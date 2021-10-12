import React from "react"
import { Segment, Grid, Header, Label } from "semantic-ui-react"

export const Event = ({event}) => {

    return(
    <Grid.Row key={event.id}>
                <Segment raised className='event' style={{ width: '750px', height: '150px', padding: '10px' }}>
                    <Label ribbon='right' color='red' attached='top right' size='large' style={{ marginRight: '-85px' }} >{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Label>
                    <Header inverted>Title </Header>
                    <div style={{ color: 'white' }}>{event.content}</div>
                </Segment>
            </Grid.Row>
    )
}

export default Event