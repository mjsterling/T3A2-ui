import { Grid, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'state/reducers'
import { bindActionCreators } from 'redux'
import actionCreators from 'state/actionCreators'

export default function BookingFormFields() {
    const { firstName, lastName, email, phone } = useSelector((state: RootState) => state.bookingRequest)
    const dispatch = useDispatch()
    const { setFirstName, setLastName, setEmail, setPhoneNumber } = bindActionCreators(actionCreators, dispatch)
    return (
    <Grid container direction="column" spacing={1} alignItems="center">
    <Grid item>
      <TextField
        label="First Name"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
    </Grid>
    <Grid item>
        
      <TextField
        label="Last Name"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
    </Grid>
    <Grid item>
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </Grid>
    <Grid item>
      <TextField
        label="Phone Number"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phone}
      />
    </Grid>
    </Grid>
    )
}