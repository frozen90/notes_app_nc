import React from "react"
import { Segment, Grid, Header, Label } from "semantic-ui-react"

export const Event = ({event}) => {

    return(
    <Grid.Row key={event.id} style={{padding:'25px'}}>
                <Segment raised className='event' style={{ width: '700px', height: '150px'}}>
                    <Label ribbon='right' color='red' attached='top right' size='large' style={{ marginRight: '-310px' }} >{new Date(event.date).toTimeString()}</Label>
                    <Header inverted>Title </Header>
                    <div style={{ color: 'white' }}>{event.content}</div>
                </Segment>
            </Grid.Row>
    )
}

export default Event