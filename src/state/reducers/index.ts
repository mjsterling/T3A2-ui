import { combineReducers } from "redux";
import bookingDetailsReducer from "./bookingDetailsReducer";
import bookingPaxReducer from "./bookingPaxReducer";
import bookingRefReducer from "./bookingRefReducer";
import bookingDatesReducer from "./guestDateReducer";
import menuReducer from "./menuReducer";
import bookingRequestReducer from "./bookingRequestReducer";
import roomReducer from "./roomReducer";
import termsConditionsReducer from "./termsConditionsReducer";

const rootReducer = combineReducers({
  bookingDetails: bookingDetailsReducer,
  bookingPax: bookingPaxReducer,
  bookingRef: bookingRefReducer,
  bookingDates: bookingDatesReducer,
  menuOpen: menuReducer,
  bookingRequest: bookingRequestReducer,
  rooms: roomReducer,
  termsConditions: termsConditionsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
