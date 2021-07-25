import { Grid, makeStyles, Typography } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import react, { useEffect, useState } from "react";
import moment from 'moment'
import MomentUtils from "@date-io/moment";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { RootState } from "state/reducers";
import actionCreators from 'state/actionCreators'
import _ from 'components/partials'
import { Room } from "components/Interfaces";

const useStyles = makeStyles({
  roomContainer:{
    background: 'white',
    border: '7px solid #8090A4',
    borderRadius: '25px',
    width: '33vw',
    height: '33vh'
  }
});
export default function Home() {
  const [datePicked, setDatePicked] = useState(new Date());
  const dispatch = useDispatch();
  const { getRooms } = bindActionCreators(actionCreators, dispatch);
  const rooms = useSelector((state: RootState) => state.rooms)
  const roomNumbers = rooms.map((room: Room) => room.room_number);
  console.log('roomnumbers: ', roomNumbers);
  const styles = useStyles();

  if(!roomNumbers.length){ getRooms(); }

  // useEffect(() => {
  //   getRoomData();
  //   console.log(roomData);
  // }, [datePicked]);


  const checkDate = (from: string, to: string, check: string) => {
    let f = new Date(from);
    let t = new Date(to);
    let c = new Date(check);
    
    return (c > f && c < t);
  }
  interface room {
    bookings?:[{dates:string}],
    number:number
  }
  // update this to return the booking info if it is unavailable
  // const checkRoomAvail = (room: room, date: Date) => {
  //   console.log('checking room avail');
  //   if(!!!room.bookings){ return true; }
  //   return (room.bookings.find(booking => booking.dates.includes(date.toDateString())));
  // }

  const RoomCards = () => roomNumbers !== [] ? roomNumbers.map((n: number) => <_.RoomCard room_number={n} date={datePicked} />) : null

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container direction="column" alignItems="center" spacing={5}>
        <Grid item>
            <DatePicker
              label="Dates"
              inputVariant="outlined"
              value={datePicked}
              onChange={(e: MaterialUiPickersDate) => setDatePicked(moment(e).toDate())}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              >
              <RoomCards />
            </Grid>
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
