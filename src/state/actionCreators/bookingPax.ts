import { Dispatch } from "redux";

export const incAdults = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "INC_ADULTS" });
  };
};

export const decAdults = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "DEC_ADULTS" });
  };
};

export const incChildren = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "INC_CHILDREN" });
  };
};

export const decChildren = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "DEC_CHILDREN" });
  };
};

export const incDogs = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "INC_DOGS" });
  };
};

export const decDogs = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "DEC_DOGS" });
  };
};
