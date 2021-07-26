import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";
import { TCsText } from "./TCsText";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "transparent",
    height: "20vh",
    overflow: "scroll",
    padding: "5%",
  },
});

export default function TermsConditions() {
  const classes = useStyles();
  const termsConditions = useSelector(
    (state: RootState) => state.termsConditions
  );
  const { num_dogs } = useSelector((state: RootState) => state.bookingRequest);
  const dispatch = useDispatch();
  const { acceptTermsConditions, acceptPrivacyPolicy, acceptPetsPolicy } =
    bindActionCreators(actionCreators, dispatch);

  const TCsElement = (props: {
    checked: boolean;
    disabled?: boolean;
    onChange: Function;
    label: string;
    textContent: string;
  }) => {
    if (props.disabled) return null;
    return (
      <>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.checked}
                onChange={() => props.onChange()}
                color="primary"
              />
            }
            label={props.label}
          />
        </Grid>
        {!props.checked && (
          <Grid item>
            <Paper elevation={3} className={classes.paper}>
              <Typography align="center" style={{ fontSize: "8pt" }}>
                {props.textContent}
              </Typography>
            </Paper>
          </Grid>
        )}
      </>
    );
  };
  return (
    <>
      <TCsElement
        checked={termsConditions.terms}
        onChange={acceptTermsConditions}
        label="I agree to the Terms and Conditions"
        textContent={TCsText.termsConditions}
      />
      <TCsElement
        checked={termsConditions.privacy}
        onChange={acceptPrivacyPolicy}
        label="I agree to the Privacy Policy"
        textContent={TCsText.privacy}
      />
      <TCsElement
        checked={termsConditions.pets}
        disabled={!num_dogs}
        onChange={acceptPetsPolicy}
        label="I agree to the Pets Policy"
        textContent={TCsText.pets}
      />
    </>
  );
}
