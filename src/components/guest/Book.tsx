import React from "react";
import { Grid } from "@material-ui/core";
import _ from "components/partials";

export default function Book() {
  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <_.Guest.DateSelector />
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
