import { openMenu, closeMenu } from "./menuOpen";
import { setGuestCheckIn, setGuestCheckOut } from "./bookingDates";
import {
  incAdults,
  decAdults,
  incChildren,
  decChildren,
  incDogs,
  decDogs,
} from "./bookingPax";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
} from "./bookingDetails";

const actionCreators = {
  openMenu,
  closeMenu,
  setGuestCheckIn,
  setGuestCheckOut,
  incAdults,
  decAdults,
  incChildren,
  decChildren,
  incDogs,
  decDogs,
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
};

export default actionCreators;
