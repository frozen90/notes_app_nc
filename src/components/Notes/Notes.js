import React, {useEffect, useState} from "react";
import {API, graphqlOperation} from 'aws-amplify';
import {listNotes} from '../../graphql/queries';


export const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(()=>{
        fetchNotes()
    },[])


    async function fetchNotes(){
        try{
            const notesData = await API.graphql(graphqlOperation(listNotes))
            const notes = notesData.data.listNotes.items
            setNotes(notes)
        }catch(err){
            console.log('error')
        }
    }

    return(
        <div>   
            HEHE
            {notes.map((note) => {
                return <div>{note}</div>
            })}
        </div>
    )
}

export default Notes;