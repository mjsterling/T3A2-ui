import React from "react";
import { Grid, Typography } from "@material-ui/core";
import _ from "components/partials";
import Images from "assets/images";

export default function Home() {
  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <_.DateSelector />
      </Grid>

      <Grid item>
        <_.ImageCarousel
          slides={Images.elmPhotos}
          autoplay
          arrows
          interval={2500}
        />
      </Grid>
      <Grid item>
        <Typography align="center">
          Lorem ipsum Eildon watersports freezing wakeboarding motel scuba
          diving houseboats. Eildon accommodation lakes trees foliage fishing
          pondage bogans hiking beer!
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="primary">
          2 Girdwood Parade, Eildon VIC 3713
        </Typography>
      </Grid>
      <_.PageFooter />
    </Grid>
  );
}
