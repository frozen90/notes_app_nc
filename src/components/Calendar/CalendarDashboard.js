import React from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import { Grid, Segment } from "semantic-ui-react";

export const CalendarDashboard = () => {
    return (
        <Grid centered columns={16}>
        <Calendar tileClassName='tiles'/>
        </Grid>
    )
}

export default CalendarDashboard