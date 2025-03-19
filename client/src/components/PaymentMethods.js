import React, { useState } from "react";
import { Button, Input, Card, Modal, Form, Select } from 'antd'
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

function PaymentMethods() {
	const [cards, setCards] = useState([
		{ id: 1, number: "4321", exp: "02/27", type: "Visa" },
	]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const addCard = (values) => {
		setCards([...cards, { id: cards.length + 1, ...values }]);
		setIsModalOpen(false);
	};

	return (
		<Card className="p-4">
			<h3>Payment Methods</h3>
			<div className="d-flex gap-3 flex-wrap justify-content-start align-items-stretch">
				{cards.map((card) => (
					<Card key={card.id} className="p-3" style={{ width: 250 }}>
						<h5>**** {card.number}</h5>
						<p>Valid Thru: {card.exp}</p>
						<p>{card.type}</p>
					</Card>
				))}
				<Card
					className="p-3 text-center d-flex align-items-center justify-content-center"
					style={{ width: 250, cursor: "pointer", borderStyle: "dashed" }}
					onClick={() => setIsModalOpen(true)}
				>
					<PlusOutlined style={{ fontSize: 24 }} />
					<p>Add a new card</p>
				</Card>
			</div>

			{/* Modal for Adding a New Card */}
			<Modal
				title="Add a new Card"
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				footer={null}
			>
				<Form layout="vertical" onFinish={addCard}>
					<Form.Item label="Card Number" name="number" rules={[{ required: true }]}>
						<Input placeholder="1234 5678 9012 3456" />
					</Form.Item>
					<div className="d-flex gap-3 justify-content-start align-items-stretch">
						<Form.Item label="Exp Date" name="exp" rules={[{ required: true }]}>
							<Input placeholder="MM/YY" />
						</Form.Item>
						<Form.Item label="CVC" name="cvc" rules={[{ required: true }]}>
							<Input placeholder="123" />
						</Form.Item>
					</div>
					<Form.Item label="Name on Card" name="name" rules={[{ required: true }]}>
						<Input placeholder="John Doe" />
					</Form.Item>
					<Form.Item label="Country or Region" name="country" rules={[{ required: true }]}>
						<Select placeholder="Select country">
							<Option value="USA">United States</Option>
							<Option value="UK">United Kingdom</Option>
							<Option value="Canada">Canada</Option>
						</Select>
					</Form.Item>
					<Button type="primary" htmlType="submit" block>
						Add Card
					</Button>
				</Form>
			</Modal>
		</Card>
	);
}

export default PaymentMethods;