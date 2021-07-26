import { openMenu, closeMenu } from "./menuOpen";
import { setCheckIn, setCheckOut } from "./bookingDates";
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
import { postBooking } from "./adminBooking";
import { getBookings } from "./bookings";
import { getRequests } from "./requests";

const actionCreators = {
  decDate,
  incDate,
  setDate,
  openMenu,
  closeMenu,
  setCheckIn,
  setCheckOut,
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
  postBooking,
  getBookings,
  getRequests,
};

export default actionCreators;
