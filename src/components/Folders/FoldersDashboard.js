import React, {useState} from "react";
import {Icon, Button, Card } from 'semantic-ui-react'
import Folder from "./components/Folder";

const folders = []

export const FoldersDashboard = () => {
    
    const [foldersList, setFoldersList] = useState(folders)
    const listFolders = folders.map((folder) => {
        return (<Folder folder={folder} key={folder.id} />)
    })

    return (
        <>
            <Card.Group centered itemsPerRow={6}>
                {listFolders}
                <Button className={foldersList.length > 0 ? 'remove-bg fixed-btn' : 'remove-bg margin-btn'}onClick={()=>{console.log('test')}}>
                    <Button.Content>
                        <Icon circular size='huge' name='plus' className='add-new-note' />
                    </Button.Content>
                </Button>
            </Card.Group>
        </>
    )
}


export default FoldersDashboard