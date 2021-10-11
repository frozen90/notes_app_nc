import React, { useEffect, useState } from "react";
// Ui Components / frameworks
import { Header, Card, Icon, Button, Dimmer, Input, Segment } from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
import { motion } from "framer-motion";
// GraphQl
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from "../../../../graphql/queries";
import { updateNotes, createSharedNote } from "../../../../graphql/mutations";
//Dimmers
import LockNoteDimmer from "./components/LockNoteDimmer";
import UnlockNoteDimmer from "./components/UnlockNoteDimmer";
import PreviewNoteDimmer from "./components/PreviewNoteDimmer";
import ShareNoteDimmer from "./components/ShareNoteDimmer";
//helpers
import { generateLink } from "../../../../utils/helpers/link_generator";
//PropTypes
import PropTypes from 'prop-types';

export const Note = ({ note, deleteNote, disabledFunctions }) => {
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
    const [shareDimmerActive, setShareDimmerActive] = useState(false)
    const [requestLoading, setRequestLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleTextChange = (e) => { setContent(e.target.value) }

    //dimmers actions
    const showPasswordDimmer = () => { setUnlockDimmerActive(true) }
    const showLockPasswordDimmer = () => { setLockDimmerActive(true) }
    const showPreviewDimmer = () => { setPreviewDimmerActive(true) }
    const handleHide = () => {
        setPreviewDimmerActive(false)
        setUnlockDimmerActive(false)
        setLockDimmerActive(false)
        setShareDimmerActive(false)
        setErrorMsg('')
    }

    async function checkPassword(inputPassword) {
        let password_filter = { and: [{ id: { eq: note.id }, password: { eq: inputPassword } }] }
        setRequestLoading(true)
        try {
            let results = await API.graphql(graphqlOperation(listNotes, { filter: password_filter }))
            if (results.data.listNotes.items.length > 0) {
                setLocked(false)
                handleHide()
                setRequestLoading(false)

            } else {
                setErrorMsg('Incorrect password')
                setRequestLoading(false)
            }

        } catch (err) {
            setErrorMsg(err)
            setRequestLoading(false)
        }
    }

    async function createPassword(inputPassword) {
        if (inputPassword.length > 0) {
            try {
                await API.graphql(graphqlOperation(updateNotes, { input: { id: note.id, password: inputPassword, locked: true } }))
                setLocked(true)
                setLockDimmerActive(false)
                setRequestLoading(false)
            } catch (err) {
                setErrorMsg(err)
                setRequestLoading(false)
            }
        } else {
            setErrorMsg('Password cannot be empty')
            setRequestLoading(false)
        }
    }

    async function updateNote(updateAction) {
        try {
            setBlockModifications(true)
            await API.graphql(graphqlOperation(updateNotes, updateAction))
            setBlockModifications(false)
        } catch (err) {
            console.log(err)
        }
    }

    async function shareNote(inputPassword, expiryDate) {
        setRequestLoading(true)
        let generatedLink = generateLink()
        if (inputPassword.length > 0) {
            try {
                const sharedNoteData = await API.graphql(graphqlOperation(createSharedNote, { input: { password: inputPassword, expire_date: new Date(expiryDate).toISOString(), title: note.title, content: note.content, link: generatedLink } }))
                console.log(sharedNoteData)
                setRequestLoading(false)
                return (generatedLink)
            } catch (err) {
                setErrorMsg(err)
                setRequestLoading(false)
            }
        } else {
            setErrorMsg('Password cannot be empty')
            setRequestLoading(false)
        }
    }

    return (
        <>
            <motion.div className="ui card note-bg" initial={{ scale: 0, y: +700, x: +1300 }} animate={{ scale: 1, y: 0, x: notePosition }}
                transition={{ ease: "easeOut", duration: 0.5 }}>
                <Card.Content textAlign='center' className='card-header-content'>
                    <Header as="h2" className='header-card'><Input readOnly={blockModifications} onBlur={() => { updateNote({ input: { id: note.id, title: title } }) }} inverted transparent maxLength="13" style={{ width: '165px' }} onChange={(e, { value }) => { setTitle(value) }} value={title} /></Header>
                </Card.Content>
                <Card.Content textAlign='left' className='note-content'>
                    {locked ?
                        <Button fluid className='remove-bg' onClick={() => { showPreviewDimmer() }}>
                            <Button.Content>
                                <Icon className='active-btn' name='eye' size='massive' />
                            </Button.Content></Button>
                        :
                        <TextareaAutosize onDoubleClick={() => { setEditable(true) }} onBlur={() => { setEditable(false); updateNote({ input: { id: note.id, content: content } }) }} value={content} onChange={handleTextChange} maxRows={10} className='remove-bg note-textarea' readOnly={!editable} />
                    }
                </Card.Content>
                <Card.Content extra className='btn-footer' >
                    <Button.Group>
                        <Button className='remove-bg' floated='right' >
                            <Button.Content>
                                <Icon size='large' inverted name='share square' onClick={() => { setShareDimmerActive(true) }}></Icon>
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
            <ShareNoteDimmer requestLoading={requestLoading} handleHide={handleHide} active={shareDimmerActive} shareNote={shareNote} errorMsg={errorMsg} />
            <LockNoteDimmer requestLoading={requestLoading} handleHide={handleHide} active={lockDimmerActive} createPassword={createPassword} errorMsg={errorMsg} />
            <PreviewNoteDimmer requestLoading={requestLoading} handleHide={handleHide} active={previewDimmerActive} checkPassword={checkPassword} errorMsg={errorMsg} />
            <UnlockNoteDimmer requestLoading={requestLoading} handleHide={handleHide} active={unlockDimmerActive} checkPassword={checkPassword} errorMsg={errorMsg} />
        </>
    )
}

Note.propTypes = {
    note: PropTypes.object,
    deleteNote: PropTypes.func
}

export default Note;