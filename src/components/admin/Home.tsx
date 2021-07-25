import { Grid, makeStyles, Typography } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import react, { useEffect, useState } from "react";
import MomentUtils from "@date-io/moment";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "state/reducers";

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
  // const [roomData, setRoomData] = useState([]);
  const roomData = useSelector((state: RootState) => state.rooms)
  const styles = useStyles();

  // useEffect(() => {
  //   getRoomData();
  //   console.log(roomData);
  // }, [datePicked]);

  useEffect(() => {
    
  }, [roomData])

  const changeDate = (e: MaterialUiPickersDate) => {
    // console.log(e?.toDate());
    setDatePicked(e?.toDate()!);
    // getRoomData();
  };

  // const getRoomData = async () => {
  //   axios({
  //     method: "GET",
  //     url: `http://localhost:3000/rooms`,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //     },
  //   })
  //     .then((res: { data: [] }) => {
  //       return res.data;
  //     })
  //     .then((data) => {
  //       setRoomData(data);
  //     })
  //     .catch((e: any) => {
  //       console.log(e);
  //     });
  // };

  
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
  const checkRoomAvail = (room: room, date: Date) => {
    console.log('checking room avail');
    if(!!!room.bookings){ return true; }
    return (room.bookings.find(booking => booking.dates.includes(date.toDateString())));
  }

  return (
    <Grid container>
      <Grid container direction="column" alignItems="center" spacing={5}>
        <Grid item>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
              label="Dates"
              inputVariant="outlined"
              value={datePicked}
              onChange={(e: MaterialUiPickersDate) => e && changeDate(e)}
            />
          </MuiPickersUtilsProvider>


          {roomData && (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {roomData.map((room: { number:number }, index) => {
                return <Grid container className={styles.roomContainer} key={index} direction='column' justifyContent='center' alignItems='center'>
                  {/* \/ Room number \/ */}
                  <Grid item>
                    <Typography>
                      {room.number}
                    </Typography>
                  </Grid>
                  {/* \/ Available/Booking data \/ */}
                  <Grid item>
                    <Typography>
                      {checkRoomAvail(room, datePicked) ? `Available` : `Booked already`}
                    </Typography>
                  </Grid>
                  </Grid>;
              })}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
