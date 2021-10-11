import React, { useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { Header, Card, Icon, Button, Dimmer, Input, Segment } from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { listNotes } from "../../../../graphql/queries";
//Dimmers
import LockNoteDimmer from "./components/LockNoteDimmer";
import UnlockNoteDimmer from "./components/UnlockNoteDimmer";
import PreviewNoteDimmer from "./components/PreviewNoteDimmer";



export const Note = ({ note, deleteNote, deleteLoading }) => {
    //note state
    const [notePosition, setNotePosition] = useState(0)
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)
    const [locked, setLocked] = useState(note.locked)
    const [editable, setEditable] = useState(false)

    //dimmers state
    const [unlockDimmerActive, setUnlockDimmerActive] = useState(false)
    const [lockDimmerActive, setLockDimmerActive] = useState(false)
    const [previewDimmerActive, setPreviewDimmerActive] = useState(false)


    const textAreaRef = React.createRef();

    const handleTextChange = (e) => {setContent(e.target.value)}

    //dimmers actions
    const showPasswordDimmer = () => {setUnlockDimmerActive(true)}
    const showLockPasswordDimmer = () => {setLockDimmerActive(true)}
    const showPreviewDimmer = () => {setPreviewDimmerActive(true)}
    const handleHide = () => {
        setPreviewDimmerActive(false)
        setUnlockDimmerActive(false)
        setLockDimmerActive(false)
    }

    async function checkPassword(inputPassword){
        let password_filter = {and:[{id:{eq:"b99847ba-690a-45e3-a194-d2e57a70d2d3"},password:{eq:""}}]}
        const passwordTest = await API.graphql(graphqlOperation(listNotes,{filter:password_filter}))
        if (inputPassword === "XD") {
            setLocked(false)
            setUnlockDimmerActive(false)
            setPreviewDimmerActive(false)
        }
    }

    const createPassword = (password) => {
        if (password.length > 0) {
            setLocked(true)
            setLockDimmerActive(false)
        } else {
            console.log('password cannot be empty.')
        }
    }
    return (
        <>
            <motion.div className="ui card note-bg" initial={{ scale: 0, y: +700, x: +1300 }} animate={{ scale: 1, y: 0, x: notePosition }}
                transition={{ ease: "easeOut", duration: 0.5 }}>
                <Card.Content textAlign='center' className='card-header-content'>
                    <Header as="h2" className='header-card'><Input inverted transparent style={{width:'155px'}} maxLength="13" onChange={(e,{value})=>{setTitle(value)}} value={title}/></Header>
                </Card.Content>
                <Card.Content textAlign='left' className='note-content'>
                    {locked ? 
                        <Button fluid className='remove-bg' onClick={() => { showPreviewDimmer() }}>
                            <Button.Content>
                                <Icon className='active-btn' name='eye' size='massive' />
                            </Button.Content></Button> 
                        : 
                        <TextareaAutosize onDoubleClick={() => { setEditable(true) }} value={content} onChange={handleTextChange} maxRows={10} className='remove-bg note-textarea' readOnly={!editable} />
                    }
                </Card.Content>
                <Card.Content extra className='btn-footer' >
                    <Button.Group>
                        <Button className='remove-bg' floated='right' >
                            <Button.Content>
                                <Icon size='large' inverted name='share square'></Icon>
                            </Button.Content>
                        </Button>
                        <Button className='remove-bg' floated='right' onClick={locked ? showPasswordDimmer : showLockPasswordDimmer}>
                            <Button.Content>
                                <Icon size='large' className='active-btn' inverted name={locked ? 'unlock' : 'lock'}></Icon>
                            </Button.Content>
                        </Button>
                        <Button className='remove-bg' floated='right' onClick={()=>{deleteNote(note.id); setNotePosition(-1000)}} >
                            <Button.Content>
                                <Icon size='large' color='red' inverted name='trash'></Icon>
                            </Button.Content>
                        </Button>
                    </Button.Group>
                </Card.Content>
            </motion.div>
            <LockNoteDimmer handleHide={handleHide} active={lockDimmerActive} closeFunction={()=>{setLockDimmerActive(false)}} createPassword={createPassword}/>
            <PreviewNoteDimmer handleHide={handleHide} active={previewDimmerActive} closeFunction={()=>{setPreviewDimmerActive(false)}} checkPassword={checkPassword}/>
            <UnlockNoteDimmer handleHide={handleHide} active={unlockDimmerActive} closeFunction={()=>{setUnlockDimmerActive(false)}} checkPassword={checkPassword}/>
        </>
    )
}

Note.propTypes = {
    note: PropTypes.object,
    deleteNote: PropTypes.func
}

export default Note;