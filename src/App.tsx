import { Grid, makeStyles } from "@material-ui/core";
import { Route } from "react-router-dom";
import Guest from "./components/guest";
import Admin from "./components/admin";
import _ from "./components/partials";

const useStyles = makeStyles({
  app: {
    margin: "4%",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <_.Logo />
        <Grid item xs={12}>
          <Route exact path="/" component={Guest.Home} />
          <Route path="/book" component={Guest.Book} />
          <Route path="/admin" component={Admin.Home} />
        </Grid>
      </Grid>
    </div>
  );
}
