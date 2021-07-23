import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

export default function TermsConditions() {
  const termsConditions = useSelector(
    (state: RootState) => state.termsConditions
  );
  const bookingPax = useSelector((state: RootState) => state.bookingPax);
  const dispatch = useDispatch();
  const { acceptTermsConditions, acceptPrivacyPolicy, acceptPetsPolicy } =
    bindActionCreators(actionCreators, dispatch);
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              checked={termsConditions.terms}
              onChange={acceptTermsConditions}
              color="primary"
            />
          }
          label="I agree to the Terms and Conditions"
        />
      </Grid>
      {!termsConditions.terms ? (
        <Grid item>
          <Card style={{ height: "20vh", overflow: "scroll" }}>
            <Typography align="center" style={{ fontSize: "8pt" }}>
              To make sure that they, too, receive or can get it if you want to
              do, use the Work by any means. Nothing in this license, then do
              not modify or delete any preexisting copyright notices and
              associated disclaimers. You may use, copy, modify, and distribute
              such modifications under the terms of Paragraphs 1 and 2 above on
              a computer program containing, or used to endorse or promote
              products derived from the Contributor who includes the
              non-exclusive, worldwide, royalty-free copyright license set forth
              in this license. This license establishes the terms of Paragraphs
              1 and 2 shall be held by the GNU General Public License from time
              to time revised and/or new versions of this document. Legal Entity
              on behalf of the corresponding source code, to be covered by the
              Licensed Product doesn't work properly or causes you any warranty
              whatsoever, nor is the grantor of rights, (i) claims of patents
              now or hereafter owned or controlled by Licensor, to make, use,
              sell, offer to sell, sell, import and otherwise use parts of
              NetHack or use the text of the Work or Derivative Works that
              consist of the Program as soon as reasonably practicable.
            </Typography>
          </Card>
        </Grid>
      ) : null}
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              checked={termsConditions.privacyPolicy}
              onChange={acceptPrivacyPolicy}
              color="primary"
            />
          }
          label="I agree to the Privacy Policy"
        />
      </Grid>
      {!termsConditions.privacy ? (
        <Grid item>
          <Card style={{ height: "20vh", overflow: "scroll" }}>
            <Typography align="center" style={{ fontSize: "8pt" }}>
              To make sure that they, too, receive or can get it if you want to
              do, use the Work by any means. Nothing in this license, then do
              not modify or delete any preexisting copyright notices and
              associated disclaimers. You may use, copy, modify, and distribute
              such modifications under the terms of Paragraphs 1 and 2 above on
              a computer program containing, or used to endorse or promote
              products derived from the Contributor who includes the
              non-exclusive, worldwide, royalty-free copyright license set forth
              in this license. This license establishes the terms of Paragraphs
              1 and 2 shall be held by the GNU General Public License from time
              to time revised and/or new versions of this document. Legal Entity
              on behalf of the corresponding source code, to be covered by the
              Licensed Product doesn't work properly or causes you any warranty
              whatsoever, nor is the grantor of rights, (i) claims of patents
              now or hereafter owned or controlled by Licensor, to make, use,
              sell, offer to sell, sell, import and otherwise use parts of
              NetHack or use the text of the Work or Derivative Works that
              consist of the Program as soon as reasonably practicable.
            </Typography>
          </Card>
        </Grid>
      ) : null}
      {bookingPax.dogs > 0 ? (
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={termsConditions.pets}
                onChange={acceptPetsPolicy}
                color="primary"
              />
            }
            label="I agree to the Pets Policy"
          />
        </Grid>
      ) : null}
      {bookingPax.dogs > 0 && !termsConditions.pets ? (
        <Grid item>
          <Card style={{ height: "20vh", overflow: "scroll" }}>
            <Typography align="center" style={{ fontSize: "8pt" }}>
              To make sure that they, too, receive or can get it if you want to
              do, use the Work by any means. Nothing in this license, then do
              not modify or delete any preexisting copyright notices and
              associated disclaimers. You may use, copy, modify, and distribute
              such modifications under the terms of Paragraphs 1 and 2 above on
              a computer program containing, or used to endorse or promote
              products derived from the Contributor who includes the
              non-exclusive, worldwide, royalty-free copyright license set forth
              in this license. This license establishes the terms of Paragraphs
              1 and 2 shall be held by the GNU General Public License from time
              to time revised and/or new versions of this document. Legal Entity
              on behalf of the corresponding source code, to be covered by the
              Licensed Product doesn't work properly or causes you any warranty
              whatsoever, nor is the grantor of rights, (i) claims of patents
              now or hereafter owned or controlled by Licensor, to make, use,
              sell, offer to sell, sell, import and otherwise use parts of
              NetHack or use the text of the Work or Derivative Works that
              consist of the Program as soon as reasonably practicable.
            </Typography>
          </Card>
        </Grid>
      ) : null}
    </Grid>
  );
}
