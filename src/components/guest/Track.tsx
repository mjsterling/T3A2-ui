import {
  Button,
  Grid,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { List } from "@material-ui/core";
import _ from "components/partials";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "state/reducers";
import axios from "axios";

export default function Track() {
  const history = useHistory();
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
  if (!referenceNumber) history.push("/");
  const cancelConfirmation = () =>
    confirmAlert({
      title: "Cancel Booking",
      message: "Are you sure you want to cancel your booking?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`http://localhost:3001/requests/${referenceNumber}`)
              .then((res) => {
                confirmAlert({
                  title: "Sorry to see you go.",
                  message: "Booking deleted successfully.",
                  buttons: [{ label: "OK", onClick: () => history.push("/") }],
                });
              });
          },
        },
        { label: "No", onClick: () => null },
      ],
    });
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      style={{ textAlign: "center" }}
    >
      <_.BackButton />
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
          <ListItemText primary={`Email: ${email}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Phone: ${phone}`} />
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
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.push("/book")}
      >
        Edit Booking
      </Button>
      <Button variant="outlined" color="secondary" onClick={cancelConfirmation}>
        Cancel Booking
      </Button>
    </Grid>
  );
}
