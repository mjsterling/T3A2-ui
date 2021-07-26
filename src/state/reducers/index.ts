import { combineReducers } from "redux";
import bookingRefReducer from "./bookingRefReducer";
import bookingsReducer from "./bookingsReducer";
import menuReducer from "./menuReducer";
import bookingRequestReducer from "./bookingRequestReducer";
import roomReducer from "./roomReducer";
import termsConditionsReducer from "./termsConditionsReducer";
import roomCalendarReducer from "./roomCalendarReducer";
import requestsReducer from "./requestsReducer";

const rootReducer = combineReducers({
  bookingRef: bookingRefReducer,
  bookingRequest: bookingRequestReducer,
  bookings: bookingsReducer,
  menuOpen: menuReducer,
  requests: requestsReducer,
  rooms: roomReducer,
  termsConditions: termsConditionsReducer,
  roomCalendar: roomCalendarReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
