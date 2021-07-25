import moment from "moment";
import ReduxAction from "./ReduxAction";

const reducer = (state: moment.Moment = moment(), action: ReduxAction) => {
  switch (action.type) {
    case "DEC_DATE":
      return moment(state).subtract(1, "day");
    case "INC_DATE":
      return moment(state).add(1, "day");
    case "SET_DATE":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
