import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

export default function MenuButton() {
  const dispatch = useDispatch();
  const { toggleMenu } = bindActionCreators(actionCreators, dispatch);

  return (
    <IconButton onClick={toggleMenu}>
      <Menu />
    </IconButton>
  );
}
