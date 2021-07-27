import { Grid } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/reducers";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

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

  const DateSelectorElement = (props: {
    label: string;
    value: Date;
    error?: boolean;
    onChange: Function;
  }) => {
    return (
      <Grid item xs={5}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            size="small"
            label={props.label}
            inputVariant="outlined"
            value={props.value}
            onChange={(e) => props.onChange(e)}
            error={props.error}
            helperText={props.error ? `Invalid ${props.label} date` : null}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    );
  };

  const dateError = moment(checkIn).isBefore(moment().subtract(1, "day"));
  return (
    <Grid item container xs={12} spacing={2} justifyContent="center">
      <DateSelectorElement
        label="Check In"
        value={checkIn}
        error={dateError}
        onChange={setCheckIn}
      />
      <DateSelectorElement
        label="Check Out"
        value={checkOut}
        onChange={(e: MaterialUiPickersDate) => {
          setCheckOut(e);
          if (history.location.pathname === "/") history.push("/book");
        }}
      />
    </Grid>
  );
}
