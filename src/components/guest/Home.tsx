import React, { useState } from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import _ from "components/partials";
import Images from "assets/images";
import { Send } from "@material-ui/icons";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { RootState } from "state/reducers";

export default function Home() {
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
    if (value.length === 6) {
      axios
        .get(`http://localhost:3001/requests/${value.toUpperCase()}`)
        .then((res) => {
          console.log(res.data);
          setBookingRequest({
            referenceNumber: res.data.reference_number,
            firstName: res.data.first_name,
            lastName: res.data.last_name,
            email: res.data.email_address,
            phone: res.data.phone_number,
            numAdults: res.data.num_adults,
            numChildren: res.data.num_children,
            numDogs: res.data.num_dogs,
            dates: res.data.dates,
          });
          setInputError(false);
          history.push("/track");
        })
        .catch(() => setInputError(true));
    }
  }

  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => history.push("/track")}>
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder={"Track booking"}
          onChange={(e) => handleRefInput(e.target.value)}
          value={bookingRef}
          error={inputError}
          helperText={inputError ? "Booking not found" : null}
        />
      </Grid>
      <Grid item>
          <Typography variant="subtitle1" component="h2">
            Check Dates
          </Typography>
        </Grid>
      <Grid item>
        <_.DateSelector />
      </Grid>

      <Grid item>
        <_.ImageCarousel
          slides={Images.elmPhotos}
          autoplay
          arrows
          interval={2500}
        />
      </Grid>
      <Grid item>
        <Typography align="center">
          Lorem ipsum Eildon watersports freezing wakeboarding motel scuba
          diving houseboats. Eildon accommodation lakes trees foliage fishing
          pondage bogans hiking beer!
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="primary">
          2 Girdwood Parade, Eildon VIC 3713
        </Typography>
      </Grid>
      <_.PageFooter />
    </Grid>
  );
}
