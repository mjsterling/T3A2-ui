export default (state = {}, action) => {
  switch (action.type) {
    case "FETCHED_ROOMS":
      return state + action.payload;
    default:
      return state;
  }
};
