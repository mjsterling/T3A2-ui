import { Paper, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { RoomItf, Booking } from "components/Interfaces";
import { useSelector } from "react-redux";
import { RootState } from "state/reducers";
import moment from "moment";
import { Alarm, Check, Home } from "@material-ui/icons";
import _ from "..";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  roomCard: {
    padding: "4%",
    width: "36vw",
    height: "20vh",
    borderRadius: "3vh",
    cursor: "pointer",
    transition: "0.5s",
  },
  avail: {
    background:
      "linear-gradient(135deg, #89f13b 0%, #11e06e 91%, #ffffff 100%)",
    "& *": {
      fontWeight: "bold",
    },
  },
  occupied: {
    background:
      "linear-gradient(135deg, #f6d365 0%, #fda085 91%, #ffffff 100%)",
    "& *": {
      fontWeight: "bold",
    },
  },
});

export default function RoomCard(props: { number: number; date: Date }) {
  const classes = useStyles();
  const history = useHistory();
  const room = useSelector((state: RootState) => state.rooms).find(
    (rm: RoomItf) => rm.number === props.number
  );

  const booking = room.bookings.find((bkng: Booking) =>
    bkng
      .dates!.map((date) => moment(date).isSame(props.date, "day"))
      .includes(true)
  );
  const status = booking
    ? `${booking.first_name} ${booking.last_name}`
    : "Available";
  const nextBookingDate = () => {
    if (!room.bookings.length) return "None";
    const dates = room.bookings.map((booking: Booking) => booking.dates!);
    const filteredDates = dates
      .flat()
      .filter((date: Date) => moment(date).isAfter(moment()));
    const sortedDates = filteredDates.sort((a: Date, b: Date) =>
      moment(a).isAfter(moment(b)) ? 1 : -1
    );
    console.log("sorted dates", sortedDates);
    const firstSortedDate = sortedDates.length
      ? moment(sortedDates[0]).format("DD/MM")
      : "None";
    return firstSortedDate;
  };
  return (
    <Grid item>
      <Paper
        variant="outlined"
        elevation={3}
        className={clsx(
          classes.roomCard,
          booking ? classes.occupied : classes.avail
        )}
        onClick={() => history.push(`/room/${props.number}`)}
      >
        <Grid
          container
          item
          xs={12}
          spacing={1}
          direction="column"
          alignItems="center"
        >
          <Grid
            container
            item
            xs={12}
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={3}>
              {status === "Available" ? <Check /> : <Home />}
            </Grid>
            <Grid item xs={3}>
              <Typography align="center" variant="subtitle1" component="h4">
                <b>{props.number}</b>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              {booking && moment(booking.dates[0]).isSame(new Date(), "day") ? (
                <>
                  <Alarm />
                  <Typography>{booking.arrival_time}</Typography>
                </>
              ) : null}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography>{status}</Typography>
          </Grid>
          <Grid item xs={12}>
            {booking ? (
              <_.PaxIcons
                size="small"
                adults={booking.num_adults}
                children={booking.num_children}
                dogs={booking.num_dogs}
              />
            ) : (
              <span>&nbsp;</span>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {booking
                ? `${moment(booking.dates[0]).format("DD/MM")} - ${moment(
                    booking.dates[booking.dates.length - 1]
                  ).format("DD/MM")}`
                : `Next: ${nextBookingDate()}`}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
