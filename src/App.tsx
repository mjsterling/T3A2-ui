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
    height: "100vh",
    opacity: "0.24",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <img
        className={classes.background}
        alt="background"
        src={images.elmPhotos[3]}
      />
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12} md={4}>
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
        </Grid>
      </Grid>
    </>
  );
}
