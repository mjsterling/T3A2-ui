import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function BackButton() {
  const history = useHistory();
  return (
    <IconButton
      style={{ position: "fixed", top: "2%", left: "2%" }}
      onClick={() => history.goBack()}
    >
      <ArrowBack />
    </IconButton>
  );
}
