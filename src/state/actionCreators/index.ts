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
import {
  acceptTermsConditions,
  acceptPrivacyPolicy,
  acceptPetsPolicy,
} from "./termsConditions";
import { setBookingRef } from "./bookingRef";
import { setBookingRequest, postBookingRequest } from "./bookingRequest";
import getRooms from "./rooms";
import { decDate, incDate, setDate } from "./roomCalendar";

const actionCreators = {
  decDate,
  incDate,
  setDate,
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
  acceptTermsConditions,
  acceptPrivacyPolicy,
  acceptPetsPolicy,
  setBookingRef,
  setBookingRequest,
  postBookingRequest,
  getRooms,
};

export default actionCreators;
