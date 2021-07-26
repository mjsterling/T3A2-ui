import { Badge, Grid, IconButton, Typography } from "@material-ui/core";
import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import _ from ".";
import { Check, Home } from "@material-ui/icons";
import { Room as room, Booking } from 'components/Interfaces'
import { RootState } from "state/reducers";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import {useEffect} from 'react'
import DateSelector from "components/partials/DateSelector";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import clsx from "clsx";

export default function Room() {
  const onChangeDate = () => {};
  type parameter = {
    id: string;
  }
  const { id } = useParams<parameter>();
  const dispatch = useDispatch();
  const { getRooms, incDate, decDate, setDate } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const room = useSelector((state: RootState) => {
    return state.rooms
  }).find((rm: {number: number}) => {
    return rm.number === +id
  })

  if(!room){
    getRooms();
  }
  const booking = room?.bookings.find((bkng: Booking) => bkng.dates!.map(date => moment(date).isSame(moment(), 'day')).includes(true))
  const status = booking ? `Occupied` : 'Available'

  const handleMonthChange = () => {

  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Grid container justifyContent='center'>
          <Typography>
            {room?.number}
          </Typography>
            <Grid container direction="row" spacing={2} justifyContent='center'>
              {true ? <Check /> : <Home />}
            <Typography variant="subtitle1" component="h4"><b>{status}</b></Typography>
            {/* {booking ? <_.PaxIcons adults={booking.num_adults} children={booking.num_children} dogs={booking.num_dogs} /> : null} */}
          </Grid>
        </Grid> 
        <Grid item>
          <Calendar date={moment()} onChange={onChangeDate} onMonthChange={handleMonthChange}
          renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
          const date = moment(day);
          const booked = room?.bookings.find((bk: Booking) => bk.dates!.map(dt=>moment(dt).isSame(date, 'day')).includes(true));
          // You can also use our internal <Day /> component
          
          //this is really gross atm, and i want to change it so much, but it's kind of working, so ill leave as is, until everything else works
          return <Badge badgeContent={booked ? "🌚" : undefined}>{dayComponent}</Badge>;;
        }}/>
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
