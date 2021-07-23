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
  setReferenceNumber,
} from "./bookingDetails";
import {
  acceptTermsConditions,
  acceptPrivacyPolicy,
  acceptPetsPolicy,
} from "./termsConditions";

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
  acceptTermsConditions,
  acceptPrivacyPolicy,
  acceptPetsPolicy,
  setReferenceNumber,
};

export default actionCreators;
