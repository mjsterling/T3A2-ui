import { Badge, Button, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Add } from '@material-ui/icons'
import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import _ from "../partials";
import { Check, Home } from "@material-ui/icons";
import { Room as room, Booking } from 'components/Interfaces'
import { RootState } from "state/reducers";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import {useState, useEffect} from 'react'
import DateSelector from "components/partials/DateSelector";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import clsx from "clsx";
import React from 'react'

const useStyles = makeStyles({
  booked: {
    backgroundColor: 'grey',
    borderRadius: '50%'
  }
})

export default function Room() {
  const [showBookingPopup, setShowBookingPopup] = useState(false)
  const classes = useStyles();
  const calendarDate = useSelector((state: RootState) => state.roomCalendar);
  const { checkIn, checkOut } = useSelector((state: RootState) => state.bookingRequest)
  const onChangeDate = () => {};
  type parameter = {
    id: string;
  }
  const { id } = useParams<parameter>();
  const dispatch = useDispatch();
  const { getRooms, setDate, setCheckIn, setCheckOut } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    setCheckIn(null)
    setCheckOut(null)
  }, [])

  const room = useSelector((state: RootState) => {
    return state.rooms
  }).find((rm: {number: number}) => {
    return rm.number === +id
  })

  // const onChangedDate = (date: MaterialUiPickersDate) => {
  //   const nDate = moment(date);
  //   const booked = room?.bookings.find((bk: Booking) => bk.dates!.map(dt=>moment(dt).isSame(date, 'day')).includes(true));
  //   if(booked){
  //     return;
  //   }

  //   //idk how we gon' do resetting or overriding

  //   if(!checkIn || (checkIn && checkOut)){
  //     setCheckIn(nDate);
  //   }else{
  //     setCheckOut(nDate);
  //   }
  // }

  if(!room){
    getRooms();
  }
  const booking = room?.bookings.find((bkng: Booking) => bkng.dates!.map(date => moment(date).isSame(calendarDate, 'day')).includes(true))
  const status = booking ? `Occupied` : 'Available'

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Grid container justifyContent='center'>
          <Typography>
            {room?.number}
          </Typography>
            <Grid container direction="row" spacing={2} justifyContent='center'>
              {!booking ? <Check /> : <Home />}
            <Typography variant="subtitle1" component="h4"><b>{status}</b></Typography>
            {booking ? <_.PaxIcons adults={booking.num_adults} children={booking.num_children} dogs={booking.num_dogs} /> : null}
          </Grid>
        </Grid> 
        <Grid item>
          <Calendar date={calendarDate} onChange={(e:MaterialUiPickersDate) => {
            setDate(moment(e));
          }} 
          renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
          const date = moment(day);
          const booked = room?.bookings.find((bk: Booking) => bk.dates!.map(dt=>moment(dt).isSame(date, 'day')).includes(true));
          return <div className={clsx((booked && !dayComponent.props.hidden) && classes.booked)}>{dayComponent}</div>
          // You can also use our internal <Day /> component
          //this is really gross atm, and i want to change it so much, but it's kind of working, so ill leave as is, until everything else works
          // return <Badge badgeContent={(booked && !dayComponent.props.hidden) ? "🌚" : undefined}>{dayComponent}</Badge>;
        }}/>
        </Grid>
        <Grid item xs={12}>
        {showBookingPopup ? 
          <_.BookingPopup roomNumber={room?.number} setShowBookingPopup={setShowBookingPopup}/> : <Button onClick={() => setShowBookingPopup(true)} variant="outlined" color="primary" endIcon={<Add />}>New Booking</Button>}
          </Grid>
       
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
