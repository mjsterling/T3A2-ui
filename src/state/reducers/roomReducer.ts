import ReduxAction from "./ReduxAction";

const reducer = (state = [], action: ReduxAction) => {
  switch (action.type) {
    case "SET_ROOMS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
