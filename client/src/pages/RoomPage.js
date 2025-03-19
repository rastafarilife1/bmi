import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import shareIcon from '../assets/share.svg'
import { BOOKING_DETAIL_ROUTE } from "../utils/consts";
import { useState, useMemo } from "react";
import { Modal } from "antd";

import View360, { CubemapProjection } from "@egjs/react-view360";

import front from '../assets/panorama/front.jpg';
import back from '../assets/panorama/back.jpg';
import left from '../assets/panorama/left.jpg';
import right from '../assets/panorama/right.jpg';
import up from '../assets/panorama/up.jpg';
import down from '../assets/panorama/down.jpg';

function Cubemap() {
	const projection = useMemo(() => new CubemapProjection({
		src: [
			right, // Правая
			left, // Левая
			up, // Верхняя
			down, // Нижняя
			front, // Передняя
			back, // Задняя
		]
	}), []);

	return <View360 className="is-16by9 w-100 h-100" projection={projection} autoResize={true} canvasClass="w-100 h-100" />
}

function RoomPage() {
	const navigate = useNavigate();
	const room = { "id": 2, "title": "12 pro awdwad", "description": "gythy", "type": "type 1", "image": "http://localhost:5000/45df5e19-2b72-4987-bbba-a5edc1ee9f45.jpg", "price": 100000, "capacity": "3", "availability": true, "floor": null, "createdAt": "2025-02-10T07:40:56.413Z", "updatedAt": "2025-02-10T07:40:56.413Z" }
	const [isModalOpen, setIsModalOpen] = useState(false);



	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<Container className="my-3">
			<Row className="mb-4 d-flex align-items-center">
				<Col md={9} className="">
					<h1 className="fw-bold fs-3">{room.title}</h1>
					<div className="">
						Type: <span className="fw-medium ">{room.type}</span>, Capacity: <span className="fw-medium ">{room.capacity}</span>
					</div>

				</Col>
				<Col md={3} className="d-flex align-items-end flex-column gap-1">
					<div style={{ fontWeight: 700, color: '#FF8682' }}><span style={{ fontSize: 24 }}>${room.price}</span>/night</div>
					<div className="d-flex gap-1">
						<Button
							className="p-3 fw-semibold"
							style={{
								borderColor: '#8DD3BB',
								cursor: 'pointer'
							}}
							variant=""
							onClick={() => navigate('/')}
						>
							<Image src={shareIcon} />
						</Button>
						<Button
							className="p-3 fw-semibold"
							style={{
								minWidth: 150,
								background: '#8DD3BB',
								cursor: 'pointer'
							}}
							variant=""
							onClick={() => navigate(BOOKING_DETAIL_ROUTE + '/' + room.id)}
						>
							Book now
						</Button>
					</div>

				</Col>
			</Row>

			<div className="rounded-4 overflow-hidden mb-5" style={{ position: 'relative' }}>
				<Row style={{ marginTop: -12, marginBottom: -12 }}>
					<Col md='6' className="p-1">
						<div style={{ position: 'relative', paddingBottom: '80%' }}>
							<Image
								src={room.image}
								style={{
									position: 'absolute',
									left: 0,
									top: 0,
									width: '100%',
									height: '100%',
									objectFit: 'cover'
								}}
							/>
						</div>

					</Col>
					<Col md='6'>
						<Row>
							<Col md='6' className="p-1">
								<div style={{ position: 'relative', paddingBottom: '80%' }}>
									<Image
										src={room.image}
										style={{
											position: 'absolute',
											left: 0,
											top: 0,
											width: '100%',
											height: '100%',
											objectFit: 'cover'
										}}
									/>
								</div>
							</Col>
							<Col md='6' className="p-1">
								<div style={{ position: 'relative', paddingBottom: '80%' }}>
									<Image
										src={room.image}
										style={{
											position: 'absolute',
											left: 0,
											top: 0,
											width: '100%',
											height: '100%',
											objectFit: 'cover'
										}}
									/>
								</div>
							</Col>
							<Col md='6' className="p-1">
								<div style={{ position: 'relative', paddingBottom: '80%' }}>
									<Image
										src={room.image}
										style={{
											position: 'absolute',
											left: 0,
											top: 0,
											width: '100%',
											height: '100%',
											objectFit: 'cover'
										}}
									/>
								</div>
							</Col>
							<Col md='6' className="p-1">
								<div style={{ position: 'relative', paddingBottom: '80%' }}>
									<Image
										src={room.image}
										style={{
											position: 'absolute',
											left: 0,
											top: 0,
											width: '100%',
											height: '100%',
											objectFit: 'cover'
										}}
									/>
								</div>
							</Col>

						</Row>
					</Col>
				</Row>
				<Button
					className="p-3 fw-semibold"
					style={{
						position: 'absolute',
						bottom: 20,
						right: 20,
						minWidth: 150,
						background: '#8DD3BB',
						cursor: 'pointer'
					}}
					variant=""
					onClick={showModal}
				>
					View 360°
				</Button>
				<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000}>
					<div style={{ position: 'relative', height: 500 }}>

						<Cubemap />
					</div>
				</Modal>
			</div>
			<hr className="mb-5" />
			<div className="mb-5">
				<h4 className="fw-bold mb-3" style={{ fontSize: 20 }}>Overview</h4>
				<p>
					{room.description}
				</p>
			</div>
			<hr className="mb-5" />

		</Container>
	);
}




export default RoomPage;

