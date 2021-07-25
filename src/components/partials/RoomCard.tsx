import { Paper, Grid, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { Room, Booking } from 'components/Interfaces'
import { useSelector } from "react-redux";
import { RootState } from "state/reducers";
import moment from 'moment'
import { Check, Home } from "@material-ui/icons";
import _ from ".";
import {makeStyles} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
  roomCard: {
    width: '40vw',
    height: '30vh',
  },
  avail: {
    border: '2px solid green'
  },
  occupied: {
    border: '2px solid red'
  }
})

export default function RoomCard(props: {room_number: number; date: Date;}) {
  const classes = useStyles()
  const history = useHistory()
  const room = useSelector((state: RootState) => state.rooms).find((rm: Room) => rm.room_number === props.room_number)

  const booking = room.bookings.find((bkng: Booking) => bkng.dates!.map(date => moment(date).isSame(props.date, 'day')).includes(true))
  const status = booking ? `${booking.first_name} ${booking.last_name}` : 'Available'
  const nextBookingDate = () => {
    if(!room.bookings.length) return 'None'
    const dates = room.bookings.map((booking: Booking) => booking.dates!)
    const filteredDates = dates.flat().filter((date: Date) => moment(date).isAfter(moment()))
    const sortedDates = filteredDates.sort((a: Date, b: Date) => moment(a).isAfter(moment(b)) ? 1 : -1)
    console.log('sorted dates', sortedDates);
    const firstSortedDate = sortedDates.length ? sortedDates[0] : "None"
    return firstSortedDate
  }
  return (
    <Grid item>
      <Paper variant="outlined" className={clsx(classes.roomCard, booking ? classes.occupied : classes.avail)}>
        <Grid container direction="column" alignItems="center">
          <Grid container direction="row" spacing={2}>
          {status === "Available" ? <Check /> : <Home />}
        <Typography variant="subtitle1" component="h4"><b>{props.room_number}</b></Typography>
          </Grid>
        <Typography>{status}</Typography>
        {booking ? <_.PaxIcons adults={booking.num_adults} children={booking.num_children} dogs={booking.num_dogs} /> : null}
        <Typography>{booking 
          ? `c/o: ${moment(booking.dates[booking.dates.length - 1]).format('DD/MM/YYYY')}` 
          : `n/b: ${nextBookingDate()}`}
            </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}
