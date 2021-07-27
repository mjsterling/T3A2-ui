import { Action } from "redux";

const termsConditionsReducer = (
  state: TCs = { terms: false, privacy: false, pets: false },
  action: Action
) => {
  const [type, key] = action.type.toLowerCase().split("_");
  if (type === "accept") {
    return { ...state, [key]: !state[key] };
  } else {
    return state;
  }
};

export interface TCs {
  [key: string]: boolean;
}

export default termsConditionsReducer;
