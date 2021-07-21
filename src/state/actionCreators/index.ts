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

export const toggleMenu = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "TOGGLE_MENU" });
  };
};
