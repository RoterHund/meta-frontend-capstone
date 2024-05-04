import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../utils/mockAPI";
import Hero from "../Hero/Hero";
import BookingPage from "../Booking/BookingPage";
import ConfirmedBooking from "../Booking/ConfirmedBooking";



const Main = () => {

    const initializeTimes = () => {
        return { availableTimes: fetchAPI(new Date()) };
    };

    const updateTimes = (state, date) => {
        return { availableTimes: fetchAPI(new Date(date)) };
    };

    const [state, dispatch] = useReducer(updateTimes, null, initializeTimes);

    const navigate = useNavigate();
    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

    useEffect(() => {
        dispatch(new Date());
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route
                    path="/booking"
                    element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;