import React, { useState } from "react";
import { Dimmer, Button, Header, Input, Message, Card } from "semantic-ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { listSharedNotes } from "../../../../../graphql/queries";
import LockedNote from "./LockedNote";

export const ProtectedNote = ({ noteId }) => {
    const [note, setNote] = useState({})
    const [locked, setLocked] = useState(true)
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const [requestLoading, setRequestLoading] = useState(false)


    async function checkPassword(password) {
        let password_filter = { and: [{ id: { eq: noteId }, password: { eq: password } }] }
        setRequestLoading(true)
        try {

            let results = await API.graphql(graphqlOperation(listSharedNotes, { filter: password_filter }))

            if (results.data.listSharedNotes.items.length > 0) {

                setNote(results.data.listSharedNotes.items[0])
                console.log('Hellou ?')
                setLocked(false)
                setRequestLoading(false)

            } else {
                setError('Incorrect password')
                setRequestLoading(false)
            }

        } catch (err) {
            console.log(err)
            setError(err)
            setRequestLoading(false)
        }

    }
    return (
        <>
            {locked ?
                <Dimmer
                    page
                    active={locked}
                >
                    <Header as='h2' inverted>
                        Someone shared note with you. Use your password to unlock it
                    </Header>

                    <Input name='note_password' value={password} onChange={(e, { value }) => { setPassword(value) }} type='password' placeholder='Note Password' />
                    <br />
                    <Button loading={requestLoading} style={{ marginTop: '15px', backgroundColor: '#F6AE2D', color: 'white' }} onClick={() => { checkPassword(password) }}>Unlock</Button>
                    {error.length > 0 && (<Message error>{error}</Message>)}

                </Dimmer>
                :
                <Card.Group centered style={{ marginTop: '100px' }}>
                    <LockedNote note={note} />
                </Card.Group>

            }

        </>
    )

}


export default ProtectedNote