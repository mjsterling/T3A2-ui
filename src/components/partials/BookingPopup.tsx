import { Card, Paper, Grid, Button } from "@material-ui/core";
import _ from 'components/partials'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from 'state/reducers'
import actionCreators from 'state/actionCreators'
import { Save, Close } from '@material-ui/icons'

export default function BookingPopup(props: { setShowBookingPopup: Function; roomNumber: number, id?: number, }) {
  const bookingRequest = useSelector((state: RootState) => state.bookingRequest)
  const dispatch = useDispatch()
  const { postBooking } = bindActionCreators(actionCreators, dispatch)
  return (
  <Paper>
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Button variant="outlined" color="secondary" onClick={() => propsetShowBookingPopup(false)} endIcon={<Close />}>Close</Button>
        </Grid>
    <Grid item xs={12}>
        <_.DateSelector />
      </Grid>
      <Grid item xs={12}>
        <_.PaxSelector />
      </Grid>
      <Grid item>
        <_.BookingFormFields />
        </Grid>
      <Grid item>
        <Button onClick={() => postBooking({
          ...bookingRequest,
          id: props.id || null,
          roomNumber: props.roomNumber
          })}
          color="primary" 
          endIcon={<Save />}>
            Create Booking
          </Button>
    </Grid>
    </Grid>
  </Paper>)
}
