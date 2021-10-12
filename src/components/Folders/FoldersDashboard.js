import React, {useState} from "react";
import {Icon, Button, Card } from 'semantic-ui-react'
import Folder from "./components/Folder";

const folders = [{ folder_name: 'New Folder 1', id: 1 }, { folder_name: 'New Folder 2 ', id: 2 }, { folder_name: 'New Folder 3 sadsadasdadasdsadasad', id: 3 }, { folder_name: 'New Folder 4', id: 4 }, { folder_name: 'New Folder 5', id: 5 }, { folder_name: 'New Folder 6', id: 6 }]

export const FoldersDashboard = () => {
    
    const [foldersList, setFoldersList] = useState(folders)
    const listFolders = folders.map((folder) => {
        return (<Folder folder={folder} key={folder.id} />)
    })

    return (
        <>
            <Card.Group centered itemsPerRow={6}>
                {listFolders}
                <Button className={'remove-bg fixed-btn'}>
                    <Button.Content>
                        <Icon circular size='huge' name='plus' className='add-new-note' />
                    </Button.Content>
                </Button>
            </Card.Group>
        </>
    )
}


export default FoldersDashboard