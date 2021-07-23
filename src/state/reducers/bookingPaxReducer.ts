import ReduxAction from "./ReduxAction";
const reducer = (
  state: Pax = { adults: 2, children: 0, dogs: 0 },
  action: ReduxAction
) => {
  const [actionType, key] = action.type.toLowerCase().split("_");
  switch (actionType) {
    case "inc":
      return { ...state, [key]: state[key] + 1 };
    case "dec":
      return { ...state, [key]: state[key] === 0 ? 0 : state[key] - 1 };
    default:
      return state;
  }
};

interface Pax {
  [key: string]: number;
}

export default reducer;
