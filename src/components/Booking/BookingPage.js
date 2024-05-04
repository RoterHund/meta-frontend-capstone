import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    console.log(props)
    //console.log(props.availableTimes)
    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}
export default BookingPage;