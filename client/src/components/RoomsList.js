import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import RoomsItem from "./RoomsItem";

const RoomsList = observer(() => {
	const { rooms } = useContext(Context)

	return (
		<Row className="d-flex gap-4">
			{rooms.rooms.map((room) => (
				<RoomsItem key={room.id} room={room} />
			))}
		</Row>
	);
});
export default RoomsList;