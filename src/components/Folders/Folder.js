import React, { useState } from "react";
import { Header, Card, Icon, Button, Dimmer, Input } from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
import { motion } from "framer-motion";
export const Folder = () => {
   
    return (
        <>
            <motion.div className="ui card note-bg" initial={{scale:0, y: +700, x:+1300 }} animate={{scale:1, y:0, x:0}}
                transition={{ ease: "easeIn", duration: 0.5 }}>
                <Card.Content textAlign='center' className='note-content'>
                    <Button className='remove-bg' fluid><Button.Content><Icon className='folder-icon' name='folder' size='massive'/></Button.Content></Button>
                    <Header as="h1" className='header-card'> Folder Name</Header>

                </Card.Content>
            </motion.div>
    
        </>
    )
}

export default Folder;