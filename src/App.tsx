import { Grid } from "@material-ui/core";
import { Route } from "react-router-dom";
import Customer from "./components/customer";
import Admin from "./components/admin";
import _ from "./components/partials";

export default function App() {
  return (
    <div>
      <_.DrawerMenu />
      <Grid container spacing={2} direction="column" alignItems="center">
        <_.PageHeader />
        <Grid item>
          <Route exact path="/" component={Customer.Home} />
          <Route path="/book" component={Customer.Book} />
          <Route path="/about" component={Customer.About} />
          <Route exact path="/admin" component={Admin.Home} />
        </Grid>
      </Grid>
    </div>
  );
}
