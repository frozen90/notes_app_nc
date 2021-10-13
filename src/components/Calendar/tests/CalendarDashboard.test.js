import {render, screen, cleanup, getByRole} from '@testing-library/react';
import CalendarDashboard from '../CalendarDashboard';



describe("Calendar Dashboard", () =>{
    it("Renders main component", () => {
        render(<CalendarDashboard />);
        const CalendarDashboardElement = screen.getByTestId('react-calendar-dashboard');
        expect(CalendarDashboardElement).toBeInTheDocument();
    })
})