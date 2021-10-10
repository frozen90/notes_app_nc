import React, { useState } from "react"
import { Button, Card } from "semantic-ui-react"
import Note from "./Note"



export const NotesDisplay = ({notes, deleteNote}) => {
    const [notesList, setNotesList] = useState(notes)
    const listNotes = notesList.map((note)=>{
        return(<Note deleteNote={deleteNote} key={note.id} note={note}/>)
    })

    return (
        <Card.Group centered itemsPerRow={4} stackable >
            {listNotes}
           
        </Card.Group>
    )
}

export default NotesDisplay;