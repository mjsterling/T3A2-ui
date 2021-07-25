import { BookingRequest } from "components/Interfaces";
import moment from "moment";
import ReduxAction from "./ReduxAction";

const reducer = (
  state: BookingRequest = {
    checkIn: moment().toDate(),
    checkOut: moment().add(7, "day").toDate(),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    numAdults: 2,
    numChildren: 0,
    numDogs: 0,
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
      let firstName = action.payload.match(/[a-z]*[A-Z]* */g).join("");
      if (firstName.length)
        firstName =
          firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
      return {
        ...state,
        firstName: firstName,
      };
    case "SET_LAST_NAME":
      let lastName = action.payload.match(/[a-z]*[A-Z]* */g).join("");
      if (lastName.length)
        lastName =
          lastName[0].toUpperCase() + lastName.substring(1).toLowerCase();
      return {
        ...state,
        lastName: lastName,
      };
    case "SET_EMAIL":
      let email = action.payload
        .match(/\w*@*\.*/g)
        .join("")
        .toLowerCase();
      return {
        ...state,
        email: email,
      };

    case "SET_PHONE":
      let phone = action.payload.match(/\d*\+*/g).join("");

      return {
        ...state,
        phone: phone,
      };
    case "INC_ADULTS":
      return { ...state, numAdults: state.numAdults + 1 };
    case "DEC_ADULTS":
      return {
        ...state,
        numAdults: state.numAdults === 1 ? 1 : state.numAdults - 1,
      };
    case "INC_CHILDREN":
      return { ...state, numChildren: state.numChildren + 1 };
    case "DEC_CHILDREN":
      return {
        ...state,
        numChildren: state.numChildren === 0 ? 0 : state.numChildren - 1,
      };
    case "INC_DOGS":
      return { ...state, numDogs: state.numDogs + 1 };
    case "DEC_DOGS":
      return {
        ...state,
        numDogs: state.numDogs === 0 ? 0 : state.numDogs - 1,
      };
    case "SET_REFERENCE_NUMBER":
      return { ...state, referenceNumber: action.payload };
    case "SET_BOOKING_REQUEST":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
