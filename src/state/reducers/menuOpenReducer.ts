import { Action } from "redux";

const reducer = (state = false, action: Action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      console.log(`TOGGLE_MENU TO ${state}`);
      return !state;
    default:
      return state;
  }
};

export default reducer;
