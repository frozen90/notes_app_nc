import React, {useEffect, useState} from "react";
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

export const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(()=>{
        fetchNotes()
    },[])


    async function fetchNotes(){
        try{
            const notesData = await API.graphql(graphqlOperation(listPosts))
            console.log(notesData)
            const notes = notesData.data.listPosts.items
            console.log(notes)
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