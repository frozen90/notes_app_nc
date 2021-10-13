import React, { useState } from "react";
import { Header, Card, Icon, Button, Label, Input } from "semantic-ui-react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { API, graphqlOperation } from 'aws-amplify';
import { deleteFolder, updateFolder } from "../../../graphql/mutations";

export const Folder = ({ folder, removeFolder, setFolderOpen, setFolderId, setFolderName }) => {

    const [title, setTitle] = useState(folder.title)
    const [folderPosition, setFolderPosition] = useState(0)
    const [blockModifications, setBlockModifications] = useState(false)
    async function modifyFolder(updateAction) {
        try {
            setBlockModifications(true)
            await API.graphql(graphqlOperation(updateFolder, updateAction))
            setBlockModifications(false)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <motion.div className="ui card folder-bg" initial={{ scale: 0, y: +700, x: +1300 }} animate={{ scale: 1, y: 0, x: folderPosition }}
                transition={{ ease: "easeIn", duration: 0.5 }}>
                <Card.Content textAlign='center' className='note-content'>
                    <Button onDoubleClick={() => { setFolderOpen(true); setFolderId(folder.id); setFolderName(title) }} className='remove-bg' fluid><Button.Content><Icon className='folder-icon' name='folder' size='massive' /></Button.Content></Button>
                    <Header as="h3" className='header-card'>
                        <Input readOnly={blockModifications} onBlur={() => { modifyFolder({ input: { id: folder.id, title: title } }) }} inverted transparent maxLength="20" onChange={(e, { value }) => { setTitle(value) }} value={title} />
                    </Header>
                </Card.Content>
                <Label attached='bottom right' className='remove-bg'>
                    <Icon name='trash' size='big' color='red' floated='right' onClick={() => { removeFolder(folder.id); setFolderPosition(-1000) }}></Icon>
                </Label>

            </motion.div>

        </>
    )
}

Folder.propTypes = {
    folder: PropTypes.object,
}

export default Folder;