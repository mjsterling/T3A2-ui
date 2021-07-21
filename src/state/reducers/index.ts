import { combineReducers } from "redux";
import menuOpenReducer from "./menuOpenReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  rooms: roomReducer,
  menuOpen: menuOpenReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
