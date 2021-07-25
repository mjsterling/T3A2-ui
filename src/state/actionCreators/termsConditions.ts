import { Dispatch } from "redux";

export const acceptTermsConditions = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "ACCEPT_TERMS" });
  };
};

export const acceptPrivacyPolicy = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "ACCEPT_PRIVACY" });
  };
};

export const acceptPetsPolicy = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: "ACCEPT_PETS" });
  };
};
