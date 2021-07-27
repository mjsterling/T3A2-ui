import { Grid, Typography } from "@material-ui/core";
import { BookingRequest } from "components/Interfaces";
import _ from "components/partials";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

export default function Requests() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const requests = useSelector((state: RootState) => state.requests);
  const dispatch = useDispatch();
  const { getRequests } = bindActionCreators(actionCreators, dispatch);
  if (!localStorage.getItem("jwt")) history.push("/login");
  if (!requests) getRequests();
  if (!requests) return null;

  const RequestComponents = () =>
    requests
      .filter((request: BookingRequest) =>
        new RegExp(searchQuery).test(Object.values(request).join(""))
      )
      .sort((a: BookingRequest, b: BookingRequest) =>
        moment(a.created_at).isAfter(moment(b.created_at)) ? 1 : -1
      )
      .map((request: BookingRequest) => (
        <_.Admin.BookingAccordion request={request} />
      ));

  return (
    <>
      <_.Navbar />
      <Grid item>
        <Typography variant="h6" component="h1">
          Active Requests
        </Typography>
      </Grid>
      <_.LiveSearch value={searchQuery} onChange={setSearchQuery} />
      <Grid item container xs={12} spacing={1} direction="column">
        <RequestComponents />
      </Grid>
    </>
  );
}
