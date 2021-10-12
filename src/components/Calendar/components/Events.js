import React, { useEffect, useState } from "react";
import { Grid, Header, Label, Segment, Loader, Button } from "semantic-ui-react";
import { listEvents } from "../../../graphql/queries";
import { API, graphqlOperation } from "@aws-amplify/api";
import NewEventDimmer from "./NewEventDimmer";

export const Events = ({ plannedDateId }) => {
    const [loading, setLoading] = useState(false)
    const [plannedEvents, setPlannedEvents] = useState([])
    const [newEventDimmerActive, setNewEventDimmerActive] = useState(false)
    async function fetchEvents(plannedDateId) {
        setLoading(true)
        try {
            let password_filter = { and: [{ plannedDateId: { eq: plannedDateId } }] }
            const events = await API.graphql(graphqlOperation(listEvents, { filter: password_filter }))
            setPlannedEvents(events.data.listEvents.items)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    async function createNewEvent() {

    }
    useEffect(() => {
        if (plannedDateId.length > 0) {
            fetchEvents(plannedDateId)
        } else {
            setPlannedEvents([])
        }
    }, [plannedDateId])
    const mapEvents = plannedEvents.map((event) => {
        return (
            <Grid.Row>
                <Segment raised className='event' style={{ width: '750px', height: '150px', padding: '10px' }}>
                    <Label ribbon='right' color='red' attached='top right' size='large' style={{ marginRight: '-85px' }} >{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Label>
                    <Header inverted>Title </Header>
                    <div style={{ color: 'white' }}>{event.content}</div>
                </Segment>
            </Grid.Row>
        )
    })
    return (
        <>
            <Grid.Row>
                <Button className={'remove-bg add-new-note'} onClick={()=>{setNewEventDimmerActive(true)}}>
                    <Button.Content>
                        New Event
                    </Button.Content>
                </Button>
            </Grid.Row>
            {!loading ? mapEvents : <Grid.Row><Loader style={{ marginTop: '50px' }} className='loader' active size='large'>Loading...</Loader></Grid.Row>}
        <NewEventDimmer setActive={setNewEventDimmerActive} active={newEventDimmerActive} />
        </>
    )
}

export default Events