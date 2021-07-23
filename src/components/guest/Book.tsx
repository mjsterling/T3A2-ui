import React from "react";
import { Grid, TextField } from "@material-ui/core";
import _ from "components/partials";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

export default function Book() {
  const bookingDetails: Booking = useSelector(
    (state: RootState) => state.bookingDetails
  );
  const dispatch = useDispatch();
  const { setFirstName, setLastName, setEmail, setPhoneNumber } =
    bindActionCreators(actionCreators, dispatch);

  return (
    <Grid container direction="column" spacing={2} alignItems="center">
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
            value={bookingDetails.firstName}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={bookingDetails.lastName}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={bookingDetails.email}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={bookingDetails.phone}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

interface Booking {
  [key: string]: string;
}
