import { Grid, IconButton, InputLabel, Typography } from "@material-ui/core";
import { Remove, Add } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

export default function PaxSelector() {
  const pax = useSelector((state: RootState) => state.bookingPax);
  const dispatch = useDispatch();
  const { incAdults, decAdults, incChildren, decChildren, incDogs, decDogs } =
    bindActionCreators(actionCreators, dispatch);
  return (
    <Grid container justify="center" alignItems="center">
      <InputLabel>Adults</InputLabel>
      <Grid container justify="center" alignItems="center">
        <IconButton onClick={decAdults} size="small">
          <Remove />
        </IconButton>
        <Typography>{pax.adults}</Typography>
        <IconButton onClick={incAdults} size="small">
          <Add />
        </IconButton>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <InputLabel>Children</InputLabel>
        <IconButton onClick={decChildren} size="small">
          <Remove />
        </IconButton>
        <Typography>{pax.children}</Typography>
        <IconButton onClick={incChildren} size="small">
          <Add />
        </IconButton>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <InputLabel>Dogs</InputLabel>
        <IconButton onClick={decDogs} size="small">
          <Remove />
        </IconButton>
        <Typography>{pax.dogs}</Typography>
        <IconButton onClick={incDogs} size="small">
          <Add />
        </IconButton>
      </Grid>
    </Grid>
  );
}
