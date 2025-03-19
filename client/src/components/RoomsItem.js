import { Card, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { ROOM_ROUTE } from "../utils/consts";

function RoomsItem({ room }) {
	const navigate = useNavigate();
	console.log(room);


	return (
		<Col md={12}>
			<Card className="rounded-4 overflow-hidden">
				<Row>
					<Col md={4} onClick={() => navigate(ROOM_ROUTE + '/' + room.id)} style={{ cursor: 'pointer' }}>
						<div style={{ position: 'relative', paddingBottom: '100%' }}>
							<img style={{
								position: 'absolute',
								left: 0,
								top: 0,
								width: '100%',
								height: '100%',
								objectFit: 'cover'
							}}
								src={room.image}
								alt=""
							/>
						</div>

					</Col>
					<Col md={8}>
						<div className="p-4 ps-0 d-flex flex-column justify-content-between align-items-stretch" style={{ height: '100%' }} >
							<div>
								<h4 className="fw-bold" onClick={() => navigate(ROOM_ROUTE + '/' + room.id)} style={{ cursor: 'pointer' }}>{room.title}</h4>
								<div>{room.type}</div>
								<div>Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel...</div>
								<div style={{ fontWeight: 700, color: '#FF8682' }}><span style={{ fontSize: 24 }}>${room.price}</span>/night</div>
							</div>

							<div>
								<hr />

								<Button
									className="p-3 fw-semibold"
									style={{
										width: '100%',
										background: '#8DD3BB',
										cursor: 'pointer'
									}}
									variant=""
									onClick={() => navigate(ROOM_ROUTE + '/' + room.id)}
								>
									View Place
								</Button>
							</div>
						</div>

					</Col>
				</Row>



			</Card>
		</Col>
	);
}

export default RoomsItem;