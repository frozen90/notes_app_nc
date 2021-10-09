import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify"
import { Form, Grid, Header, Segment, Message, Button, Container } from "semantic-ui-react"
import { Helmet } from "react-helmet";

export const Login = (props) => {
    const [formType, setFormType] = useState('Login')
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [authCode, setAuthCode] = useState("")
    const [errors, setErrors] = useState({ formType: { message: '' } })
    const [showErrors, setShowErrors] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLoginSubmit = async function (event) {
        event.preventDefault();
        setLoading(true)
        try {
            await Auth.signIn(username, password)
            setLoggedIn(true)

            
        } catch (err) {
            setShowErrors(true)
            setErrors({ formType: { message: err.message } })
        }
        setLoading(false)
    }
    const handleSignUpSubmit = async function (event) {
        event.preventDefault();
        setLoading(true)
        try {
            await Auth.signUp({ username, password, attributes: { email } })
            setFormType('confirmSignUp')
            setShowErrors(false);
        } catch (err) {
            setShowErrors(true);
            setErrors({ formType: { message: err.message } })

        }
        setLoading(false)
    }

    const handleSignupConfim = async function (event) {
        event.preventDefault();
        setLoading(true)
        try {
            await Auth.confirmSignUp(username, authCode)
            setFormType("Login")

        } catch (err) {
            setShowErrors(true);
            setErrors({ formType: { message: err.message } })
        }
        setLoading(false)
    }

    useEffect(()=>{
        if(loggedIn === true){
            props.history.push('/')
        }
       
    },[loggedIn])

    return (
        <Container>
            <Grid centered style={{ height: "100vh" }} verticalAlign="middle">
                {formType === 'Login' && (<Grid.Column computer={6} mobile={16} tablet={10}>
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
                            {showErrors ?
                                <Message negative>
                                    <p>{errors.formType.message}</p>
                                </Message>
                                : null
                            }

                            <Segment inverted textAlign="center">
                                <Button loading={loading} className="login-button" content='Login' />
                            </Segment>

                        </Form>
                    </Segment>
                    <Message color="black">
                        Not registered yet? <a href="#" onClick={() => { setFormType("SignUp"); setShowErrors(false); }}>Sign Up</a>
                    </Message>
                </Grid.Column>)}
                {formType === 'SignUp' && (<Grid.Column computer={6} mobile={16} tablet={10}>
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
                                onChange={(e, { value }) => { setUsername(value) }}
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
                            {showErrors ?
                                <Message negative>
                                    <p>{errors.formType.message}</p>
                                </Message>
                                : null
                            }
                            <Segment basic textAlign={"center"}>
                                <Button loading={loading} className="login-button" content='Signup' />
                            </Segment>


                        </Form>
                    </Segment>
                    <Message color="black">
                        Already registered ? <a href="#" onClick={() => { setFormType("Login"); setShowErrors(false) }}>Go back to login</a>
                    </Message>
                </Grid.Column>)
                }
                {formType === 'confirmSignUp' && (<Grid.Column computer={6} mobile={16} tablet={10}>
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
                            {showErrors ?
                                <Message negative>
                                    <p>{errors.formType.message}</p>
                                </Message>
                                : null
                            }
                            <Segment basic textAlign={"center"}>
                                <Button loading={loading} className="login-button" content='Confirm Sign Up' />
                            </Segment>


                        </Form>
                    </Segment>

                </Grid.Column>)
                }
            </Grid>
        </Container>
    )
}

export default Login;