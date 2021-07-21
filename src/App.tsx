import { Grid, makeStyles, Theme } from "@material-ui/core";
import { Route } from "react-router-dom";
import Customer from "./components/customer";
import Admin from "./components/admin";
import _ from "./components/partials";

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    margin: "4%",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <_.DrawerMenu />
      <Grid container spacing={2} direction="column" alignItems="center">
        <_.PageHeader />
        <Grid item xs={12}>
          <Route exact path="/" component={Customer.Home} />
          <Route path="/book" component={Customer.Book} />
          <Route path="/about" component={Customer.About} />
          <Route exact path="/admin" component={Admin.Home} />
        </Grid>
      </Grid>
    </div>
  );
}
