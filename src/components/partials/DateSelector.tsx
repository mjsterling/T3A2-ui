import { Grid, InputLabel, Typography } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/reducers";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { useHistory } from "react-router-dom";
import moment from "moment";

export default function GuestDatePicker() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { checkIn, checkOut } = useSelector(
    (state: RootState) => state.bookingRequest
  );
  const { setCheckIn, setCheckOut } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const dateError = moment(checkIn).isBefore(moment().subtract(1, "day"));
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container justifyContent="space-around">
          <Grid item xs={5}>
            <DatePicker
              label="Check In"
              inputVariant="outlined"
              value={checkIn}
              onChange={(e) => setCheckIn(e)}
              error={dateError}
              helperText={
                dateError ? "Check in cannot be earlier than today" : null
              }
            />
          </Grid>
          <Grid item xs={5}>
            <DatePicker
              label="Check Out"
              inputVariant="outlined"
              value={checkOut}
              onChange={(e) => {
                setCheckOut(e);
                history.push("/book");
              }}
            />
          </Grid>
        </Grid>
    </MuiPickersUtilsProvider>
  );
}
