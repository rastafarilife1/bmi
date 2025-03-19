const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	first_name: { type: DataTypes.STRING },
	last_name: { type: DataTypes.STRING },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	phone: { type: DataTypes.STRING, unique: true },
	role: { type: DataTypes.STRING, defaultValue: "GUEST" },
	avatar: { type: DataTypes.STRING }
})

const Room = sequelize.define('room', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.TEXT },
	type: { type: DataTypes.STRING },
	image: { type: DataTypes.STRING },
	panorama: { type: DataTypes.JSONB },
	price: { type: DataTypes.INTEGER, allowNull: false },
	capacity: { type: DataTypes.STRING },
	availability: { type: DataTypes.BOOLEAN, defaultValue: true },
	floor: { type: DataTypes.STRING }
})

const Reservation = sequelize.define('reservation', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	user_id: { type: DataTypes.INTEGER },
	room_id: { type: DataTypes.INTEGER },
	check_in_date: { type: DataTypes.DATE, allowNull: false },
	check_out_date: { type: DataTypes.DATE, allowNull: false },
	reservation_date: { type: DataTypes.DATE, allowNull: false },
	status: { type: DataTypes.STRING, allowNull: false },
	total_price: { type: DataTypes.STRING, allowNull: false },
})

const Payment = sequelize.define('payment', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	reservation_id: { type: DataTypes.INTEGER },
	amount: { type: DataTypes.INTEGER },
	payment_date: { type: DataTypes.DATE },
	payment_method: { type: DataTypes.INTEGER },
})

Room.hasMany(Reservation)
Reservation.belongsTo(Room)

User.hasMany(Reservation)
Reservation.belongsTo(User)

Reservation.hasMany(Payment)
Payment.belongsTo(Reservation)

module.exports = {
	Room, User, Reservation, Payment
}