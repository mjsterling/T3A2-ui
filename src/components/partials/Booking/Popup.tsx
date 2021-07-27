import { Grid, Button, Fab } from "@material-ui/core";
import _ from "components/partials";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "state/reducers";
import actionCreators from "state/actionCreators";
import { Save, Close, Add } from "@material-ui/icons";
import moment from "moment";

export default function Popup(props: {
  open: boolean;
  toggleOpen: Function;
  room_number: number;
  id?: number;
}) {
  const bookingRequest = useSelector(
    (state: RootState) => state.bookingRequest
  );
  const calendarDate = useSelector((state: RootState) => state.roomCalendar);
  const dispatch = useDispatch();
  const { postBooking, setCheckIn, setCheckOut } = bindActionCreators(
    actionCreators,
    dispatch
  );

  if (!props.open)
    return (
      <Fab
        variant="extended"
        onClick={() => {
          props.toggleOpen(true);
          setCheckIn(moment(calendarDate));
          setCheckOut(moment(calendarDate).add(1, "day"));
        }}
        color="primary"
      >
        <b>New Booking&nbsp;</b>
        <Add />
      </Fab>
    );

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={2}
      style={{ border: "1px solid black", borderRadius: "2vh" }}
    >
      <Grid item>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => props.toggleOpen(false)}
          endIcon={<Close />}
        >
          Close
        </Button>
      </Grid>
      <_.Booking.DateSelector />
      <Grid item container xs={9}>
        <_.Booking.PaxSelector />
      </Grid>
      <Grid item container xs={12}>
        <_.Booking.FormFields />
      </Grid>
      <Grid item>
        <Button
          onClick={() =>
            postBooking({
              ...bookingRequest,
              id: props.id || null,
              room_number: props.room_number,
            })
          }
          color="primary"
          endIcon={<Save />}
        >
          Create Booking
        </Button>
      </Grid>
    </Grid>
  );
}
