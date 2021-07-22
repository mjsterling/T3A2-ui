import moment from "moment";
import ReduxAction from "./ReduxAction";
const reducer = (
  state = { checkIn: moment(), checkOut: moment().add(7, "day") },
  action: ReduxAction
) => {
  switch (action.type) {
    case "SET_CHECK_IN":
      return { ...state, checkIn: action.payload };
    case "SET_CHECK_OUT":
      if (moment(action.payload).isBefore(moment(state.checkIn))) {
        return {
          checkIn: moment(action.payload).subtract(1, "day"),
          checkOut: action.payload,
        };
      } else {
        return { ...state, checkOut: action.payload };
      }
    default:
      return state;
  }
};

export default reducer;
