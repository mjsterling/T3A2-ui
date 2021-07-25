import { Grid, IconButton, InputLabel, Typography } from "@material-ui/core";
import { Remove, Add } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";
import _ from ".";

export default function PaxSelector() {
  const { numAdults, numChildren, numDogs } = useSelector(
    (state: RootState) => state.bookingRequest
  );
  const dispatch = useDispatch();
  const { incAdults, decAdults, incChildren, decChildren, incDogs, decDogs } =
    bindActionCreators(actionCreators, dispatch);
  return (
    <Grid container justify="center" alignItems="center">
      <Grid container justify="center" alignItems="center">
        <InputLabel>Adults</InputLabel>
        {numAdults > 1 ? (
          <IconButton onClick={decAdults} size="small">
            <Remove />
          </IconButton>
        ) : null}
        <_.PaxIcons adults={numAdults} />
        <IconButton onClick={incAdults} size="small">
          <Add />
        </IconButton>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <InputLabel>Children</InputLabel>
        {numChildren ? (
          <IconButton onClick={decChildren} size="small">
            <Remove />
          </IconButton>
        ) : null}
        <_.PaxIcons children={numChildren} />
        <IconButton onClick={incChildren} size="small">
          <Add />
        </IconButton>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <InputLabel>Dogs</InputLabel>
        {numDogs ? (
          <IconButton onClick={decDogs} size="small">
            <Remove />
          </IconButton>
        ) : null}
        <_.PaxIcons dogs={numDogs} />
        <IconButton onClick={incDogs} size="small">
          <Add />
        </IconButton>
      </Grid>
    </Grid>
  );
}
