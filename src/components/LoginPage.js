import React, { useEffect, useState } from "react";
// Ui Components
import {Grid, Container } from "semantic-ui-react"
// Forms
import LoginForm from "./Forms/LoginForm";
import SignUpForm from "./Forms/SignUpForm";
import ConfirmSignupForm from "./Forms/ConfimSignupForm";

export const LoginPage = (props) => {
    const [formType, setFormType] = useState('Login')
    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
   
    
    

    useEffect(() => {
        if (loggedIn === true) {
            props.history.push('/notes')
        }

    }, [loggedIn])

    return (
        <Container>
            <Grid centered style={{ height: "100vh" }} verticalAlign="middle">
                {formType === 'Login' && (<LoginForm setFormType={setFormType} setLoggedIn={setLoggedIn}/>)}
                {formType === 'SignUp' && (<SignUpForm setFormType={setFormType} username={username} setUsername={setUsername}/>)}
                {formType === 'confirmSignUp' && (<ConfirmSignupForm setFormType={setFormType} username={username}/>)}
            </Grid>
        </Container>
    )
}

export default LoginPage;