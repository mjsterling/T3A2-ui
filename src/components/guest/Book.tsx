import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import _ from "components/partials";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";
import { Send } from "@material-ui/icons";

export default function Book() {
  const bookingRequest = useSelector(
    (state: RootState) => state.bookingRequest
  );
  const dispatch = useDispatch();
  const { postBookingRequest } = bindActionCreators(actionCreators, dispatch);
  const validateRequest = () => {
    const values = Object.values(bookingRequest);
    return !(values.includes("") || values.includes(null));
  };
  return (
    <>
      <Grid item>
        <_.Booking.DateSelector />
      </Grid>
      <Grid item container xs={8}>
        <_.Booking.PaxSelector />
      </Grid>
      <Grid item>
        <_.Booking.FormFields />
      </Grid>
      <Grid item>
        <_.TermsConditions />
      </Grid>
      <Grid item>
        <Button
          onClick={() => postBookingRequest(bookingRequest)}
          disabled={validateRequest()}
          variant="contained"
          color="primary"
          endIcon={<Send />}
        >
          Book
        </Button>
      </Grid>
    </>
  );
}
