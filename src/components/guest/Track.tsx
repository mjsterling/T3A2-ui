import { Button, ListItem, ListItemText, Typography } from "@material-ui/core";
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
    first_name,
    last_name,
    email_address,
    phone_number,
    num_adults,
    num_children,
    num_dogs,
    dates,
    reference_number,
  } = useSelector((state: RootState) => state.bookingRequest);

  if (!reference_number) history.push("/");

  const cancelConfirmation = () =>
    confirmAlert({
      title: "Cancel Booking",
      message: "Are you sure you want to cancel your booking?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(
                `https://eildonlakemotel-api.herokuapp.com/requests/${reference_number}`
              )
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
        Booking {reference_number}
      </Typography>
      <List>
        <LI
          text={`Dates: ${dates && dates[0]} - ${
            dates && dates[dates.length - 1]
          }`}
        />
        <LI text={`Name: ${first_name} ${last_name}`} />
        <LI text={`Email: ${email_address}`} />
        <LI text={`Phone: ${phone_number}`} />
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
