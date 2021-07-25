import { Grid, ListItem, ListItemText, Typography } from "@material-ui/core";
import { List } from "@material-ui/core";
import { BookingRequest } from "components/Interfaces";
import _ from "components/partials";
import { useSelector } from "react-redux";
import { RootState } from "state/reducers";

export default function Track() {
  const {
    firstName,
    lastName,
    email,
    phone,
    numAdults,
    numChildren,
    numDogs,
    dates,
    referenceNumber,
    status,
  } = useSelector((state: RootState) => state.bookingRequest);
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      style={{ textAlign: "center" }}
    >
      <Typography variant="h6" component="h2">
        Booking {referenceNumber}
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={`Status: ${status}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Dates: ${dates[0]} - ${dates[dates.length - 1]}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Name: ${firstName} ${lastName}`} />
        </ListItem>
        <ListItem>
          <Typography>Guests:</Typography>
          <_.PaxIcons
            adults={numAdults}
            children={numChildren}
            dogs={numDogs}
          />
        </ListItem>
      </List>
    </Grid>
  );
}
