import { Grid } from "@material-ui/core";
import { BookingRequest } from "components/Interfaces";
import _ from "components/partials";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";

export default function Requests() {
  const [searchQuery, setSearchQuery] = useState("");
  const requests = useSelector((state: RootState) => state.requests);
  const dispatch = useDispatch();
  const { getRequests } = bindActionCreators(actionCreators, dispatch);
  if (!requests.length) getRequests();
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
    <Grid container direction="column" alignItems="center" spacing={1}>
      <_.LiveSearch value={searchQuery} onChange={setSearchQuery} />
      <RequestComponents />
    </Grid>
  );
}
