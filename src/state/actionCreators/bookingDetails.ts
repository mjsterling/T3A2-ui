import { Dispatch } from "redux";

export const setFirstName = (payload: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_FIRST_NAME", payload: payload });
  };
};
export const setLastName = (payload: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_LAST_NAME", payload: payload });
  };
};
export const setEmail = (payload: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_EMAIL", payload: payload });
  };
};
export const setPhoneNumber = (payload: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_PHONE", payload: payload });
  };
};
export const setReferenceNumber = (payload: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "SET_REFERENCE_NUMBER", payload: payload });
  };
};
