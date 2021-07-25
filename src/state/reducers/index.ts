import { combineReducers } from "redux";
import bookingRefReducer from "./bookingRefReducer";
import menuReducer from "./menuReducer";
import bookingRequestReducer from "./bookingRequestReducer";
import roomReducer from "./roomReducer";
import termsConditionsReducer from "./termsConditionsReducer";

const rootReducer = combineReducers({
  bookingRef: bookingRefReducer,
  menuOpen: menuReducer,
  bookingRequest: bookingRequestReducer,
  rooms: roomReducer,
  termsConditions: termsConditionsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
