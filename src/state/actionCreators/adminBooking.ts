import { Dispatch } from "redux";
import { confirmAlert } from "react-confirm-alert";
import "components/react-confirm-alert.css";
import axios from "axios";
import moment from "moment";
export const postBooking = (payload: any, bookingFromReq?: true) => {
  return (dispatch: Dispatch<any>) => {
    console.log(payload);

    if (payload.id && !bookingFromReq) {
      axios
        .patch(`http://localhost:3000/bookings/${payload.id}`, {
          booking: payload,
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
      if (!(payload.dates && payload.dates.length)) payload.dates = [];
      const lengthOfStay = moment(payload.checkOut).diff(
        moment(payload.checkIn),
        "days"
      );
      for (let i = 0; i < lengthOfStay; i++) {
        payload.dates.push(moment(payload.checkIn).add(i, "day").toDate());
      }
      axios
        .post(
          `http://localhost:3000/bookings`,
          { booking: payload },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
          }
        )
        .then((res) => {
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
          if (bookingFromReq) {
            axios.delete(`http:/localhost:3000/requests/${payload.id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
              },
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
