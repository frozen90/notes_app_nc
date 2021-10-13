import { render, screen, cleanup, getByRole } from '@testing-library/react';
import Dashboard from './Dashboard'

const notesList = []
const foldersList = []
describe("Main Dashboard", () => {
    it("Renders main component", () => {
        render(<Dashboard notesList={notesList} foldersList={foldersList} />);
        const DashboardElement = screen.getByTestId('main-dashboard');
        expect(DashboardElement).toBeInTheDocument();
    })
    it("Renders menu buttons", () => {
        render(<Dashboard notesList={notesList} foldersList={foldersList} />);
        const notesBtn = screen.getByRole('button', {
            name: /Notes/i
        })
        const foldersBtn = screen.getByRole('button', {
            name: /Folders/i
        })
        const calendarBtn = screen.getByRole('button', {
            name: /Calendar/i
        })
        expect(notesBtn).toBeInTheDocument();
        expect(foldersBtn).toBeInTheDocument();
        expect(calendarBtn).toBeInTheDocument();
        
    })
})