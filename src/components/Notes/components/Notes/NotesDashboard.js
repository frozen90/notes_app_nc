import React, {useState} from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { createNotes, deleteNotes } from "../../../../graphql/mutations";
import Note from "./components/Note";
import {Icon, Button, Card } from 'semantic-ui-react'

export const NotesDashboard = ({notesList}) => {

    const [btnLoading, setBtnLoading] = useState(false)
    const [notes, setNotes] = useState(notesList)

    const listNotes = notes.map((note) => {
        return (<Note deleteNote={deleteNote} key={note.id} note={note} />)
    })

    async function createNewNote() {
        try {
            setBtnLoading(true)
            const notesData = await API.graphql(graphqlOperation(createNotes, { input: { title: 'Untitled Note', content: 'Please add some content...', locked: false, password: '', type: 'Note' } }))
            let note = notesData.data.createNotes
            setNotes([note, ...notes])
            setBtnLoading(false)
        } catch (err) {
            setBtnLoading(false)
            console.log('error')
        }
    }

    async function deleteNote(id) {
        try {
            await API.graphql(graphqlOperation(deleteNotes, { input: { id: id } }))
            let removeIndex = notes.findIndex(item => item.id === id);
            notes.splice(removeIndex, 1)
            setNotes([...notes])

        } catch (err) {
            console.log(err)
            console.log('error')
        }
    }

    return (
        <>
            <Card.Group centered itemsPerRow={4} stackable >
                {listNotes}
                <Button className={notes.length > 0 ? 'remove-bg fixed-btn' : 'remove-bg margin-btn'} onClick={createNewNote} loading={btnLoading} disabled={btnLoading} >
                    <Button.Content>
                        <Icon circular size='huge' name='plus' className='add-new-note' />
                    </Button.Content>
                </Button>
            </Card.Group>

        </>
    )
}

export default NotesDashboard