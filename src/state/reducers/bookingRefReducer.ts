import ReduxAction from "./ReduxAction";

const reducer = (state = "", action: ReduxAction) => {
  switch (action.type) {
    case "SET_BOOKING_REF":
      return action.payload.substring(0, 6).toUpperCase();
    default:
      return state;
  }
};

export default reducer;
