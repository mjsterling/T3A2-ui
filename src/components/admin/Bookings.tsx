import { Grid, Typography } from "@material-ui/core";
import { Booking } from "components/Interfaces";
import _ from "components/partials";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

export default function Bookings() {
  const [searchQuery, setSearchQuery] = useState("");
  const bookings = useSelector((state: RootState) => state.bookings);
  const dispatch = useDispatch();
  const { getBookings } = bindActionCreators(actionCreators, dispatch);
  if (!bookings.length) getBookings();
  const BookingComponents = () =>
    bookings
      .filter((booking: Booking) =>
        new RegExp(searchQuery).test(Object.values(booking).join(""))
      )
      .sort((a: Booking, b: Booking) =>
        moment(a.created_at).isAfter(moment(b.created_at)) ? 1 : -1
      )
      .map((booking: Booking) => (
        <_.Admin.BookingAccordion booking={booking} />
      ));
  return (
    <>
      <_.Navbar />
      <Grid item>
        <Typography variant="h6" component="h1">
          Booking History
        </Typography>
      </Grid>
      <_.LiveSearch value={searchQuery} onChange={setSearchQuery} />
      <Grid item container xs={12} spacing={1} direction="column">
        <BookingComponents />
      </Grid>
    </>
  );
}
