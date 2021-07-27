import { BookingRequest } from "components/Interfaces";
import moment from "moment";
import ReduxAction from "./ReduxAction";

const reducer = (
  state: BookingRequest = {
    checkIn: moment().toDate(),
    checkOut: moment().add(7, "day").toDate(),
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    num_adults: 2,
    num_children: 0,
    num_dogs: 0,
  },
  action: ReduxAction
) => {
  switch (action.type) {
    case "SET_CHECK_IN":
      if (moment(action.payload).isAfter(moment(state.checkOut))) {
        return {
          checkIn: moment(action.payload).toDate(),
          checkOut: moment(action.payload).add(1, "day"),
        };
      } else {
        return { ...state, checkIn: action.payload };
      }
    case "SET_CHECK_OUT":
      if (moment(action.payload).isBefore(moment(state.checkIn))) {
        return {
          checkIn: moment(action.payload).subtract(1, "day").toDate(),
          checkOut: moment(action.payload).toDate(),
        };
      } else {
        return { ...state, checkOut: action.payload };
      }
    case "SET_FIRST_NAME":
      let first_name = action.payload.match(/[a-z]*[A-Z]* */g).join("");
      if (first_name.length)
        first_name =
          first_name[0].toUpperCase() + first_name.substring(1).toLowerCase();
      return {
        ...state,
        first_name: first_name,
      };
    case "SET_LAST_NAME":
      let last_name = action.payload.match(/[a-z]*[A-Z]* */g).join("");
      if (last_name.length)
        last_name =
          last_name[0].toUpperCase() + last_name.substring(1).toLowerCase();
      return {
        ...state,
        last_name: last_name,
      };
    case "SET_EMAIL_ADDRESS":
      let email_address = action.payload
        .match(/\w*@*\.*/g)
        .join("")
        .toLowerCase();
      return {
        ...state,
        email_address: email_address,
      };

    case "SET_PHONE_NUMBER":
      let phone_number = action.payload.match(/\d*\+*/g).join("");

      return {
        ...state,
        phone_number: phone_number,
      };
    case "INC_ADULTS":
      return { ...state, num_adults: state.num_adults + 1 };
    case "DEC_ADULTS":
      return {
        ...state,
        num_adults: state.num_adults === 1 ? 1 : state.num_adults - 1,
      };
    case "INC_CHILDREN":
      return { ...state, num_children: state.num_children + 1 };
    case "DEC_CHILDREN":
      return {
        ...state,
        num_children: state.num_children === 0 ? 0 : state.num_children - 1,
      };
    case "INC_DOGS":
      return { ...state, num_dogs: state.num_dogs + 1 };
    case "DEC_DOGS":
      return {
        ...state,
        num_dogs: state.num_dogs === 0 ? 0 : state.num_dogs - 1,
      };
    case "SET_REFERENCE_NUMBER":
      return { ...state, reference_number: action.payload };
    case "SET_BOOKING_REQUEST":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
