import React, { useState } from "react";
import { Header, Card, Icon, Button, Dimmer, Input, Segment } from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
import { AnimatePresence, motion } from "framer-motion";


export const Note = () => {
    const [password, setPassword] = useState('')
    const [unlockNotePassword, setUnlockNotePassword] = useState('')
    const [unlockDimmerActive, setUnlockDimmerActive] = useState(false)
    const [lockDimmerActive, setLockDimmerActive] = useState(false)
    const [locked, setLocked] = useState(false)
    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState("Smutny paragraf o zyciu i przemijaniu...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ex consequat, interdum sem ac, ornare enim. Pellentesque sit amet tortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac ortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac Pellentesque sit amet tortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac ortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac Pellentesque sit amet tortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac ortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac")
    const textAreaRef = React.createRef();
    const handleTextChange = (e) => {
        setValue(e.target.value)

    }
    const focusTextArea = () => {
        setEditable(true)
        textAreaRef.current.selectionStart = textAreaRef.current.value.length;
        textAreaRef.current.selectionEnd = textAreaRef.current.value.length;
        textAreaRef.current.focus();
    }

    const showPasswordDimmer = () => {
        setUnlockDimmerActive(true)
    }

    const showLockPasswordDimmer = () => {

        setLockDimmerActive(true)

    }

    const handleHide = () => {
        setUnlockDimmerActive(false)
        setLockDimmerActive(false)
    }
    const checkPassword = () => {
        if (unlockNotePassword === password) {
            setLocked(false)
            setUnlockDimmerActive(false)
        }
    }
    const createPassword = () => {
        if (password.length > 0) {
            setLocked(true)
            setLockDimmerActive(false)
        } else {
            console.log('password cannot be empty.')
        }
    }
    return (
        <>
            <motion.div className="ui card note-bg" initial={{ scale: 0, y: +700, x: +1300 }} animate={{ scale: 1, y: 0, x: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}>
                <Card.Content textAlign='center' className='card-header-content'><Header as="h2" className='header-card'>Title</Header></Card.Content>
                <Card.Content textAlign='left' className='note-content'>
                    {locked ? <Button fluid className='remove-bg' onClick={() => { showPasswordDimmer() }}><Button.Content><Icon name='lock' size='massive' /></Button.Content></Button> : <TextareaAutosize ref={textAreaRef} onDoubleClick={() => { setEditable(true) }} value={value} onChange={handleTextChange} maxRows={10} className='remove-bg note-textarea' readOnly={!editable} />}

                </Card.Content>
                <Card.Content extra>
                    <Button.Group >
                        <Button className='remove-bg' floated='right' onClick={focusTextArea}><Button.Content><Icon size='large' inverted name='edit'></Icon></Button.Content></Button>
                        <Button className='remove-bg' floated='right' onClick={locked ? showPasswordDimmer : showLockPasswordDimmer}><Button.Content><Icon size='large' color='orange' inverted name={locked ? 'unlock' : 'lock'}></Icon></Button.Content></Button>
                        <Button className='remove-bg' floated='right' ><Button.Content><Icon size='large' color='red' inverted name='trash'></Icon></Button.Content></Button>
                    </Button.Group>
                </Card.Content>

            </motion.div>
            <Dimmer
                page
                active={unlockDimmerActive}
                onClickOutside={handleHide}

            >
                <Segment inverted style={{padding:'45px'}} >
                <Button floated='right' className='remove-bg' onClick={()=>{setUnlockDimmerActive(false)}}><Button.Content><Icon name='close' size='big' style={{marginRight:'-70px', marginTop:'-70px'}}inverted /></Button.Content></Button><br/>
                <Header as='h2' inverted>
                    Please provide note <br/> password
                </Header>

                <Input name='note_password' value={unlockNotePassword} placeholder='Note Password' onChange={(e, { value }) => { setUnlockNotePassword(value) }} /><br />
                <Button style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={checkPassword}>Unlock</Button>
                </Segment>
            </Dimmer>
            <Dimmer
                page
                active={lockDimmerActive}
                onClickOutside={handleHide}
            >
                <Segment inverted style={{padding:'45px'}} >
                <Button floated='right' className='remove-bg' onClick={()=>{setLockDimmerActive(false)}}><Button.Content><Icon name='close' size='big' style={{marginRight:'-70px', marginTop:'-70px'}}inverted /></Button.Content></Button><br/>
                <Header as='h2' inverted>
                    Please create note <br/> password
                </Header>

                <Input name='note_password' value={password} placeholder='Note Password' onChange={(e, { value }) => { setPassword(value) }} /><br />
                <Button style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={createPassword}>Lock</Button>
                </Segment>
            </Dimmer>

        </>
    )
}

export default Note;