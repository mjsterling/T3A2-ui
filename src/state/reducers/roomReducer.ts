import { Action } from "redux";
import ReduxAction from "./ReduxAction";

const reducer = (state = {}, action: ReduxAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
