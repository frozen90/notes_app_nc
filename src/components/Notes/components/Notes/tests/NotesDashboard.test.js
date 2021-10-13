import {render, screen, cleanup, getByRole} from '@testing-library/react';
import NotesDashboard from '../NotesDashboard';

describe("NotesDashboard", () =>{

    it("Renders main component", () => {
        render(<NotesDashboard notesList={[]}/>);
        const NotesDashboardElement = screen.getByTestId('notes-dashboard');
        expect(NotesDashboardElement).toBeInTheDocument();
    })
    it("Rendered space for notes",()=>{
        render(<NotesDashboard notesList={[]}/>);
        const NotesDashboardElement = screen.getByTestId('notes-dashboard');
        expect(NotesDashboardElement.firstChild.classList.contains('ui')).toBe(true);
    })
})