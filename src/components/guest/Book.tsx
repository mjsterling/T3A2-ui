import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import _ from "components/partials";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";
import { Send, Error } from "@material-ui/icons";

export default function Book() {
  const {
    firstName,
    lastName,
    email,
    phone,
    numAdults,
    numChildren,
    numDogs,
    checkIn,
    checkOut,
    referenceNumber,
  } = useSelector((state: RootState) => state.bookingRequest);
  const termsConditions = useSelector(
    (state: RootState) => state.termsConditions
  );
  const dispatch = useDispatch();
  const {
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
    postBookingRequest,
  } = bindActionCreators(actionCreators, dispatch);

  const SubmitButtonText = () => {
    if (!termsConditions.terms) return "Terms & Conditions Required";
    if (!termsConditions.privacy) return "Privacy Policy Required";
    if (numDogs > 0 && !termsConditions.pets) return "Pets Policy Required";
    return "Submit Booking";
  };

  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <_.BigBackButton />
      </Grid>
      <Grid item>
        <_.DateSelector />
      </Grid>
      <Grid item>
        <_.PaxSelector />
      </Grid>
      <Grid container direction="column" spacing={1} alignItems="center">
        <Grid item>
          <TextField
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phone}
          />
        </Grid>
        <Grid item>
          <_.TermsConditions />
        </Grid>
        <Grid item>
          <Button
            onClick={() =>
              postBookingRequest({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                numAdults: numAdults,
                numChildren: numChildren,
                numDogs: numDogs,
                checkIn: checkIn,
                checkOut: checkOut,
                referenceNumber: referenceNumber || null,
              })
            }
            disabled={SubmitButtonText() !== "Submit Booking"}
            variant="contained"
            color="primary"
            endIcon={
              SubmitButtonText() === "Submit Booking" ? <Send /> : <Error />
            }
          >
            {SubmitButtonText()}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
