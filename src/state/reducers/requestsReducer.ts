import ReduxAction from "./ReduxAction";

const reducer = (state = null, action: ReduxAction) => {
  switch (action.type) {
    case "SET_REQUESTS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
