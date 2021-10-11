import React from "react";
import { Header, Icon } from "semantic-ui-react";


export const ExpiredLink = () => {

    return(
        <div style={{marginTop:'200px'}}>
        <Icon name='exclamation triangle' color='red' size='massive'></Icon>
        <Header as='h1' inverted>The Link You Followed Has Expired ...</Header>
        </div>
    )
}

export default ExpiredLink