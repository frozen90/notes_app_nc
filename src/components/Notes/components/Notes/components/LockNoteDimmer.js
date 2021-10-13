import React, { useState } from "react";
import { Dimmer, Button, Segment, Input, Icon, Header, Message } from "semantic-ui-react";
import PropTypes from 'prop-types';

export const LockNoteDimmer = ({ handleHide, active, note , createPassword, errorMsg, requestLoading }) => {

    const [notePassword, setNotePassword] = useState('')


    return (

        <Dimmer
            page
            active={active}
            onClickOutside={()=>{handleHide(); setNotePassword('')}}
        >
            <Segment inverted style={{ padding: '45px' }} >
                <Button floated='right' className='remove-bg' onClick={()=>{handleHide(); setNotePassword('')}}>
                    <Button.Content>
                        <Icon name='close' size='big' style={{ marginRight: '-70px', marginTop: '-70px' }} inverted />
                    </Button.Content></Button><br />
                <Header as='h2' inverted>
                    Please create note <br /> password
                </Header>

                <Input name='note_password' type='password' value={notePassword} placeholder='Note Password' onChange={(e, { value }) => { setNotePassword(value) }} /><br />
                <Button loading={requestLoading} style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={() => {createPassword(notePassword,note); setNotePassword('')}}>Lock</Button>
                {errorMsg.length > 0 && (<Message error>{errorMsg}</Message>)}
            </Segment>
        </Dimmer>
    )
}

LockNoteDimmer.propTypes = {
    handleHide: PropTypes.func,
    active:PropTypes.bool,
    note: PropTypes.object ,
    createPassword: PropTypes.func,
    errorMsg: PropTypes.string,
    requestLoading:PropTypes.bool
}


export default LockNoteDimmer