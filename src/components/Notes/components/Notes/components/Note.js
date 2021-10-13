import React, { useState } from "react";
// Ui Components / frameworks
import { Header, Card, Icon, Button, Input, Popup } from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
import { motion } from "framer-motion";
// Actions
import { updateNote, deleteNote, shareNote, checkPassword, createPassword } from "../../../../../actions/notes";
//Dimmers
import LockNoteDimmer from "./LockNoteDimmer";
import UnlockNoteDimmer from "./UnlockNoteDimmer";
import PreviewNoteDimmer from "./PreviewNoteDimmer";
import ShareNoteDimmer from "./ShareNoteDimmer";
//PropTypes
import PropTypes from 'prop-types';

export const Note = ({ note }) => {
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

    async function handleCheckPassword(password, note) {
        setRequestLoading(true)
        let check = await checkPassword(password, note)
        if (check === true) {
            setLocked(false)
            handleHide()
            setRequestLoading(false)
        } else {
            setErrorMsg('Incorrect password')
            setRequestLoading(false)
        }
        setRequestLoading(false)
    }
    async function handleCreatePassword(password, note) {
        setRequestLoading(true)
        let request = await createPassword(password, note)
        if (request === true) {
            setLocked(true)
            handleHide()
            setRequestLoading(false)
        } else {
            setErrorMsg(request)
            setRequestLoading(false)
        }
    }

    async function handleShareNote(password, exipryDate, title, content) {
        console.log(title, content)
        setRequestLoading(true)
        let request = await shareNote(password, exipryDate, title, content)
        if (request.type !== undefined) {
            setRequestLoading(false)
            return request.link
        } else {
            setErrorMsg(request)
            setRequestLoading(false)
        }
        setRequestLoading(false)
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
                                <div style={locked ? { color: 'white' } : { display: 'none' }}>
                                    Only Unlocked Folders can be shared
                                </div>
                            </Button.Content></Button>
                        :
                        <TextareaAutosize onDoubleClick={() => { setEditable(true) }} onBlur={() => { setEditable(false); updateNote({ input: { id: note.id, content: content } }) }} value={content} onChange={handleTextChange} maxRows={10} className='remove-bg note-textarea' readOnly={!editable} />
                    }
                </Card.Content>
                <Card.Content extra className='btn-footer' >

                    <Button.Group>
                        <Button disabled={locked} aria-label='share' className='remove-bg' floated='right' >
                            <Button.Content>
                                <Icon size='large' inverted name='share square' onClick={() => { setShareDimmerActive(true) }}></Icon>
                            </Button.Content>

                        </Button>
                        <Button aria-label='lock-btn' className='remove-bg' floated='right' onClick={locked ? showPasswordDimmer : showLockPasswordDimmer}>
                            <Button.Content>
                                <Icon size='large' className='active-btn' inverted name={locked ? 'unlock' : 'lock'}></Icon>
                            </Button.Content>
                        </Button>
                        <Button aria-label='delete-btn' className='remove-bg' floated='right' onClick={() => { deleteNote(note.id); setNotePosition(-4000) }} >
                            <Button.Content>
                                <Icon size='large' color='red' inverted name='trash'></Icon>
                            </Button.Content>
                        </Button>
                    </Button.Group>
                </Card.Content>
            </motion.div>
            <ShareNoteDimmer title={title} content={content} requestLoading={requestLoading} handleHide={handleHide} active={shareDimmerActive} shareNote={handleShareNote} errorMsg={errorMsg} />
            <LockNoteDimmer note={note} requestLoading={requestLoading} handleHide={handleHide} active={lockDimmerActive} createPassword={handleCreatePassword} errorMsg={errorMsg} />
            <PreviewNoteDimmer note={note} requestLoading={requestLoading} handleHide={handleHide} active={previewDimmerActive} checkPassword={handleCheckPassword} errorMsg={errorMsg} />
            <UnlockNoteDimmer note={note} requestLoading={requestLoading} handleHide={handleHide} active={unlockDimmerActive} checkPassword={handleCheckPassword} errorMsg={errorMsg} />
        </>
    )
}

Note.propTypes = {
    note: PropTypes.object,
}

export default Note;