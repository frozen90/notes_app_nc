import React from "react";
// Ui Components / frameworks
import { Header, Card, Input} from "semantic-ui-react";
import TextareaAutosize from 'react-textarea-autosize';
import { motion, AnimatePresence } from "framer-motion";


export const LockedNote = ({ note }) => {
    

    return (
        <motion.div className="ui card note-bg" initial={{ y: -500 }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
            <Card.Content textAlign='center' className='card-header-content'>
                <Header as="h2" className='header-card'><Input readOnly={true} inverted transparent style={{ width: '165px' }} value={note.title} /></Header>
            </Card.Content>
            <Card.Content textAlign='left' className='note-content'>
    
                    <TextareaAutosize value={note.content} className='remove-bg note-textarea' readOnly={true} />

            </Card.Content>
        </motion.div>

    )
}



export default LockedNote;