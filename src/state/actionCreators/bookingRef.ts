import { Dispatch } from "redux";

export const setBookingRef = (payload: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_BOOKING_REF", payload: payload });
  };
};
