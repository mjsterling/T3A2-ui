import { combineReducers } from "redux";
import guestDateReducer from "./guestDateReducer";
import menuReducer from "./menuReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  rooms: roomReducer,
  menuOpen: menuReducer,
  guestDates: guestDateReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
