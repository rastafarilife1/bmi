import {
	Row,
	Col,
	Card,
	Table,
	Button,
	Avatar,
	Typography,
} from "antd";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import face2 from "../../assets/images/face-2.jpg";
import face3 from "../../assets/images/face-3.jpg";

const { Title } = Typography;

// table code start
const columns = [
	{
		title: "ROOM",
		dataIndex: "name",
		key: "name",
		width: "32%",
	},
	{
		title: "TYPE",
		dataIndex: "type",
		key: "type",
	},

	{
		title: "PRICE",
		key: "price",
		dataIndex: "price",
	},
	{
		title: "CAPACITY",
		key: "capacity",
		dataIndex: "capacity",
	},
];

const data = [
	{
		key: "1",
		name: (
			<>
				<Avatar.Group>
					<Avatar
						className="shape-avatar"
						shape="square"
						size={40}
						src={face2}
					></Avatar>
					<div className="avatar-info">
						<Title level={5}>Michael John</Title>
						<p>michael@mail.com</p>
					</div>
				</Avatar.Group>{" "}
			</>
		),
		type: (
			<>
				<div className="author-info">
					<Title level={5}>Manager</Title>
					<p>Organization</p>
				</div>
			</>
		),

		price: (
			<>
				<Button type="primary" className="tag-primary">
					ONLINE
				</Button>
			</>
		),
		capacity: (
			<>
				<div className="ant-employed">
					<span>23/04/18</span>
					<Button
						type="dashed"
						className=""
						icon={<EditOutlined />}
					>
						Edit
					</Button>
				</div>
			</>
		),
	},

	{
		key: "2",
		name: (
			<>
				<Avatar.Group>
					<Avatar
						className="shape-avatar"
						shape="square"
						size={40}
						src={face3}
					></Avatar>
					<div className="avatar-info">
						<Title level={5}>Alexa Liras</Title>
						<p>alexa@mail.com</p>
					</div>
				</Avatar.Group>{" "}
			</>
		),
		type: (
			<>
				<div className="author-info">
					<Title level={5}>Programator</Title>
					<p>Developer</p>
				</div>
			</>
		),

		price: (
			<>
				<Button className="tag-badge">ONLINE</Button>
			</>
		),
		capacity: (
			<>
				<div className="ant-employed">
					<span>23/12/20</span>
					<Button
						type="dashed"
						className=""
						icon={<EditOutlined />}
					>
						Edit
					</Button>
				</div>
			</>
		),
	},
];

function Tables() {

	return (
		<>
			<div className="tabled">
				<Row gutter={[24, 0]}>
					<Col xs="24" xl={24}>
						<Card
							bordered={false}
							className="criclebox tablespace mb-24"
							title="Rooms"
							extra={
								<>
									<Button
										type="dashed"
										className="ant-full-box"
										icon={<PlusOutlined />}
									>
										Add Room
									</Button>

								</>
							}
						>
							<div className="table-responsive">
								<Table
									columns={columns}
									dataSource={data}
									pagination={false}
									className="ant-border-space"
								/>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Tables;
