import {render, screen, cleanup, getByRole} from '@testing-library/react';
import FoldersDashboard from '../FoldersDashboard';


describe("FoldersDashboard", () =>{

    it("Renders main component", () => {
        render(<FoldersDashboard foldersList={[]}/>);
        const FoldersDashboardElement = screen.getByTestId('folders-dashboard');
        expect(FoldersDashboardElement).toBeInTheDocument();
    })
    it("Rendered space for notes",()=>{
        render(<FoldersDashboard foldersList={[]}/>);
        const FoldersDashboardElement = screen.getByTestId('folders-dashboard');
        expect(FoldersDashboardElement.firstChild.classList.contains('ui')).toBe(true);
    })
})