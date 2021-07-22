import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "state";

export default function MenuButton() {
  const dispatch = useDispatch();
  const { openMenu } = bindActionCreators(actionCreators, dispatch);

  return (
    <IconButton onClick={openMenu}>
      <Menu />
    </IconButton>
  );
}
