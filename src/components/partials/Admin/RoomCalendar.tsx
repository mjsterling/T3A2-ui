import MomentUtils from "@date-io/moment";
import { Grid, makeStyles } from "@material-ui/core";
import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Booking, RoomItf } from "components/Interfaces";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

const useStyles = makeStyles({
  available: {
    fontWeight: "bold",
  },
  booked: {
    color: "grey",
    textDecoration: "line-through",
    borderRadius: "5vh",
  },
});

export default function RoomCalendar(props: { room: RoomItf | undefined }) {
  const classes = useStyles();
  const calendarDate = useSelector((state: RootState) => state.roomCalendar);
  const dispatch = useDispatch();
  const { setDate } = bindActionCreators(actionCreators, dispatch);

  if (!props.room) return null;
  else
    return (
      <Grid item>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Calendar
            date={calendarDate}
            onChange={(e: MaterialUiPickersDate) => {
              setDate(moment(e));
            }}
            renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
              const date = moment(day);
              const booked = props.room!.bookings.find((bk: Booking) =>
                bk
                  .dates!.map((dt) => moment(dt).isSame(date, "day"))
                  .includes(true)
              );
              return (
                <div className={booked ? classes.booked : classes.available}>
                  {dayComponent}
                </div>
              );
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    );
}
