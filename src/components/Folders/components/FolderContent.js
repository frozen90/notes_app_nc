import React, { useEffect, useState } from "react";
import { Card, Button, Icon, Loader, Header } from "semantic-ui-react";
import { API, graphqlOperation } from "@aws-amplify/api";
import Note from "../../Notes/components/Notes/components/Note";
import { deleteNotes, createNotes } from "../../../graphql/mutations";
import { notesByDate } from "../../../graphql/queries";

export const FolderContent = ({ folderId, folderName }) => {
    const sections = [
        { key: 'home', content: 'Home', link: true },
        { key: 'registration', content: 'Registration', link: true },
        { key: 'info', content: 'Personal Information', active: true },
      ]
      
    const [loading, setLoading] = useState(true)
    const [notes, setNotes] = useState([])
    const [btnLoading, setBtnLoading] = useState(false)
    const listNotes = notes.map((note) => {
        return (<Note deleteNote={deleteNote} key={note.id} note={note} />)
    })

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

    async function createNewNote() {
        try {
            setBtnLoading(true)
            const notesData = await API.graphql(graphqlOperation(createNotes, { input: { title: 'Untitled Note', content: 'Please add some content...', locked: false, password: '', type: 'Note', folderID: folderId } }))
            let note = notesData.data.createNotes
            setNotes([note, ...notes])
            setBtnLoading(false)
        } catch (err) {
            setBtnLoading(false)
            console.log('error')
        }
    }
    // let eventFilter = { and: [{ plannedDateId: { eq: plannedDateId } }] }
    //         const events = await API.graphql(graphqlOperation(eventsByDate, { type: "Event", sortDirection: 'ASC', filter: eventFilter, }))
    async function fetchNotesByFolder() {
        try {
            const notesData = await API.graphql(graphqlOperation(notesByDate, { type: "Note", sortDirection: 'DESC', filter: { and: [{ folderID: { eq: folderId } }] } }))
            const notes = notesData.data.notesByDate.items
            setNotes(notes)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchNotesByFolder()
    }, [folderId])
    return (
        <>
        <Header inverted className="fixed-folder-name" >Folder Name: {folderName}</Header>
            {!loading ?
                <Card.Group centered itemsPerRow={4} stackable >
                    {listNotes}
                    <Button className={notes.length > 0 ? 'remove-bg fixed-btn' : 'remove-bg margin-btn'} onClick={createNewNote} loading={btnLoading} disabled={btnLoading} >
                        <Button.Content>
                            <Icon circular size='huge' name='plus' className='add-new-note' />
                        </Button.Content>
                    </Button>
                </Card.Group>
                :

                <Loader className='loader' active size='large'>Loading...</Loader>
            }


        </>
    )
}

export default FolderContent