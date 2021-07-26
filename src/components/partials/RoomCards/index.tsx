import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "state/reducers";
import RoomCard from "./RoomCard";
export default function RoomCards(props: { roomNumbers: number[] }) {
  const calendarDate = useSelector((state: RootState) => state.roomCalendar);
  if (!props.roomNumbers.length) return null;

  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {props.roomNumbers.map((n: number) => (
        <RoomCard number={n} date={calendarDate} />
      ))}
    </Grid>
  );
}
