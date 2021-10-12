import React, { useState } from "react"
import { Form, Segment, Header, Button, Input, Dimmer, Icon, Message } from "semantic-ui-react"


export const NewEventDimmer = ({ createNewEvent, active, setActive, fetchPlannedDates }) => {
    const [time, setTime] = useState('')
    const [sucessMsg, setSuccessMsg] = useState('')
    const [error, setError] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    async function handleSubmit() {
        let data = { title: title, content: content }
        await createNewEvent(data, time)



    }
    return (
        <Dimmer
            page
            active={active}
        >
            <Segment inverted style={{ padding: '45px' }} >
                <Button floated='right' className='remove-bg' >
                    <Button.Content>
                        <Icon name='close' size='big' style={{ marginRight: '-70px', marginTop: '-70px' }} onClick={() => {fetchPlannedDates();setActive(false) }} inverted />
                    </Button.Content></Button><br />
                <Header as='h2' inverted>
                    Please setup your event.
                </Header>
                <Form inverted>
                    <Form.Input required name='title' type='time' value={time} label="Time" placeholder='Time' onChange={(e, { value }) => { setTime(value) }} />
                    <Form.Input required name='title' type='text' value={title} label="Event Title" placeholder='Event Title' onChange={(e, { value }) => { setTitle(value) }} />
                    <Form.Input required name='content' value={content} label="Short Description" placeholder='Short Description' type='text' onChange={(e, { value }) => { setContent(value) }} />
                    <Button style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={(e) => { e.preventDefault(); handleSubmit() }}>Create New Event</Button>

                </Form>
                {error.length > 0 && (<Message error>{error}</Message>)}
                {sucessMsg.length > 0 && (<Message success>{sucessMsg}</Message>)}
            </Segment>
        </Dimmer>
    )


}

export default NewEventDimmer