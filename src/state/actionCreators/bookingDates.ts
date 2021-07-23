import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Dispatch } from "redux";

export const setGuestCheckIn = (payload: Date | MaterialUiPickersDate) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_CHECK_IN", payload: payload });
  };
};

export const setGuestCheckOut = (payload: Date | MaterialUiPickersDate) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_CHECK_OUT", payload: payload });
  };
};
