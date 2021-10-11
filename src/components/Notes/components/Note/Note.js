import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { Header, Card, Icon, Button, Dimmer, Input, Segment } from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { listNotes } from "../../../../graphql/queries";
import { updateNotes } from "../../../../graphql/mutations";
//Dimmers
import LockNoteDimmer from "./components/LockNoteDimmer";
import UnlockNoteDimmer from "./components/UnlockNoteDimmer";
import PreviewNoteDimmer from "./components/PreviewNoteDimmer";



export const Note = ({ note, deleteNote }) => {
    //note state
    const [notePosition, setNotePosition] = useState(0)
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)
    const [locked, setLocked] = useState(note.locked)
    const [editable, setEditable] = useState(false)
    const [blockModifications, setBlockModifications] = useState(false)

    //dimmers state
    const [unlockDimmerActive, setUnlockDimmerActive] = useState(false)
    const [lockDimmerActive, setLockDimmerActive] = useState(false)
    const [previewDimmerActive, setPreviewDimmerActive] = useState(false)

    const handleTextChange = (e) => { setContent(e.target.value) }

    //dimmers actions
    const showPasswordDimmer = () => { setUnlockDimmerActive(true) }
    const showLockPasswordDimmer = () => { setLockDimmerActive(true) }
    const showPreviewDimmer = () => { setPreviewDimmerActive(true) }
    const handleHide = () => {
        setPreviewDimmerActive(false)
        setUnlockDimmerActive(false)
        setLockDimmerActive(false)
    }

    async function checkPassword(inputPassword) {
        let password_filter = { and: [{ id: { eq: note.id }, password: { eq: inputPassword } }] }

        try {
            await API.graphql(graphqlOperation(listNotes, { filter: password_filter }))
            setLocked(false)
            handleHide()
        } catch (err) {

        }
    }

    async function createPassword(inputPassword) {
        if (inputPassword.length > 0) {
            await API.graphql(graphqlOperation(updateNotes, { input: { id: note.id, password: inputPassword, locked: true } }))
            setLocked(true)
            setLockDimmerActive(false)
        } else {
            console.log('password cannot be empty.')
        }
    }
    async function updateNote(updateAction) {
        try {
            setBlockModifications(true)
            await API.graphql(graphqlOperation(updateNotes, updateAction))
            setBlockModifications(false)
        } catch (err) {

        }
    }

    return (
        <>
            <motion.div className="ui card note-bg" initial={{ scale: 0, y: +700, x: +1300 }} animate={{ scale: 1, y: 0, x: notePosition }}
                transition={{ ease: "easeOut", duration: 0.5 }}>
                <Card.Content textAlign='center' className='card-header-content'>
                    <Header as="h2" className='header-card'><Input readOnly={blockModifications} onBlur={()=>{updateNote({input:{id:note.id, title:title}})}} inverted transparent maxLength="18" onChange={(e, { value }) => { setTitle(value) }} value={title} /></Header>
                </Card.Content>
                <Card.Content textAlign='left' className='note-content'>
                    {locked ?
                        <Button fluid className='remove-bg' onClick={() => { showPreviewDimmer() }}>
                            <Button.Content>
                                <Icon className='active-btn' name='eye' size='massive' />
                            </Button.Content></Button>
                        :
                        <TextareaAutosize onDoubleClick={() => { setEditable(true) }} onBlur={() => { setEditable(false); updateNote({input:{id:note.id, content:content}})}} value={content} onChange={handleTextChange} maxRows={10} className='remove-bg note-textarea' readOnly={!editable} />
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
                        <Button className='remove-bg' floated='right' onClick={() => { deleteNote(note.id); setNotePosition(-1000) }} >
                            <Button.Content>
                                <Icon size='large' color='red' inverted name='trash'></Icon>
                            </Button.Content>
                        </Button>
                    </Button.Group>
                </Card.Content>
            </motion.div>
            <LockNoteDimmer handleHide={handleHide} active={lockDimmerActive} closeFunction={() => { setLockDimmerActive(false) }} createPassword={createPassword} />
            <PreviewNoteDimmer handleHide={handleHide} active={previewDimmerActive} closeFunction={() => { setPreviewDimmerActive(false) }} checkPassword={checkPassword} />
            <UnlockNoteDimmer handleHide={handleHide} active={unlockDimmerActive} closeFunction={() => { setUnlockDimmerActive(false) }} checkPassword={checkPassword} />
        </>
    )
}

Note.propTypes = {
    note: PropTypes.object,
    deleteNote: PropTypes.func
}

export default Note;