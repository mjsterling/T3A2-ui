import { Grid, InputLabel, Typography } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/reducers";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { useHistory } from "react-router-dom";

export default function GuestDatePicker() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { checkIn, checkOut } = useSelector(
    (state: RootState) => state.bookingDates
  );
  const { setGuestCheckIn, setGuestCheckOut } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="subtitle1" component="h2">
            Check Dates
          </Typography>
        </Grid>
        <Grid container justifyContent="space-around">
          <Grid item xs={5}>
            <DatePicker
              label="Check In"
              inputVariant="outlined"
              value={checkIn}
              onChange={(e) => setGuestCheckIn(e)}
            />
          </Grid>
          <Grid item xs={5}>
            <DatePicker
              label="Check Out"
              inputVariant="outlined"
              value={checkOut}
              onChange={(e) => {
                setGuestCheckOut(e);
                history.push("/book");
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
