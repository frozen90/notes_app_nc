import React from "react";
import { Header } from "semantic-ui-react";
export const Note = () => {


    return (
        <div key={0} className='note-bg'>
            <Header textAlign='center' inverted as='h1'>Title</Header>
            <p style={{color:'white'}}>Smutny paragraf o zyciu i przemijaniu...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ex consequat, interdum sem ac, ornare enim. Pellentesque sit amet tortor turpis. Cras congue tristique ligula eleifend rutrum. Nam sit amet dui in leo hendrerit euismod eu eget dui. Vestibulum ac</p>
        <div className='note-footer'>
            17 December | Daily Note
        </div>
        </div>
    )
}

export default Note;