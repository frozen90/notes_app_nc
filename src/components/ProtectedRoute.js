import React, { Component } from "react";
import { Route } from "react-router";


export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => { return <Component {...props} /> }}/>
    )
}

export default ProtectedRoute;