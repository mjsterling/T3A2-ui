import { Dispatch } from "redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import moment from "moment";
export const postBooking = (payload: any) => {
  return (dispatch: Dispatch<any>) => {
    console.log(payload);
    const bookingRequest = {
      room_number: payload.roomNumber,
      first_name: payload.firstName,
      last_name: payload.lastName,
      email_address: payload.email,
      phone_number: payload.phone,
      num_adults: payload.num_adults,
      num_children: payload.num_children,
      num_dogs: payload.num_dogs,
      dates: payload.dates,
    };

    if (payload.id) {
      axios
        .patch(`http://localhost:3000/bookings/${payload.id}`, {
          booking: bookingRequest,
        })
        .then((res) => {
          if (res.status === 204) {
            confirmAlert({
              title: "Success",
              message: "Booking updated successfully",
              buttons: [
                {
                  label: "OK",
                  onClick: () => null,
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
        .post(
          `http://localhost:3000/bookings`,
          { booking: bookingRequest },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            confirmAlert({
              title: "Success",
              message: `Booking created successfully`,
              buttons: [
                {
                  label: "OK",
                  onClick: () =>
                    (window.location.href = "http://localhost:3001/room/1"),
                },
              ],
            });
          }
        })
        .catch(() => {
          confirmAlert({
            title: "Booking Error",
            message:
              "Booking could not be saved. Please check the details and try again",
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
