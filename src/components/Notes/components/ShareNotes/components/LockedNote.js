import React from "react";
// Ui Components / frameworks
import { Header, Card, Input } from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
import { motion } from "framer-motion";


export const LockedNote = ({ note }) => {


    return (
        <>
            <motion.div className="ui card note-bg" initial={{ y: +700, x: +1300 }} animate={{ y: 0, x: 0 }} transition={{ ease: "easeOut", duration: 0.5 }} >
                <Card.Content textAlign='center' className='card-header-content'>
                    <Header as="h2" className='header-card'>
                        <Input inverted transparent maxLength="13" style={{ width: '165px' }} value={note.title} readOnly={true} />
                    </Header>
                </Card.Content>
                <Card.Content textAlign='left' className='note-content' >
                    <TextareaAutosize value={note.content} maxRows={15} className='remove-bg note-textarea' readOnly={true} />
                </Card.Content>
            </motion.div>
        </>
    )
}



export default LockedNote;