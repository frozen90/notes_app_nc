import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { Grid, Label, Loader} from "semantic-ui-react";
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
        setLoading(true)
        try {
            const dates = await API.graphql(graphqlOperation(listPlannedDates))
            setPlannedDates(dates.data.listPlannedDates.items)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
        setLoading(false)
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
        setPlannedDateId('')
        plannedDates.map((plannedDate) => {
            if (new Date(date).toLocaleDateString() === new Date(plannedDate.date).toLocaleDateString()) {
                setPlannedDateId(plannedDate.id)
            }
        })
        //fix for time select issue with react-calendar
        setCalendarValue(new Date(date.getTime() - (date.getTimezoneOffset() * 60000)))
    }

    return (
        <div data-testid='react-calendar-dashboard'>
            {!loading ?
                <Grid centered columns={16} >
                    <Grid.Row>
                        <Calendar utcOffset={0} value={calendarValue} view="month" tileClassName={tileClassName} onChange={handleCalendarValueChange} />
                    </Grid.Row>
                    <Grid.Row>
                        <Label circular size='large' className='orangeDot'> Today</Label>
                        <Label circular size='large' className='greenDot' >Planned</Label>
                        <Label circular size='large' className='purpleDot'> Active</Label>

                    </Grid.Row>

                    <Events setPlannedDateId={setPlannedDateId} fetchPlannedDates={fetchPlannedDates} date={calendarValue} plannedDateId={plannedDateId} />

                </Grid>
                :
                <Loader className='loader' active size='large'>Loading...</Loader>
            }

        </div>
    )
}

export default CalendarDashboard