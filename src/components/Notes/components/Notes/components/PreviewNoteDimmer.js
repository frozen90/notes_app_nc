import React,{useState} from "react";
import { Dimmer, Button, Segment, Input, Icon, Header, Message } from "semantic-ui-react";


export const PreviewNoteDimmer = ({handleHide,note, active,checkPassword, errorMsg, requestLoading}) => {
    const [previewNotePassword, setPreviewNotePassword] = useState('')

    return (
        <Dimmer
            page
            active={active}
            onClickOutside={()=>{handleHide(); setPreviewNotePassword('')}}
        >
            <Segment inverted style={{ padding: '45px' }} >
                <Button floated='right' className='remove-bg' onClick={()=>{handleHide(); setPreviewNotePassword('')}}><Button.Content><Icon name='close' size='big' style={{ marginRight: '-70px', marginTop: '-70px' }} inverted /></Button.Content></Button><br />
                <Header as='h2' inverted>
                    To preview the note <br /> please provide password
                </Header>

                <Input name='note_password' type='password' value={previewNotePassword} placeholder='Note Password' onChange={(e,{value})=>{setPreviewNotePassword(value)}}/><br />
                <Button loading={requestLoading} style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={() => {checkPassword(previewNotePassword,note); setPreviewNotePassword('')}}>Preview</Button>
                {errorMsg.length > 0 && (<Message error>{errorMsg}</Message>)}
            </Segment>
        </Dimmer>
    )
}


export default PreviewNoteDimmer