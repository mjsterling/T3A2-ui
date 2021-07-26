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
    num_adults,
    num_children,
    num_dogs,
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
              .delete(`http://localhost:3000/requests/${referenceNumber}`)
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

  const LI = (props: { text: string }) => {
    return (
      <ListItem>
        <ListItemText style={{ textAlign: "center" }} primary={props.text} />
      </ListItem>
    );
  };
  return (
    <>
      <Typography variant="h6" component="h2">
        Booking {referenceNumber}
      </Typography>
      <List>
        <LI text={`Status: ${status}`} />
        <LI
          text={`Dates: ${dates && dates[0]} - ${
            dates && dates[dates.length - 1]
          }`}
        />
        <LI text={`Name: ${firstName} ${lastName}`} />
        <LI text={`Email: ${email}`} />
        <LI text={`Phone: ${phone}`} />
        <LI text={"Guests: "} />
        <_.PaxIcons
          adults={num_adults}
          children={num_children}
          dogs={num_dogs}
        />
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
    </>
  );
}
