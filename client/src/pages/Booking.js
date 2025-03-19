import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import PaymentMethods from "../components/PaymentMethods";
const { RangePicker } = DatePicker;

function Booking() {
	const booked = false;
	const room = { "id": 2, "title": "12 pro awdwad", "description": "gythy", "type": "type 1", "image": "http://localhost:5000/45df5e19-2b72-4987-bbba-a5edc1ee9f45.jpg", "price": 100000, "capacity": "3", "availability": true, "floor": null, "createdAt": "2025-02-10T07:40:56.413Z", "updatedAt": "2025-02-10T07:40:56.413Z" }

	const disabledDate = (current) => {
		return current < dayjs().startOf('day');
	};
	return (
		<Container className="my-3">
			{!booked ?
				<Row>
					<Col md={8}>
						<Card className="shadow-sm p-4 mb-4 border-0 rounded-4">
							<div className="d-flex justify-content-between align-items-center gap-3 mb-3">
								<h3 className="fw-semibold">{room.title}</h3>
								<div style={{ fontWeight: 700, color: '#FF8682' }}><span style={{ fontSize: 24 }}>${room.price}</span>/night</div>
							</div>
							<RangePicker
								disabledDate={disabledDate}
								format={'DD.MM'}
								placeholder={["Check-In", "Check-Out"]}
							/>
						</Card>

						<Card className="shadow-sm p-4 border-0 rounded-4">
							<PaymentMethods />
						</Card>
					</Col>
					<Col md={4}>
						<Card className="shadow-sm p-4 border-0 rounded-4">
							<Row>
								<Col md={3} >
									<img className="rounded overflov-hidden" src={room.image} alt={room.title} />
								</Col>
								<Col md={9}>
									<h5>
										{room.title}
									</h5>
									<div className="">
										Type: <span className="fw-medium ">{room.type}</span>, Capacity: <span className="fw-medium ">{room.capacity}</span>
									</div>
								</Col>
							</Row>
							<hr />
							<div>
								<h5>Price Details</h5>
								<Table>
									<tbody>
										<tr>
											<td>Base Fare</td>
											<td style={{ textAlign: 'end' }}>$240</td>
										</tr>
										<tr>
											<td>Discount</td>
											<td style={{ textAlign: 'end' }}>$0</td>
										</tr>
										<tr>
											<td>Taxes</td>
											<td style={{ textAlign: 'end' }}>$20</td>
										</tr>
										<tr>
											<td>Service Fee</td>
											<td style={{ textAlign: 'end' }}>$5</td>
										</tr>
										<tr>
											<td colSpan={2}><hr /></td>
										</tr>
										<tr>
											<td>Total</td>
											<td style={{ textAlign: 'end' }}>$265</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card>
					</Col>
				</Row>
				:
				's'
			}

		</Container>
	);
}

export default Booking;