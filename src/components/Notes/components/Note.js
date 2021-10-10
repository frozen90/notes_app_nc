import React, { useState } from "react";
import { Header, Card, Icon, Button } from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
export const Note = () => {
    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState("Smutny paragraf o zyciu i przemijaniu...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ex consequat, interdum sem ac, ornare enim. Pellentesque sit amet tortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac ortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac Pellentesque sit amet tortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac ortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac Pellentesque sit amet tortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac ortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac")
    const textAreaRef = React.createRef();
    const handleTextChange = (e) =>{
        setValue(e.target.value)
       
    }
    const focusTextArea = () => {
        setEditable(true)
        textAreaRef.current.selectionStart = textAreaRef.current.value.length;
        textAreaRef.current.selectionEnd = textAreaRef.current.value.length;
        textAreaRef.current.focus();
    }
    return (
        <Card className='note-bg'>
            <Card.Content textAlign='center' className='card-header-content'><Header as="h2" className='header-card'>Title</Header></Card.Content>
            <Card.Content textAlign='left' className='note-content'>
                <TextareaAutosize ref={textAreaRef} onDoubleClick={()=>{setEditable(true)}} value={value} onChange={handleTextChange} maxRows={10} className='remove-bg note-textarea' readOnly={!editable}/>
            </Card.Content>
            <Card.Content extra>

                <Button className='remove-bg' floated='right' onClick={focusTextArea}><Button.Content><Icon size='large' inverted name='edit'></Icon></Button.Content></Button>
            </Card.Content>
        </Card>
    )
}

export default Note;