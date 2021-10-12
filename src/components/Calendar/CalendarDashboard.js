import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { Grid, Label, Segment, Loader, Button, Icon } from "semantic-ui-react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Events from "./components/Events";
import { listPlannedDates } from "../../graphql/queries";

export const CalendarDashboard = () => {
    const [loading, setLoading] = useState(true)
    const [plannedDates, setPlannedDates] = useState([])
    const [calendarValue, setCalendarValue] = useState(new Date())
    const [plannedDateId, setPlannedDateId] = useState('')

    useEffect(() => {
        fetchPlannedDates()
    }, [])

    async function fetchPlannedDates() {
        try {
            const dates = await API.graphql(graphqlOperation(listPlannedDates))
            setPlannedDates(dates.data.listPlannedDates.items)
            console.log(dates)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    const tileClassName = ({ date }) => {
        let classes = []
        plannedDates.map((e) => {
            if (new Date(date).toLocaleDateString() === new Date(e.date).toLocaleDateString()) {
                classes = ["plannedEventClass", ...classes]
            }
        })
        return classes
    }

    const handleCalendarValueChange = (date) => {
        plannedDates.map((plannedDate) => {
            if (new Date(date).toLocaleDateString() === new Date(plannedDate.date).toLocaleDateString()) {
                setPlannedDateId(plannedDate.id)
            } else {
                setPlannedDateId('')
            }
        })
        setCalendarValue(date)
    }

    return (
        <>
            {!loading ?
                <Grid centered columns={16}>
                    <Grid.Row>
                        <Calendar value={calendarValue} view="month" tileClassName={tileClassName} onChange={handleCalendarValueChange} />
                    </Grid.Row>
                    <Grid.Row>
                        <Label circular size='large' className='orangeDot' key={0}> Today</Label>
                        <Label circular className='greenDot' size='large' key={1}>Planned</Label>
                    </Grid.Row>
                    <Grid.Row>
                    <Button className={'remove-bg add-new-note'}  >
                                <Button.Content>
                                    New Event
                                </Button.Content>
                            </Button>
                    </Grid.Row>
                        {plannedDateId.length > 0 &&(<Events plannedDateId={plannedDateId} />)}

                </Grid>
                :
                <Loader className='loader' active size='large'>Loading...</Loader>
            }

        </>
    )
}

export default CalendarDashboard