import { Grid } from "@material-ui/core";
import { Route } from "react-router-dom";
import Customer from "./components/customer";
import _ from "./components/partials";
import Admin from "./components/admin";

export default function App() {
  <div>
    <_.DrawerMenu />
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item></Grid>
      <Grid container spacing={1} alignItems="center" justify="space-evenly">
        <_.MenuButton />
        <_.PageHeader />
        <_.BackButton />
      </Grid>
      <Grid item>
        <Route exact path="/" component={Customer.Home} />
        <Route path="/book" component={Customer.Book} />
        <Route path="/about" component={Customer.About} />
        <Route exact path="/admin" component={Admin.Home} />
      </Grid>
    </Grid>
  </div>;
}
