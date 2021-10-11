import React,{useState} from "react";
import { Dimmer, Button, Segment, Input, Icon, Header } from "semantic-ui-react";


export const PreviewNoteDimmer = ({handleHide, active, closeFunction, checkPassword}) => {
    const [previewNotePassword, setPreviewNotePassword] = useState('')

    return (
        <Dimmer
            page
            active={active}
            onClickOutside={handleHide}
        >
            <Segment inverted style={{ padding: '45px' }} >
                <Button floated='right' className='remove-bg' onClick={closeFunction}><Button.Content><Icon name='close' size='big' style={{ marginRight: '-70px', marginTop: '-70px' }} inverted /></Button.Content></Button><br />
                <Header as='h2' inverted>
                    To preview the note <br /> please provide password
                </Header>

                <Input name='note_password' value={previewNotePassword} placeholder='Note Password' onChange={(e,{value})=>{setPreviewNotePassword(value)}}/><br />
                <Button style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={() => {checkPassword(previewNotePassword)}}>Preview</Button>
            </Segment>
        </Dimmer>
    )
}


export default PreviewNoteDimmer