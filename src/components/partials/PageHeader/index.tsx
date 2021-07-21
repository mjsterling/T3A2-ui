import { Grid } from "@material-ui/core";
import _ from "..";
import BackButton from "./BackButton";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

export default function PageHeader() {
  return (
    <Grid item xs={12}>
      <Grid container spacing={1} alignItems="center" justify="space-evenly">
        <MenuButton />
        <Logo />
        <BackButton />
      </Grid>
    </Grid>
  );
}
