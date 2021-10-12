import React, { useState } from "react"
import { Auth } from "aws-amplify"
import { Helmet } from "react-helmet";
// Ui Components
import {Grid, Header, Form, Message, Segment, Button } from "semantic-ui-react"


export const LoginForm = ({setFormType, setLoggedIn}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleLoginSubmit = async function (event) {
        event.preventDefault();
        setLoading(true)
        try {
            await Auth.signIn(username, password)
            setLoggedIn(true)
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }
    return (
        <Grid.Column computer={6} mobile={16} tablet={10}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            <Header inverted as="h2" textAlign="center">
                Log-in to your account
            </Header>
            <Segment inverted>
                <Form inverted size="large" onSubmit={handleLoginSubmit}>
                    <Form.Input
                        required
                        label="Username"
                        placeholder='Username'
                        name='username'
                        icon="user"
                        iconPosition="left"
                        value={username}
                        onChange={(e, { value }) => { setUsername(value) }}
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

                    <Segment inverted textAlign="center">
                        <Button loading={loading} className="login-button" content='Login' />
                    </Segment>

                </Form>
            </Segment>
            <Message color="black">
                Not registered yet ? <button className='remove-bg colored-btn' size='small' onClick={() => { setFormType("SignUp")}}>Sign Up</button>
            </Message>
        </Grid.Column>
    )
}

export default LoginForm