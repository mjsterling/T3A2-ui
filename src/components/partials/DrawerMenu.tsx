import {
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import _ from "./";

export default function DrawerMenu() {
  const menuOpen = useSelector((state: RootState) => state.menuOpen);
  const dispatch = useDispatch();
  const { toggleMenu } = bindActionCreators(actionCreators, dispatch);
  return (
    <Drawer open={menuOpen}>
      <List>
        <ListItem>
          <IconButton onClick={() => toggleMenu()} color="secondary">
            <Close />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemText primary="Hello World!" />
        </ListItem>
      </List>
      <Divider />
      <_.Notifications />
    </Drawer>
  );
}
