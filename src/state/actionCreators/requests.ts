import axios from "axios";
import { Dispatch } from "react";

export const getRequests = () => {
  return (dispatch: Dispatch<any>) => {
    axios
      .get("http://localhost:3000/requests", {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res: any) => {
        if (res.status === 200) {
          dispatch({ type: "SET_REQUESTS", payload: res.data });
        }
      });
  };
};
