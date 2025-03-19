import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import RoomsList from "../components/RoomsList";

function Rooms() {
	return (
		<Container className="my-3">
			<Row style={{ minHeight: window.innerHeight - 54 }}>
				<Col md={3}>
					<SideBar />
				</Col>
				<Col md={9} className="d-flex gap-3 flex-column align-items-stretch justify-content-start">
					<Row className="d-flex gap-1 align-items-center">
						<Col style={{ fontWeight: 600 }}>
							Showing 4 of <span style={{ color: '#FF8682' }}> 257 places </span>
						</Col>
						<Col className="d-flex gap-2 align-items-center justify-content-end">
							Sort by
							<select
								className="form-select"
								style={{
									width: 'auto',
									border: 'none',
									padding: '0 20px 0 0',
									backgroundPosition: 'right 0 center',
									fontWeight: 600,
								}}
							>
								<option defaultValue="0">Recommended</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</Col>
					</Row>
					<RoomsList />

				</Col>
			</Row>
		</Container>
	);
}

export default Rooms;