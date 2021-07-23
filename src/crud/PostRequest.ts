import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";
import { Booking } from "state/reducers/bookingDetailsReducer";

export default function PostRequest() {
  const bookingDetails: Booking = useSelector(
    (state: RootState) => state.bookingDetails
  );
  const dispatch = useDispatch();
  const { setReferenceNumber } = bindActionCreators(actionCreators, dispatch);
  const bookingPax = useSelector((state: RootState) => state.bookingPax);
  const bookingDates = useSelector((state: RootState) => state.guestDates);
  const dateArray = [];
  const lengthOfStay = moment(bookingDates.checkOut).diff(
    moment(bookingDates.checkIn),
    "days"
  );
  for (let i = 0; i < lengthOfStay; i++) {
    dateArray.push(moment(bookingDates.checkIn).add(i, "day"));
  }
  axios
    .post("http//localhost3001/requests", {
      first_name: bookingDetails.firstName,
      last_name: bookingDetails.lastName,
      email_address: bookingDetails.email,
      phone_number: bookingDetails.phone,
      num_adults: bookingPax.adults,
      num_children: bookingPax.children,
      num_dogs: bookingPax.dogs,
      dates: dateArray,
    })
    .then((res) => {
      if (res.status === 201) {
      }
    });
}
