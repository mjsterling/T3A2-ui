import { Grid, makeStyles } from "@material-ui/core";
import { Route } from "react-router-dom";
import Guest from "./components/guest";
import Admin from "./components/admin";
import _ from "./components/partials";
import images from "assets/images";

const useStyles = makeStyles({
  background: {
    position: "fixed",
    zIndex: -1,
    top: 0,
    left: 0,
    minWidth: "100vw",
    minHeight: "100vh",
    opacity: "0.24",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <img
        className={classes.background}
        alt="background"
        src={images.elmPhotos[3]}
      />
      <_.BackButton />
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        style={{ maxWidth: "480px" }}
      >
        <Grid item xs={12} md={5}>
          <_.Logo />
        </Grid>
        <Grid
          container
          item
          spacing={2}
          direction="column"
          alignItems="center"
          xs={12}
        >
          <Route exact path="/" component={Guest.Home} />
          <Route path="/book" component={Guest.Book} />
          <Route path="/track" component={Guest.Track} />
          <Route path="/admin" component={Admin.Home} />
          <Route path="/login" component={Admin.Login} />
          <Route exact path="/room/:id" component={Admin.Room} />
          <Route path="/bookings" component={Admin.Bookings} />
          <Route path="/requests" component={Admin.Requests} />
        </Grid>
      </Grid>
    </Grid>
  );
}
