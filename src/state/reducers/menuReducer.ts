import ReduxAction from "./ReduxAction";

const reducer = (state = false, action: ReduxAction) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return !state;
    default:
      return state;
  }
};

export default reducer;
