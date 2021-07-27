import MomentUtils from "@date-io/moment";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

const useStyles = makeStyles({
  datePicker: {
    textAlign: "center",
  },
});
export default function DateSelector() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const calendarDate = useSelector((state: RootState) => state.roomCalendar);
  const { decDate, setDate, incDate } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      <Grid item>
        <IconButton size="small" onClick={decDate}>
          <ArrowBack />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            size="small"
            inputVariant="outlined"
            inputProps={{ className: classes.datePicker }}
            value={calendarDate}
            onChange={(e: MaterialUiPickersDate) => setDate(moment(e))}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item>
        <IconButton size="small" onClick={incDate}>
          <ArrowForward />
        </IconButton>
      </Grid>
    </Grid>
  );
}
