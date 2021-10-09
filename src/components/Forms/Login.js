import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify"
import { Form, Grid, Header, Segment, Message, Button, Container } from "semantic-ui-react"
import { Helmet } from "react-helmet";

export const Login = () => {
    const [formType, setFormType] = useState('Login')
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleLoginSubmit = async function (event) {
        event.preventDefault();
        try {
            let response = await Auth.signIn(username, password)
            console.log('auth response', response)
        } catch (err) {
            console.log(err)
        }
    }
    const handleSignUpSubmit = async function (event) {
        event.preventDefault();
        console.log("Test")
    }


    return (
        <Container stackable>
            <Grid centered style={{ height: "100vh" }} verticalAlign="middle">
                {formType === 'Login' ?

                    <Grid.Column computer={6} mobile={10} tablet={10} >
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
                                    label="Username"
                                    placeholder='Username'
                                    name='username'
                                    icon="user"
                                    iconPosition="left"
                                    value={username}
                                    onChange={(e, { value }) => { setUsername(value) }}
                                />
                                <Form.Input
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
                                <Segment inverted textAlign="center">
                                    <Button className="login-button" content='Login' />
                                </Segment>

                            </Form>
                        </Segment>
                        <Message>
                            Not registered yet? <a href="#" onClick={() => { setFormType("SignUp") }}>Sign Up</a>
                        </Message>
                    </Grid.Column>
                    : <Grid.Column>
                        <Header inverted as="h2" textAlign="center">
                            Create New Account
                        </Header>
                        <Segment inverted>
                            <Form inverted size="large" onSubmit={handleSignUpSubmit}>

                                <Form.Input
                                    label="Username"
                                    placeholder='Username'
                                    name='username'
                                    icon="user"
                                    iconPosition="left"
                                    value={username}
                                    onChange={(e, { value }) => { setUsername(value) }}
                                />
                                <Form.Input
                                    label="Email"
                                    placeholder='Email'
                                    name='email'
                                    icon="mail"
                                    iconPosition="left"
                                    value={email}
                                    onChange={(e, { value }) => { setEmail(value) }}
                                />
                                <Form.Input
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
                                <Segment basic textAlign={"center"}>
                                    <Button className="login-button" content='Signup' />
                                </Segment>


                            </Form>
                        </Segment>
                        <Message>
                            Already registered ? <a href="#" onClick={() => { setFormType("Login") }}>Go back to login</a>
                        </Message>
                    </Grid.Column>}

            </Grid>
        </Container>
    )
}

export default Login;