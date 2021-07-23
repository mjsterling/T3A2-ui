import {
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Drawer,
  Hidden,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "state/actionCreators";
import { RootState } from "state/reducers";
import Notifications from ".";

export default function DrawerMenu() {
  const menuOpen = useSelector((state: RootState) => state.menuOpen);
  const dispatch = useDispatch();
  const { closeMenu } = bindActionCreators(actionCreators, dispatch);
  const MenuList = (
    <List>
      <ListItem>
        <ListItemText primary="Hello World!" />
      </ListItem>
      <Divider />
    </List>
  );
  return (
    <div>
      <Hidden xsDown>
        <Drawer open variant="persistent" anchor="left">
          {MenuList}
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer open={menuOpen} anchor="top">
          <IconButton onClick={closeMenu} color="secondary">
            <Close />
          </IconButton>
          {MenuList}
        </Drawer>
      </Hidden>
    </div>
  );
}
