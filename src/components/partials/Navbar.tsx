import { Grid, Badge, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

export default function Navbar() {
  const history = useHistory();
  const requests = useSelector((state: RootState) => state.requests);
  const dispatch = useDispatch();
  const { getRequests } = bindActionCreators(actionCreators, dispatch);
  if (!requests) getRequests();
  const path = history.location.pathname.split("/");
  return (
    <Grid item container xs={12} justify="space-around">
      <Grid item>
        <Button
          onClick={() => history.push("/admin")}
          color={path[path.length - 1] === "admin" ? "primary" : "default"}
        >
          Home
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => history.push("/bookings")}
          color={path[path.length - 1] === "bookings" ? "primary" : "default"}
        >
          Bookings
        </Button>
      </Grid>
      <Grid item>
        {requests && requests.length ? (
          <Badge badgeContent={requests.length} color="secondary">
            <Button
              onClick={() => history.push("/requests")}
              color={
                path[path.length - 1] === "requests" ? "primary" : "default"
              }
            >
              Requests
            </Button>
          </Badge>
        ) : (
          <Button
            onClick={() => history.push("/requests")}
            color={path[path.length - 1] === "requests" ? "primary" : "default"}
          >
            Requests
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
