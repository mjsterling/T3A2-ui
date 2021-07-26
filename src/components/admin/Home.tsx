import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "state/reducers";
import actionCreators from "state/actionCreators";
import _ from "components/partials";
import { RoomItf } from "components/Interfaces";

export default function Home() {
  const dispatch = useDispatch();
  const { getRooms } = bindActionCreators(actionCreators, dispatch);
  const rooms = useSelector((state: RootState) => state.rooms);
  const roomNumbers = rooms.map((room: RoomItf) => room.number);

  if (!roomNumbers.length) getRooms();

  return (
    <>
      <_.Admin.DateSelector />
      <_.RoomCards roomNumbers={roomNumbers} />
    </>
  );
}
