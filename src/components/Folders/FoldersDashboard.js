import React, { useEffect, useState } from "react";
import { Icon, Button, Card } from 'semantic-ui-react'
import Folder from "./components/Folder";
import {createNewFolder, removeFolder} from "../../actions/folders"
import * as subscriptions from '../../graphql/subscriptions'
import FolderContent from "./components/FolderContent";
import {API, graphqlOperation} from "@aws-amplify/api";
import Auth from "@aws-amplify/auth";

export const FoldersDashboard = ({ foldersList }) => {
    const [folderOpen, setFolderOpen] = useState(false)
    const [folderId, setFolderId] = useState('')
    const [folderName, setFolderName] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const [folders, setFolders] = useState(foldersList)
    const listFolders = folders.map((folder) => {
        return (<Folder setFolderName={setFolderName} setFolderId={setFolderId} setFolderOpen={setFolderOpen} removeFolder={removeFolder} folder={folder} key={folder.id} />)
    })

    async function handleCreateNewFolder(){
        setBtnLoading(true)
        await createNewFolder()
        setBtnLoading(false)
    }

    useEffect(()=>{
        setFolders(foldersList)
    },[foldersList])
    return (
        <>
            {!folderOpen ?
                <Card.Group centered itemsPerRow={6}>
                    {listFolders}
                    <Button loading={btnLoading} className={folders.length > 0 ? 'remove-bg fixed-btn' : 'remove-bg margin-btn'} onClick={() => { handleCreateNewFolder() }}>
                        <Button.Content>
                            <Icon circular size='huge' name='plus' className='add-new-note' />
                        </Button.Content>
                    </Button>
                </Card.Group>
                :
                <FolderContent folderId={folderId} setFolderOpen={setFolderOpen} folderName={folderName}/>
            }
        </>
    )
}


export default FoldersDashboard