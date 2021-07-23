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
};

export default actionCreators;
