import React, { useEffect, useState, useRef } from "react";
import { Dimmer, Button, Segment, Input, Icon, Header, Message, Select } from "semantic-ui-react";


export const ShareNoteDimmer = ({ handleHide, active, errorMsg, requestLoading, shareNote }) => {
    console.log(window.location.origin)
    const [error, setError] = useState(errorMsg)
    const [sharePassword, setSharePassword] = useState('')
    const [date, setDate] = useState(new Date().toLocaleString('sv').replace(' ', 'T'))
    const [generatedLink, setGeneratedLink] = useState('')

    const checkDate = (date) => {
        if (date < new Date().toLocaleString('sv').replace(' ', 'T')) {
            setError('Date has to be greater than current time.')
        } else {
            setError('')
            setDate(date)
        }
    }
    async function shareNoteReturn(sharePassword) {
        const link = await shareNote(sharePassword,date)
        setGeneratedLink(window.location.origin + '/shared-notes/' + link)
    }

    useEffect(() => {
        setError(errorMsg)
    }, [errorMsg])

    return (

        <Dimmer
            page
            active={active}
            onClickOutside={() => { handleHide(); setSharePassword('') }}
        >
            <Segment inverted style={{ padding: '45px' }} >
                <Button floated='right' className='remove-bg' onClick={() => { handleHide(); setSharePassword('') }}>
                    <Button.Content>
                        <Icon name='close' size='big' style={{ marginRight: '-70px', marginTop: '-70px' }} inverted />
                    </Button.Content></Button><br />
                <Header as='h2' inverted>
                    Please provide password, <br /> and click share. Share link will be generated automatically.
                </Header>

                <Input name='note_password' type='password' value={sharePassword} placeholder='Note Password' onChange={(e, { value }) => { setSharePassword(value) }} /><br />
                <div className="expiry-date-label">
                    <label >Select note expiry date</label><br />
                    <Input style={{ width: '220px', marginTop: '5px' }} name='expiry_date' value={date} type='datetime-local' onChange={(e, { value }) => { checkDate(value) }} /> <br />
                    <Button loading={requestLoading} style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={() => { shareNoteReturn(sharePassword) }}>Share</Button>
                </div>
                {error.length > 0 && (<Message error>{error}</Message>)}
                {generatedLink.length > 0 && (<Message success>Please find your share link generated below. Expiring at: {new Date(date).toLocaleString()}<br/><a href={generatedLink}>{generatedLink}</a></Message>)}
            </Segment>
        </Dimmer>
    )
}

export default ShareNoteDimmer