import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Dispatch } from "redux";

export const openMenu = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "OPEN_MENU" });
  };
};

export const closeMenu = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "CLOSE_MENU" });
  };
};

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
