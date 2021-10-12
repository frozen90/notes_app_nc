import React from "react";
import { Grid, Label } from "semantic-ui-react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export const CalendarDashboard = () => {
    return (
        <Grid centered columns={16}>
            <Grid.Row>
            <Calendar view="month" tileClassName={({ activeStartDate, date, view }) => (view === 'month' && date.getDay() === 3 ? 'testClass' : null)} />
            </Grid.Row>
            <Grid.Row>
                <Label circular size='large' color='orangeDot' key={0}> Today</Label>
                <Label circular className='greenDot' size='large' key={1}>Planned</Label>
            </Grid.Row>
        </Grid>
    )
}

export default CalendarDashboard