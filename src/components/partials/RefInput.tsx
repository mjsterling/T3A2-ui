import { Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

export default function RefInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { setBookingRef, setBookingRequest } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const bookingRef = useSelector((state: RootState) => state.bookingRef);
  const [inputError, setInputError] = useState(false);
  function handleRefInput(value: string) {
    setBookingRef(value);
    setInputError(false);
    if (value.length >= 6) {
      axios
        .get(
          `https://eildonlakemotel-api.herokuapp.com/requests/${value.toUpperCase()}`
        )
        .then((res) => {
          console.log(res.data);
          setBookingRequest(res.data);
          setInputError(false);
          history.push("/track");
        })
        .catch(() => setInputError(true));
    }
  }
  return (
    <Grid item xs={5}>
      <TextField
        style={{ textAlign: "center" }}
        placeholder={"Track booking"}
        size="small"
        onChange={(e) => handleRefInput(e.target.value)}
        value={bookingRef}
        error={inputError}
        helperText={inputError ? "Booking not found" : null}
      />
    </Grid>
  );
}
