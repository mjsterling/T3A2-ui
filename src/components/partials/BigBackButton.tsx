import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function BigBackButton() {
  const history = useHistory();
  return (
    <Button onClick={history.goBack} endIcon={<ArrowBack />}>
      Back
    </Button>
  );
}
