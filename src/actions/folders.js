import { API, graphqlOperation } from 'aws-amplify';
import {createFolder, deleteFolder} from '../graphql/mutations'
import { foldersByDate } from '../graphql/queries';


export async function createNewFolder() {
    try {
        let folder =  await API.graphql(graphqlOperation(createFolder, { input: { title: 'New Folder', type:'Folder' } }))
        return folder
    } catch (err) {
        return err
    }
}

export async function removeFolder(id) {
    try {
        const folderRemoved = await API.graphql(graphqlOperation(deleteFolder, { input: { id: id } }))

    } catch (err) {
        return err
    }
}

export async function fetchFolders() {
    try {
        let folders = await API.graphql(graphqlOperation(foldersByDate,{ type: "Folder", sortDirection: 'DESC' }))
        return folders.data.foldersByDate.items
    } catch (err) {
        console.log(err)
    }
}
