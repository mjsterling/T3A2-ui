import { Grid, IconButton, Typography } from "@material-ui/core";
import { Remove, Add } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";
import _ from "..";

export default function PaxSelector() {
  const { num_adults, num_children, num_dogs } = useSelector(
    (state: RootState) => state.bookingRequest
  );
  const dispatch = useDispatch();
  const { incAdults, decAdults, incChildren, decChildren, incDogs, decDogs } =
    bindActionCreators(actionCreators, dispatch);

  const PaxSelectorElement = (props: {
    label: string;
    onClickDec: Function;
    onClickInc: Function;
    paxIconProps: {
      adults?: number;
      children?: number;
      dogs?: number;
    };
    disabled: boolean;
  }) => {
    return (
      <Grid container item xs={12} justify="space-evenly" alignItems="center">
        <Grid item xs={3}>
          <Typography align="right">{props.label}</Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            color="primary"
            onClick={() => props.onClickDec()}
            size="small"
            disabled={props.disabled}
          >
            <Remove />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <_.PaxIcons
            adults={props.paxIconProps.adults}
            children={props.paxIconProps.children}
            dogs={props.paxIconProps.dogs}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            color="primary"
            onClick={() => props.onClickInc()}
            size="small"
          >
            <Add />
          </IconButton>
        </Grid>
      </Grid>
    );
  };
  return (
    <>
      <PaxSelectorElement
        label="Adults"
        onClickDec={decAdults}
        onClickInc={incAdults}
        paxIconProps={{ adults: num_adults }}
        disabled={num_adults <= 1}
      />
      <PaxSelectorElement
        label="Children"
        onClickDec={decChildren}
        onClickInc={incChildren}
        paxIconProps={{ children: num_children }}
        disabled={!num_children}
      />
      <PaxSelectorElement
        label="Dogs"
        onClickDec={decDogs}
        onClickInc={incDogs}
        paxIconProps={{ dogs: num_dogs }}
        disabled={!num_dogs}
      />
    </>
  );
}
