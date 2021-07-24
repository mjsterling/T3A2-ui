import { Grid } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import react, { useState } from "react";
import MomentUtils from "@date-io/moment";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import axios from "axios";

export default function Home() {
  const [datePicked, setDatePicked] = useState(new Date());
  const [roomData, setRoomData] = useState([]);

  const changeDate = (e: MaterialUiPickersDate) => {
    // console.log(e?.toDate());
    setDatePicked(e?.toDate()!);
    getRoomData();
  };

  const getRoomData = async () => {
    axios({
      method: "GET",
      url: `http://localhost:3000/rooms`,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
    })
      .then((res: { data: [] }) => {
        console.log(res);
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setRoomData(data);
        console.log(roomData);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

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
              {roomData.map((room: { number:bigint }) => {
                return <Grid item>{room.number}</Grid>;
              })}
            </Grid>
          )}
        </Grid>

        <Grid item>hias</Grid>
      </Grid>
    </Grid>
  );
}
