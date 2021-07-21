import {
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { RootState } from "../../redux/reducers";
import _ from "./";

export default function DrawerMenu() {
  const menuOpen = useSelector((state: RootState) => state.menuOpen);
  const dispatch = useDispatch();
  const { openMenu, closeMenu } = bindActionCreators(actionCreators, dispatch);
  return (
    <SwipeableDrawer
      open={menuOpen}
      onClose={() => closeMenu}
      onOpen={() => openMenu}
    >
      <List>
        <ListItem>
          <ListItemText primary="Hello World!" />
        </ListItem>
      </List>
      <Divider />
      <_.Notifications />
    </SwipeableDrawer>
  );
}
