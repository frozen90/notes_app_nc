import React, {useEffect, useState} from "react";
import Note from "./components/Note";
import {Icon, Button, Card } from 'semantic-ui-react'
import { createNewNote } from "../../../../actions/notes";
import PropTypes from 'prop-types';

export const NotesDashboard = ({notesList}) => {

    const [btnLoading, setBtnLoading] = useState(false)
    const [notes, setNotes] = useState(notesList)

    const listNotes = notes.map((note) => {
        return (<Note key={note.id} note={note} />)
    })


    useEffect(()=>{
        setNotes(notesList)
    },[notesList])

    return (
        <div data-testid="notes-dashboard">
            <Card.Group centered itemsPerRow={4} stackable >
                {listNotes}
                <Button data-testid="add-new-btn" className={notes.length > 0 ? 'remove-bg fixed-btn' : 'remove-bg margin-btn'} onClick={createNewNote} loading={btnLoading} disabled={btnLoading} >
                    <Button.Content>
                        <Icon circular size='huge' name='plus' className='add-new-note' />
                    </Button.Content>
                </Button>
            </Card.Group>

        </div>
    )
}

NotesDashboard.propTypes = {
    notesList: PropTypes.array
}

export default NotesDashboard