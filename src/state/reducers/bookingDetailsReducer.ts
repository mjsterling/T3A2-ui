import ReduxAction from "./ReduxAction";
const reducer = (
  state: Booking = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  action: ReduxAction
) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      let firstName = action.payload.match(/[a-z]*[A-Z]*/g).join("");
      if (firstName.length)
        firstName =
          firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
      return {
        ...state,
        firstName: firstName,
      };
    case "SET_LAST_NAME":
      let lastName = action.payload.match(/[a-z]*[A-Z]*/g).join("");
      if (lastName.length)
        lastName =
          lastName[0].toUpperCase() + lastName.substring(1).toLowerCase();
      return {
        ...state,
        lastName: lastName,
      };
    case "SET_EMAIL":
      let email = action.payload
        .match(/\w*@*\.*/g)
        .join("")
        .toLowercase();
      return {
        ...state,
        email: email,
      };

    case "SET_PHONE":
      let phone = action.payload.match(/\d*\+*/g).join("");

      return {
        ...state,
        phone: phone,
      };
    default:
      console.log("default");
      return state;
  }
};

interface Booking {
  [key: string]: string;
}

export default reducer;
