import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../components/Booking/BookingForm';


test('Renders the BookingForm heading', () => {
    const availableTimes = { availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function returns the correct value', () => {
    const result = initializeTimes();
    expect(result).toEqual({ availableTimes: expect.any(Array) });
});