import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";

const SideBar = observer(() => {
	const { rooms } = useContext(Context)

	return (
		<aside>
			<h3
				className="fw-semibold"
			>
				Filters
			</h3>
			<h6>Type</h6>
			<ListGroup className="mb-4" as="ul">
				{rooms.types.map((type) => (
					<ListGroup.Item
						style={{ cursor: 'pointer' }}
						as="li"
						active={type.id === rooms.selectedType.id}
						key={type.id}
						onClick={() => rooms.setSelectedType(type)}
					>
						{type.name}
					</ListGroup.Item>
				))}
			</ListGroup>

			<h6>Capacity</h6>
			<ListGroup className="mb-4" as="ul">

				{rooms.capacities.map((capacity) => (
					<ListGroup.Item
						style={{ cursor: 'pointer' }}
						as="li"
						active={capacity.id === rooms.selectedCapacity.id}
						key={capacity.id}
						onClick={() => rooms.setSelectedCapacity(capacity)}
					>
						{capacity.name}
					</ListGroup.Item>
				))}
			</ListGroup>
		</aside>

	);
});

export default SideBar;