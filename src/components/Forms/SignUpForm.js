import React, { useState } from "react";
import { Auth } from "aws-amplify"
import { Helmet } from "react-helmet";
// Ui Components
import {Grid, Header, Form, Message, Segment, Button } from "semantic-ui-react"


export const SignUpForm = ({setFormType, setUsername, username}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSignUpSubmit = async function (event) {
        event.preventDefault();
        setLoading(true)
        try {
            await Auth.signUp({ username, password, attributes: { email } })
            setFormType('confirmSignUp')
            setError('')
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
                <Form inverted size="large" onSubmit={handleSignUpSubmit}>

                    <Form.Input
                        required
                        label="Username"
                        placeholder='Username'
                        name='username'
                        icon="user"
                        iconPosition="left"
                        value={username}
                        onChange={(e, { value }) => {setUsername(value) }}
                    />
                    <Form.Input
                        required
                        label="Email"
                        placeholder='Email'
                        name='email'
                        type='email'
                        icon="mail"
                        iconPosition="left"
                        value={email}
                        onChange={(e, { value }) => { setEmail(value) }}
                    />
                    <Form.Input
                        required
                        fluid
                        label="Password"
                        placeholder='Password'
                        icon="lock"
                        iconPosition="left"
                        type="password"
                        name='password'
                        value={password}
                        onChange={(e, { value }) => { setPassword(value) }}
                    />
                    {error.length > 0 ?
                        <Message negative>
                            <p>{error}</p>
                        </Message>
                        : null
                    }
                    <Segment basic textAlign={"center"}>
                        <Button loading={loading} className="login-button" content='Signup' />
                    </Segment>


                </Form>
            </Segment>
            <Message color="black">
                Already registered ? <button className='remove-bg colored-btn' size='small' onClick={() => {setFormType("Login")}}>Go back to login</button>
            </Message>
        </Grid.Column>
    )
}


export default SignUpForm