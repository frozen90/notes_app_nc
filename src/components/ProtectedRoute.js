import React, { useState, useEffect } from "react";
import { Route, Redirect } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { Auth } from 'aws-amplify'



export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        checkForAuthenticatedUser()
    }, [])
    async function checkForAuthenticatedUser() {
        try {
            await Auth.currentAuthenticatedUser()
            setIsAuthenticated(true)
            setLoading(false)
        } catch {
            setIsAuthenticated(false)
            setLoading(false)
        }
    }
    return (
        <>
            {!loading ? <Route {...rest} render={(props) => {
                if (isAuthenticated === true) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={{ pathname: "/login", state: { location: props.location } }} />
                }

            }} /> : <Loader className='loader' active size='large'>Please Wait Loading...</Loader>}

        </>
    )
}

export default ProtectedRoute;