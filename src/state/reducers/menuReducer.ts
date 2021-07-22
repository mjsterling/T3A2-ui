import { Action } from "redux";
import ReduxAction from "./ReduxAction";

const reducer = (state = false, action: ReduxAction) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      console.log(`TOGGLE_MENU TO ${state}`);
      return !state;
    default:
      return state;
  }
};

export default reducer;
