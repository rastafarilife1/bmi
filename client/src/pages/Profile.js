import React, { useContext, useState } from "react";
import { Tabs, Avatar, Button, Input, Card, List, Modal, Form, Select, DatePicker } from "antd";
import { EditOutlined, DownloadOutlined, UploadOutlined, UserOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import PaymentMethods from "../components/PaymentMethods";
import { ADMIN_ROUTE } from "../utils/consts";
import { Context } from "..";

const { TabPane } = Tabs;

const ProfilePage = () => {
	const navigate = useNavigate();
	const store = useContext(Context)
	const userStore = store.user
	const [user, setUser] = useState({
		name: "John Doe",
		email: "john.doe@gmail.com",
		phone: "+1 000-000-0000",
		address: "St 32 main downtown, Los Angeles, California, USA",
		birthdate: "01-01-1992",
		avatar: "https://randomuser.me/api/portraits/men/1.jpg",
	});
	const bookings = [
		{
			id: 1,
			hotel: "Luxury Hotel",
			checkIn: "Thur, Dec 8",
			checkOut: "Fri, Dec 9",
			time: "12:00pm",
			checkoutTime: "11:30am",
			room: "On arrival",
		},
		{
			id: 2,
			hotel: "Elite Resort",
			checkIn: "Mon, Dec 5",
			checkOut: "Tue, Dec 6",
			time: "1:00pm",
			checkoutTime: "11:00am",
			room: "On arrival",
		},
	];

	return (
		<div className="container my-5">
			{/* Cover */}
			<div className="position-relative bg-primary text-white rounded" style={{ paddingBottom: 150 }}>
				<Button
					type="default"
					icon={<UploadOutlined />}
					className="position-absolute end-0 bottom-0 m-3"
				>
					Upload new cover
				</Button>
			</div>

			{/* Profile */}
			<div className="text-center" style={{ marginTop: -36 }}>
				<Avatar size={100} src={user.avatar} className="border border-light" />
				<h2 className="mt-2">{user.name}</h2>
				<p className="text-muted">{user.email}</p>
				{userStore.isAdmin && <Button
					type="default"
					icon={<UserOutlined />}
					onClick={() => navigate(ADMIN_ROUTE)}
				>
					Admin
				</Button>}

			</div>

			{/* Tabs */}
			<Tabs defaultActiveKey="1" className="mt-4">
				<TabPane tab="Account" key="1">
					<AccountInfo user={user} setUser={setUser} />
				</TabPane>
				<TabPane tab="Bookings" key="2">
					<BookingsList bookings={bookings} />
				</TabPane>
				<TabPane tab="Payment Methods" key="3">
					<PaymentMethods />
				</TabPane>
			</Tabs>
		</div>
	);
};

// Component for user info
const AccountInfo = ({ user, setUser }) => {
	const [editingField, setEditingField] = useState(null);
	const [tempValue, setTempValue] = useState("");

	const handleEdit = (field, value) => {
		setEditingField(field);
		setTempValue(value);
	};

	const handleSave = () => {
		setUser({ ...user, [editingField]: tempValue });
		setEditingField(null);
	};

	return (
		<Card className="p-4">
			<h3>Account</h3>
			{Object.entries(user).map(([key, value]) =>
				key !== "avatar" ? (
					<div key={key} className="d-flex justify-content-between align-items-center border-bottom py-2">
						<div>
							<p className="text-muted mb-0 text-capitalize">{key.replace("_", " ")}</p>
							{editingField === key ? (
								key === "birthdate" ? (
									<DatePicker
										value={dayjs(tempValue)}
										onChange={(date, dateString) => setTempValue(dateString)}
									/>
								) : (
									<Input
										value={tempValue}
										onChange={(e) => setTempValue(e.target.value)}
										style={{ width: 200 }}
									/>
								)
							) : (
								<p className="mb-0">{key === "birthdate" ? dayjs(value).format("DD-MM-YYYY") : value}</p>
							)}
						</div>
						{editingField === key ? (
							<div>
								<Button icon={<CheckOutlined />} type="primary" onClick={handleSave} className="me-2">
									Save
								</Button>
								<Button icon={<CloseOutlined />} onClick={() => setEditingField(null)}>
									Cancel
								</Button>
							</div>
						) : (
							<Button icon={<EditOutlined />} onClick={() => handleEdit(key, value)}>
								Change
							</Button>
						)}
					</div>
				) : null
			)}
		</Card>
	);
};

// Component for Bookings
const BookingsList = ({ bookings }) => {
	return (
		<Card className="p-4">
			<h3>Bookings</h3>
			<List
				itemLayout="horizontal"
				dataSource={bookings}
				renderItem={(booking) => (
					<Card className="mb-3">
						<div className="d-flex align-items-center">
							<div className="me-3">
								<Avatar size={64} src="https://via.placeholder.com/64" />
							</div>
							<div className="flex-grow-1">
								<h5>{booking.hotel}</h5>
								<p className="mb-1">Check-In: {booking.checkIn} — Check-Out: {booking.checkOut}</p>
								<p className="mb-1">Check-in time: {booking.time} | Check-out: {booking.checkoutTime}</p>
								<p className="mb-1">Room: {booking.room}</p>
							</div>
							<Button type="primary" icon={<DownloadOutlined />}>Download Ticket</Button>
						</div>
					</Card>
				)}
			/>
		</Card>
	);
};



export default ProfilePage;
