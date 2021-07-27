import axios from "axios";
import { Dispatch } from "react";

export const getBookings = () => {
  return (dispatch: Dispatch<any>) => {
    axios
      .get("https://eildonlakemotel-api.herokuapp.com/bookings", {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res: any) => {
        if (res.status === 200) {
          dispatch({ type: "SET_BOOKINGS", payload: res.data });
        }
      });
  };
};
