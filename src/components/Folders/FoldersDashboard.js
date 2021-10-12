import React, {useState} from "react";
import {Icon, Button, Card } from 'semantic-ui-react'
import Folder from "./components/Folder";
import { API, graphqlOperation } from 'aws-amplify';
import { createFolder, deleteFolder } from "../../graphql/mutations";

export const FoldersDashboard = ({foldersList}) => {
    const [btnLoading, setBtnLoading] = useState(false)
    const [folders, setFolders] = useState(foldersList)
    const listFolders = folders.map((folder) => {
        return (<Folder removeFolder={removeFolder} folder={folder} key={folder.id} />)
    })

    async function createNewFolder() {
        try {
            setBtnLoading(true)
            const foldersData = await API.graphql(graphqlOperation(createFolder, { input: { title: 'New Folder' } }))
            let folder = foldersData.data.createFolder
            setFolders([folder,...folders])
            setBtnLoading(false)
        } catch (err) {
            setBtnLoading(false)
            console.log('error')
        }
    }

    async function removeFolder(id) {
        try {
            const folderRemoved = await API.graphql(graphqlOperation(deleteFolder, { input: { id: id } }))
            console.log(folderRemoved)
            let removeIndex = folders.findIndex(item => item.id === id);
            folders.splice(removeIndex, 1)
            console.log(...folders)
            setFolders([...folders])

        } catch (err) {
            console.log(err)
            console.log('error')
        }
    }

    return (
        <>
            <Card.Group centered itemsPerRow={6}>
                {listFolders}
                <Button loading={btnLoading} className={folders.length > 0 ? 'remove-bg fixed-btn' : 'remove-bg margin-btn'}onClick={()=>{createNewFolder() }}>
                    <Button.Content>
                        <Icon circular size='huge' name='plus' className='add-new-note' />
                    </Button.Content>
                </Button>
            </Card.Group>
        </>
    )
}


export default FoldersDashboard