import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Dispatch } from "redux";

export const setCheckIn = (payload: Date | MaterialUiPickersDate) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_CHECK_IN", payload: payload });
  };
};

export const setCheckOut = (payload: Date | MaterialUiPickersDate) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_CHECK_OUT", payload: payload });
  };
};
