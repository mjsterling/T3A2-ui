import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Fab,
  Grid,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import axios from "axios";
import { Booking, BookingRequest, RoomItf } from "components/Interfaces";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";
import _ from "..";

export default function BookingAccordion(props: {
  booking?: Booking;
  request?: BookingRequest;
}) {
  const rooms = useSelector((state: RootState) => state.rooms);
  const dispatch = useDispatch();
  const { getRooms, postBooking, getRequests } = bindActionCreators(
    actionCreators,
    dispatch
  );
  if (!rooms.length) getRooms();
  const [roomSelect, setRoomSelect] = useState<number | null>(null);
  const booking = props.booking || props.request;
  if (!booking) return null;

  const AvailRooms: JSX.Element[] = [];
  if (props.request) {
    const requestDates = booking.dates!.map((d: Date) =>
      moment(d).format("DD/MM/YY")
    );
    rooms
      .filter(
        (room: RoomItf) =>
          room.capacity >= booking.num_adults + booking.num_children
      )
      .forEach((room: RoomItf) => {
        const roomBookingDateSet = new Set(
          room.bookings
            .map((bkng: Booking) =>
              bkng.dates!.map((dt: Date) => moment(dt).format("DD/MM/YY"))
            )
            .flat()
        );
        const intersection = requestDates.filter((ds: string) =>
          roomBookingDateSet.has(ds)
        );
        if (intersection.length) return;

        AvailRooms.push(
          <Fab
            size="small"
            onClick={() => setRoomSelect(room.number)}
            color={
              new RegExp(roomSelect + "").test(room.number + "")
                ? "primary"
                : "default"
            }
          >
            <Typography variant="subtitle1">
              <b>{room.number}</b>
            </Typography>
          </Fab>
        );
      });
  }

  return (
    <Grid item>
      <Accordion elevation={2}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Grid container justifyContent="space-between">
            {props.booking && rooms.length && (
              <Typography>
                <b>
                  {
                    rooms.find(
                      (room: RoomItf) =>
                        room.id === (booking as Booking).room_id
                    ).number
                  }
                  &nbsp;
                </b>
              </Typography>
            )}
            <Typography color="primary">
              <b>
                {booking.first_name} {booking.last_name} &nbsp;
              </b>
            </Typography>
            <Typography>
              {moment(booking.dates![0]).format("DD/MM")} -{" "}
              {moment(booking.dates![booking.dates!.length - 1]).format(
                "DD/MM"
              )}
            </Typography>
          </Grid>
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
            {props.request &&
              (AvailRooms.length ? (
                <>
                  <Grid item>
                    <Typography> Available Rooms:</Typography>
                  </Grid>
                  <Grid item container xs={12} spacing={1} justify="center">
                    {AvailRooms}
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() =>
                        postBooking(
                          { ...booking, room_number: roomSelect },
                          true
                        )
                      }
                      variant="contained"
                      color="primary"
                      disabled={!roomSelect}
                    >
                      Assign Booking To Room {roomSelect}
                    </Button>
                  </Grid>
                </>
              ) : (
                <Grid item>
                  <Typography>No rooms available for these dates.</Typography>
                </Grid>
              ))}
          </Grid>

          {props.request && (
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() =>
                  axios
                    .delete(`http:/localhost:3000/requests/${booking.id}`)
                    .then(getRequests)
                }
              >
                Delete Request
              </Button>
            </Grid>
          )}
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
