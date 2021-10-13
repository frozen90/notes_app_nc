import React, { useState } from "react";
import { Grid, Segment, Button, Menu } from 'semantic-ui-react'
import Auth from "@aws-amplify/auth";
import './ExtraCss.css';
import PropTypes from 'prop-types';
import FoldersDashboard from "../Folders/FoldersDashboard";
import NotesDashboard from "../Notes/components/Notes/NotesDashboard";
import CalendarDashboard from "../Calendar/CalendarDashboard";




export const Dashboard = ({ notesList, foldersList}) => {
    const [navSelection, setNavSelection] = useState('Notes')

    async function logOut(){
        await Auth.signOut(); 
        window.location.href="/login"
    }
    return (
        <>
            <Grid.Column computer={16} mobile={16} tablet={16} className="notes-dashboard"  data-testid='main-dashboard'>
            <Button floated="right" icon="log out" size='big' style={{backgroundColor: '#706FC8'}} onClick={()=>{ logOut()}}></Button>
                <Menu fluid compact className='notes-menu'>
                    <Menu.Item
                        as='h2'
                        name={navSelection}>
                    </Menu.Item>
                </Menu>
                <Segment className='remove-bg' textAlign='center'>
                    <Button size='huge' value='Notes' className={navSelection === 'Notes' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Notes</Button>
                    <Button size='huge' value='Folders' className={navSelection === 'Folders' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Folders</Button>
                    <Button size='huge' value='Calendar' className={navSelection === 'Calendar' ? 'dashboard-btns active-btn' : 'dashboard-btns'} onClick={(e, { value }) => { setNavSelection(value) }}>Calendar</Button>
                </Segment>
                <Segment textAlign='center' className='remove-bg notes-segment'>
                    {navSelection === 'Notes' && (<NotesDashboard notesList={notesList} />)}
                    {navSelection === 'Folders' && (<FoldersDashboard foldersList={foldersList} />)}
                    {navSelection === 'Calendar' && (<CalendarDashboard />)}
                </Segment>

            </Grid.Column>

        </>
    )
}

Dashboard.propTypes = {
    notesList: PropTypes.array,
    foldersList: PropTypes.array
}


export default Dashboard;