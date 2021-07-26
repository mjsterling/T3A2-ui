import { Grid, Typography } from "@material-ui/core";
import _ from "components/partials";
import Images from "assets/images";

export default function Home() {
  return (
    <>
      <Grid item>
        <Typography variant="subtitle1" component="h2">
          Check Dates
        </Typography>
      </Grid>
      <_.Booking.DateSelector />
      <_.ImageCarousel
        slides={Images.elmPhotos}
        autoplay
        arrows
        interval={2500}
      />
      <Grid item>
        <Typography align="center">
          Lorem ipsum Eildon watersports houseboats. Eildon lakes trees foliage
          fishing pondage bogans hiking beer!
        </Typography>
      </Grid>
      <_.RefInput />
      <Grid item>
        <Typography color="primary">
          2 Girdwood Parade, Eildon VIC 3713
        </Typography>
      </Grid>
      <_.PageFooter />
    </>
  );
}
