import React, { useState } from "react";
import { Auth } from "aws-amplify"
import { Helmet } from "react-helmet";
// Ui Components
import {Grid, Header, Form, Message, Segment, Button } from "semantic-ui-react"

export const ConfirmSignupForm = ({setFormType, username}) => {

    const [authCode, setAuthCode] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState ('')

    const handleSignupConfim = async function (event) {
        event.preventDefault();
        setLoading(true)
        try {
            await Auth.confirmSignUp(username, authCode)
            setFormType("Login")
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }

    return (
        <Grid.Column computer={6} mobile={16} tablet={10}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Signup</title>
                <link rel="canonical" href="/signup" />
            </Helmet>
            <Header inverted as="h2" textAlign="center">
                Create New Account
            </Header>
            <Segment inverted>
                <Form inverted size="large" onSubmit={handleSignupConfim}>

                    <Form.Input
                        label="Confirmation Code"
                        placeholder='Confirmation code'
                        name='authCode'
                        icon="key"
                        iconPosition="left"
                        value={authCode}
                        onChange={(e, { value }) => { setAuthCode(value) }}
                    />
                    {error.length > 0 ?
                        <Message negative>
                            <p>{error}</p>
                        </Message>
                        : null
                    }
                    <Segment basic textAlign={"center"}>
                        <Button loading={loading} className="login-button" content='Confirm Sign Up' />
                    </Segment>


                </Form>
            </Segment>

        </Grid.Column>
    )
}


export default ConfirmSignupForm