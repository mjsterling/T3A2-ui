import axios from "axios";
import { Dispatch } from "react";
import { Room, Booking} from 'components/Interfaces'

const getRooms = () => {
  return (dispatch: Dispatch<any>) => {
    console.log('make request');
    axios
      .get("http://localhost:3000/rooms", {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res) => {
        dispatch({ type: "SET_ROOMS", payload: res.data})
      })
      .catch((e) => console.log(e.message));
  };
};

export default getRooms;
