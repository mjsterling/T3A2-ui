import { BookingRequest } from "components/Interfaces";
import ReduxAction from "./ReduxAction";

const reducer = (state: BookingRequest | null = null, action: ReduxAction) => {
  switch (action.type) {
    case "SET_BOOKING_REQUEST":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
