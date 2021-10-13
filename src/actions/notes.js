import { API, graphqlOperation } from 'aws-amplify';
import { notesByDate } from '../graphql/queries';


export async function fetchNotes() {
    try {
        const notesData = await API.graphql(graphqlOperation(notesByDate, { type: "Note", sortDirection: 'DESC' }))
        const notes = notesData.data.notesByDate.items
        return notes
    } catch (err) {
        console.log(err)
    }
}