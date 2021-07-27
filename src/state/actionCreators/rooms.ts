import axios from "axios";
import { Dispatch } from "react";

const getRooms = () => {
  return (dispatch: Dispatch<any>) => {
    console.log("make request");
    axios
      .get("https://eildonlakemotel-api.herokuapp.com/rooms", {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res) => {
        dispatch({ type: "SET_ROOMS", payload: res.data });
      })
      .catch((e) => console.log(e.message));
  };
};

export default getRooms;
