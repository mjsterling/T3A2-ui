import { Grid } from "@material-ui/core";
import _ from "..";
import BackButton from "./BackButton";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

export default function PageHeader() {
  return (
    <Grid item xs={12}>
      <Grid container alignItems="center" justify="space-evenly">
        <Grid item xs={2}>
          <MenuButton />
        </Grid>
        <Grid item xs={8}>
          <Logo />
        </Grid>
        <Grid item xs={2}>
          <BackButton />
        </Grid>
      </Grid>
    </Grid>
  );
}
