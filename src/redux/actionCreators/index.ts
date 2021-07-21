export const openMenu = () => {
  return (dispatch) => {
    dispatch({ type: "OPEN_MENU" });
  };
};

export const closeMenu = () => {
  return (dispatch) => {
    dispatch({ type: "CLOSE_MENU" });
  };
};

export const toggleMenu = () => {
  return (dispatch) => {
    dispatch({ type: "TOGGLE_MENU" });
  };
};
