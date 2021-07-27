import { Grid, IconButton, Typography } from "@material-ui/core";
import moment from "moment";
import _ from "../partials";
import { RoomItf, Booking } from "components/Interfaces";
import { RootState } from "state/reducers";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { useState } from "react";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

export default function Room() {
  const history = useHistory();
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const calendarDate = useSelector((state: RootState) => state.roomCalendar);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { getRooms } = bindActionCreators(actionCreators, dispatch);

  const rooms = useSelector((state: RootState) => state.rooms);
  if (!rooms.length) getRooms();
  const room = rooms.find((rm: RoomItf) => rm.number === +id);

  const booking = room?.bookings.find((bkng: Booking) =>
    bkng
      .dates!.map((date) => moment(date).isSame(calendarDate, "day"))
      .includes(true)
  );
  const status = booking
    ? `${booking.first_name} ${booking.last_name}`
    : "Available";

  const roomNumbers = rooms.map((room: RoomItf) => room.number);

  if (!localStorage.getItem("jwt")) history.push("/login");

  return (
    <>
      <_.Navbar />
      <Grid item container xs={12} spacing={1} justifyContent="center">
        <Grid item>
          <IconButton
            size="small"
            onClick={() =>
              history.push(
                `/room/${+id - 1 || roomNumbers[roomNumbers.length - 1]}`
              )
            }
          >
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h1">
            Room {id}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            size="small"
            onClick={() =>
              history.push(
                `/room/${
                  +id + 1 > roomNumbers[roomNumbers.length - 1] ? 1 : +id + 1
                }`
              )
            }
          >
            <ArrowForward />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={2} justifyContent="center">
        <Grid item>
          <Typography variant="subtitle1" component="h4">
            <b>{status}</b>
          </Typography>
        </Grid>
        {booking ? (
          <Grid item>
            <_.PaxIcons
              adults={booking.num_adults}
              children={booking.num_children}
              dogs={booking.num_dogs}
            />
          </Grid>
        ) : null}
      </Grid>
      <_.Admin.RoomCalendar room={room} />

      <_.Booking.Popup
        roomNumber={+id}
        open={showBookingPopup}
        toggleOpen={setShowBookingPopup}
      />
    </>
  );
}
