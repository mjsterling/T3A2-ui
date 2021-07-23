import { combineReducers } from "redux";
import bookingPaxReducer from "./bookingPaxReducer";
import guestDateReducer from "./guestDateReducer";
import menuReducer from "./menuReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  rooms: roomReducer,
  menuOpen: menuReducer,
  guestDates: guestDateReducer,
  bookingPax: bookingPaxReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
