import React, { useEffect, useState } from "react";
import { Grid, Header, Label, Segment, Loader, Button } from "semantic-ui-react";
import { listEvents, eventsByDate } from "../../../graphql/queries";
import { createEvents, createPlannedDates } from "../../../graphql/mutations";
import { API, graphqlOperation } from "@aws-amplify/api";
import NewEventDimmer from "./NewEventDimmer";
import Event from "./Event";


export const Events = ({ plannedDateId, setPlannedDateId, date, fetchPlannedDates }) => {

    const [loading, setLoading] = useState(false)
    const [plannedEvents, setPlannedEvents] = useState([])
    const [newEventDimmerActive, setNewEventDimmerActive] = useState(false)

    async function fetchEvents(plannedDateId) {
        setLoading(true)
        try {
            let eventFilter = { and: [{ plannedDateId: { eq: plannedDateId } }] }
            const events = await API.graphql(graphqlOperation(eventsByDate, { type: "Event", sortDirection: 'ASC', filter: eventFilter, }))
            console.log('events', events)
            setPlannedEvents(events.data.eventsByDate.items)
            setLoading(false)

        } catch (err) {
            setLoading(false)
        }
    }

    async function createNewEvent(data, time) {
        let combinedDate = date.toISOString().split('T')[0] + 'T' + time + ':00.000Z'
        try {
            let dateId = plannedDateId
            if (plannedDateId === '') {
                let plannedDate = await API.graphql(graphqlOperation(createPlannedDates, { input: { date: new Date(date).toISOString().split('T')[0] } }))
                dateId = plannedDate.data.createPlannedDates.id
            }
            await API.graphql(graphqlOperation(createEvents, { input: { title: data.title, content: data.content, plannedDateId: dateId, date: combinedDate, type: 'Event' } }))
            setPlannedDateId(dateId)
            await fetchEvents(dateId)

        } catch (err) {
            return err
        }
    }
    useEffect(() => {
        if (plannedDateId) {
            fetchEvents(plannedDateId)
        } else {
            setPlannedEvents([])
        }
    }, [plannedDateId])

    const mapEvents = plannedEvents.map((event) => {
        return (
            <Event key={event.id} event={event} />
        )
    })
    return (
        <>
            <Grid.Row>
                <Button className={'remove-bg add-new-note'} onClick={() => { setNewEventDimmerActive(true) }}>
                    <Button.Content>
                        New Event
                    </Button.Content>
                </Button>
            </Grid.Row>
            {!loading ? mapEvents : <Grid.Row><Loader style={{ marginTop: '50px' }} className='loader' active size='large'>Loading...</Loader></Grid.Row>}
            <NewEventDimmer fetchPlannedDates={fetchPlannedDates} setActive={setNewEventDimmerActive} active={newEventDimmerActive} createNewEvent={createNewEvent} />
        </>
    )
}

export default Events