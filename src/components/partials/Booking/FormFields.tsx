import { Grid, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state/reducers";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";

export default function FormFields() {
  const { first_name, last_name, email_address, phone_number } = useSelector(
    (state: RootState) => state.bookingRequest
  );
  const dispatch = useDispatch();
  const { setFirstName, setLastName, setEmail, setPhoneNumber } =
    bindActionCreators(actionCreators, dispatch);
  return (
    <Grid container item direction="column" alignItems="center">
      <Grid item>
        <TextField
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={first_name}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={last_name}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email_address}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phone_number}
        />
      </Grid>
    </Grid>
  );
}
