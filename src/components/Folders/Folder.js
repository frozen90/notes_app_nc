import React, { useState } from "react";
import { Header, Card, Icon, Button, Dimmer, Input } from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export const Folder = ({folder}) => {
   
    return (
        <>
            <motion.div className="ui card folder-bg" initial={{scale:0, y: +700, x:+1300 }} animate={{scale:1, y:0, x:0}}
                transition={{ ease: "easeIn", duration: 0.5 }}>
                <Card.Content textAlign='center' className='note-content'>
                    <Button className='remove-bg' fluid><Button.Content><Icon className='folder-icon' name='folder' size='massive'/></Button.Content></Button>
                    <Header as="h1" className='header-card'> {folder.folder_name}</Header>

                </Card.Content>
            </motion.div>
    
        </>
    )
}

Folder.propTypes = {
    folder: PropTypes.object,
}

export default Folder;