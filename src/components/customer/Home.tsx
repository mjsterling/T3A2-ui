import React from "react";
import { Grid } from "@material-ui/core";
import _ from "components/partials";
import Images from "assets/images";

export default function Home() {
  return (
    <Grid container>
      <_.ImageCarousel
        slides={Images.elmPhotos}
        autoplay
        arrows
        interval={2500}
      />
    </Grid>
  );
}
