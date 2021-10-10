import React from "react";
import { Header, Card, Icon, Button } from "semantic-ui-react";
export const Note = () => {


    return (
        <Card className='note-bg'>
            <Card.Content textAlign='center'><Header as="h2" className='header-card'>Title</Header></Card.Content>
            <Card.Content textAlign='left' className='note-content'>
                <p>
                    Smutny paragraf o zyciu i przemijaniu...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ex consequat, interdum sem ac, ornare enim. Pellentesque sit amet tortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac ortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac
                </p>
            </Card.Content>
            <Card.Content extra>

                <Button className='remove-bg' floated='right'><Button.Content><Icon size='large' inverted name='edit'></Icon></Button.Content></Button>
            </Card.Content>
        </Card>
    )
}

export default Note;