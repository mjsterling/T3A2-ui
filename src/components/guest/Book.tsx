import React from "react";
import { Grid } from "@material-ui/core";
import _ from "components/partials";

export default function Book() {
  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <_.DateSelector />
      </Grid>
      <Grid item>
        <_.PaxSelector />
      </Grid>
    </Grid>
  );
}
