import moment from "moment";
import { Dispatch } from "redux";

export const decDate = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "DEC_DATE" });
  };
};

export const incDate = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "INC_DATE" });
  };
};

export const setDate = (payload: moment.Moment) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_DATE", payload: payload });
  };
};
