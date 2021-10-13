import {render, screen} from '@testing-library/react';
import { NotesDashboard } from '../NotesDashboard';

const unlockedNotes = [{id:1, title:'Test Note', content:'Test Content', locked:false, password:''}]
const lockedNotes = [{id:1, title:'Test Note', content:'Test Content', locked:true, password:'123'}]

describe("NoteCard", () =>{

    it("Renders note card", () => {
        render(<NotesDashboard notesList={unlockedNotes}/>);
        const noteContent = screen.getByText('Test Content');
        expect(noteContent).toBeInTheDocument();
    })
    it("Renders preview when note is locked instead of conent", ()=>{
        render(<NotesDashboard notesList={lockedNotes}/>);
        const noteContent = screen.queryByText('Test Content');
        expect(noteContent).toBeNull()
    })
    it("Check if all actions btn are present", async ()=>{
        render(<NotesDashboard notesList={unlockedNotes}></NotesDashboard>);
        const shareBtn = screen.getByRole('button', {
            name: /share/i
          })
        const lockBtn = screen.getByRole('button', {
            name: /lock-btn/i
          })
        const deleteBtn = screen.getByRole('button', {
            name: /delete-btn/i
          })

        expect(shareBtn).toBeInTheDocument()
        expect(lockBtn).toBeInTheDocument()
        expect(deleteBtn).toBeInTheDocument()
        
    })
})