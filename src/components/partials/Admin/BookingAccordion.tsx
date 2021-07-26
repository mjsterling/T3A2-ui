import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { Booking, BookingRequest } from "components/Interfaces";
import moment from "moment";
import _ from "..";

export default function BookingAccordion(props: {
  booking?: Booking;
  request?: BookingRequest;
}) {
  const booking = props.booking || props.request;
  if (!booking) return null;

  return (
    <Grid item>
      <Accordion elevation={2}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color="primary">
            <b>
              {booking.first_name} {booking.last_name} &nbsp;
            </b>
          </Typography>
          <Typography>
            {moment(booking.dates![0]).format("DD/MM/YY")} -{" "}
            {moment(booking.dates![booking.dates!.length - 1]).format(
              "DD/MM/YY"
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="column" spacing={1} alignItems="center">
            <_.PaxIcons
              adults={booking.num_adults}
              children={booking.num_children}
              dogs={booking.num_dogs}
            />
            <Grid item>
              <Typography>
                <a href={`mailto:${booking.email_address}`}>
                  {booking.email_address}
                </a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <a href={`tel:${booking.phone_number}`}>
                  {booking.phone_number}
                </a>
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
