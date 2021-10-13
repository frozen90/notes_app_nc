import { API, graphqlOperation } from 'aws-amplify';
import { notesByDate, listNotes } from '../graphql/queries';
import { createNotes, updateNotes,deleteNotes, createSharedNote } from '../graphql/mutations';
import { generateLink } from '../utils/helpers/link_generator';


export async function fetchNotes() {
    try {
        const notesData = await API.graphql(graphqlOperation(notesByDate, { type: "Note", sortDirection: 'DESC' }))
        const notes = notesData.data.notesByDate.items
        return notes
    } catch (err) {
        console.log(err)
    }
}

export async function createNewNote() {
    try {
        await API.graphql(graphqlOperation(createNotes, { input: { title: 'Untitled Note', content: 'Please add some content...', locked: false, password: '', type: 'Note' } }))
    } catch (err) {
        return err
    }
}


export async function deleteNote(id) {
    try {
        await API.graphql(graphqlOperation(deleteNotes, { input: { id: id } }))
    } catch (err) {
        console.log(err)
    }
}


export async function checkPassword(password, note) {
    let password_filter = { and: [{ id: { eq: note.id }, password: { eq: password } }] }
    try {
        let results = await API.graphql(graphqlOperation(listNotes, { filter: password_filter }))
        if (results.data.listNotes.items.length > 0) {
            return true
        } else {
            return false
        }
    } catch (err) {
        console.log(err)
    }
}

export async function createPassword(password,note) {
    if (password.length > 0) {
        try {
            await API.graphql(graphqlOperation(updateNotes, { input: { id: note.id, password: password, locked: true } }))
            return true
        } catch (err) {
            return err
        }
    } else {
        return 'Password cannot be empty'
    }
}

export async function updateNote(updateAction) {
    try {
        let note = await API.graphql(graphqlOperation(updateNotes, updateAction))
        return note
    } catch (err) {
        return err
    }
}

export async function shareNote(password, expiryDate, title, content) {
    console.log(title,content)
    let generatedLink = generateLink()
    if (password.length > 0) {
        try {
            await API.graphql(graphqlOperation(createSharedNote, { input: { password: password, expire_date: new Date(expiryDate).toISOString(), title: title, content: content, link: generatedLink } }))
            return {type:'Success',link:generatedLink}
        } catch (err) {
            return err

        }
    } else {
        return 'Password cannot be empty'
    }
}