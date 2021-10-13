import {render, screen, cleanup, getByRole} from '@testing-library/react';
import FoldersDashboard from '../FoldersDashboard';


const foldersList = [{id:1, title: 'Test Folder'}]


describe("Folders Rendering", () =>{

    it("Render passed in folders", () => {
        render(<FoldersDashboard foldersList={foldersList}/>);
        const folderTitle = screen.getByRole('textbox', { name: 'folder_title' })
        expect(folderTitle).toBeInTheDocument();
    })
    it("Render remove icon", () => {
        render(<FoldersDashboard foldersList={foldersList}/>);
        const removeBtn = screen.getByTestId('remove-btn')
        expect(removeBtn).toBeInTheDocument();
    })
})