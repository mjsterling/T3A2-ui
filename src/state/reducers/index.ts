import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  rooms: roomReducer,
  menuOpen: menuReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
