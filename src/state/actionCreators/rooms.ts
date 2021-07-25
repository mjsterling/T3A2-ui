import axios from "axios";
import { Dispatch } from "react";

const getRooms = () => {
  return (dispatch: Dispatch<any>) => {
    axios
      .get("http://localhost:3000/rooms", {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res) => dispatch({ type: "SET_ROOMS", payload: res.data }))
      .catch((e) => console.log(e.message));
  };
};

export default getRooms;
