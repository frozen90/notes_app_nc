import React, { useState } from "react";
import { Dimmer, Button, Segment, Input, Icon, Header, Message } from "semantic-ui-react";
export const UnlockNoteDimmer = ({ handleHide, active, note, checkPassword, errorMsg, requestLoading}) => {

    const [unlockNotePassword, setUnlockNotePassword] = useState('')

    return (
        <Dimmer
            page
            active={active}
            onClickOutside={()=>{handleHide(); setUnlockNotePassword('')}}

        >
            <Segment inverted style={{ padding: '45px' }} >

                <Button floated='right' className='remove-bg' onClick={()=>{handleHide(); setUnlockNotePassword('')}}><Button.Content><Icon name='close' size='big' style={{ marginRight: '-70px', marginTop: '-70px' }} inverted /></Button.Content></Button>
                <br />

                <Header as='h2' inverted>
                    You are about to unlock the note. Please provide note <br /> password
                </Header>

                <Input name='note_password' type='password' value={unlockNotePassword} placeholder='Note Password' onChange={(e, { value }) => { setUnlockNotePassword(value) }} />
                <br />
                <Button loading={requestLoading} style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={() => { checkPassword(unlockNotePassword, note); setUnlockNotePassword('') }}>Unlock</Button>
                {errorMsg.length > 0 && (<Message error>{errorMsg}</Message>)}

            </Segment>
        </Dimmer>
    )
}

export default UnlockNoteDimmer