import { Action } from "redux";

const reducer = (state = false, action: Action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return true;
    case "CLOSE_MENU":
      return false;
    case "TOGGLE_MENU":
      return !state;
    default:
      return state;
  }
};

export default reducer;
