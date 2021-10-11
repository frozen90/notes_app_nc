import React, { useState } from "react";
import { Dimmer, Button, Segment, Input, Icon, Header, Message, Select } from "semantic-ui-react";

export const ShareNoteDimmer = ({ handleHide, active, errorMsg, requestLoading, shareNote}) => {

    const [sharePassword, setSharePassword] = useState('')
    const [lifetime, setLifetime] = useState('')


    return (

        <Dimmer
            page
            active={active}
            onClickOutside={()=>{handleHide(); setSharePassword('')}}
        >
            <Segment inverted style={{ padding: '45px' }} >
                <Button floated='right' className='remove-bg' onClick={()=>{handleHide(); setSharePassword('')}}>
                    <Button.Content>
                        <Icon name='close' size='big' style={{ marginRight: '-70px', marginTop: '-70px' }} inverted />
                    </Button.Content></Button><br />
                <Header as='h2' inverted>
                    Please provide password, <br /> and click share. Share link will be generated automatically.
                </Header>

                <Input name='note_password' type='password' value={sharePassword} placeholder='Note Password' onChange={(e, { value }) => { setSharePassword(value) }} /><br />
                <Input style={{marginTop:'5px'}} placeholder='Select expiry time for your note' min={new Date().toISOString} type='datetime-local'/> <br/>
                <Button loading={requestLoading} style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={() => { shareNote(sharePassword)}}>Share</Button>
                {errorMsg.length > 0 && (<Message error>{errorMsg}</Message>)}
            </Segment>
        </Dimmer>
    )
}

export default ShareNoteDimmer