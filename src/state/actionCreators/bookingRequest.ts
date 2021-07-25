import axios from "axios";
import { BookingRequest } from "components/Interfaces";
import { Dispatch } from "redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import moment from "moment";

export const setBookingRequest = (payload: BookingRequest) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_BOOKING_REQUEST", payload: payload });
  };
};

export const postBookingRequest = (payload: BookingRequest) => {
  return (dispatch: Dispatch<any>) => {
    console.log(payload);
    const bookingRequest = {
      first_name: payload.firstName,
      last_name: payload.lastName,
      email_address: payload.email,
      phone_number: payload.phone,
      num_adults: payload.numAdults,
      num_children: payload.numChildren,
      num_dogs: payload.numDogs,
      dates: payload.dates,
    };

    if (payload.referenceNumber) {
      axios
        .patch(`http://localhost:3001/requests/${payload.referenceNumber}`, {
          request: bookingRequest,
        })
        .then((res) => {
          if (res.status === 204) {
            confirmAlert({
              title: "Booking updated successfully",
              message: "Thank you!",
              buttons: [
                {
                  label: "OK",
                  onClick: () =>
                    (window.location.href = "http://localhost:3000/track"),
                },
              ],
            });
          }
        });
    } else {
      bookingRequest.dates = [];
      const lengthOfStay = moment(payload.checkOut).diff(
        moment(payload.checkIn),
        "days"
      );
      for (let i = 0; i < lengthOfStay; i++) {
        bookingRequest.dates.push(
          moment(payload.checkIn).add(i, "day").toDate()
        );
      }
      axios
        .post(`http://localhost:3001/requests`, { request: bookingRequest })
        .then((res) => {
          if (res.status === 201 && res.data.reference_number) {
            dispatch({
              type: "SET_BOOKING_REF",
              payload: res.data.reference_number,
            });
            confirmAlert({
              title: "Booking Success",
              message: `Thank you! Please record your reference number: ${res.data.reference_number}. You can track your booking from the main page.`,
              buttons: [
                {
                  label: "OK",
                  onClick: () =>
                    (window.location.href = "http://localhost:3000/"),
                },
              ],
            });
          }
        })
        .catch(() => {
          confirmAlert({
            title: "Booking Error",
            message:
              "Your booking could not be saved. Please check your details and try again, or email info@eildonlakemotel.com.au",
            buttons: [
              {
                label: "OK",
                onClick: () => null,
              },
            ],
          });
        });
    }
  };
};
