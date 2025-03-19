const uuid = require('uuid')
const path = require('path')

const { Room } = require('../models/models')
const ApiError = require('../error/ApiError')
const { where } = require('sequelize')


class RoomController {
	async create(req, res, next) {
		try {
			const { title, description, type, price, capacity, availability, floor } = req.body
			const { img, panoLeft, panoRight, panoFront, panoBack, panoDown, panoUp } = req.files

			let imgFileName = ''
			if (img) {
				imgFileName = uuid.v4() + '.jpg'
				img.mv(path.resolve(__dirname, '..', 'static', imgFileName))
			}

			let panorama = {}

			if (panoLeft && panoRight && panoFront && panoBack && panoDown && panoUp) {
				//Left
				let panoLeftFileName = uuid.v4() + '.jpg'
				panoLeft.mv(path.resolve(__dirname, '..', 'static', panoLeftFileName))
				//Right
				let panoRightFileName = uuid.v4() + '.jpg'
				panoRight.mv(path.resolve(__dirname, '..', 'static', panoRightFileName))
				//Front
				let panoFrontFileName = uuid.v4() + '.jpg'
				panoFront.mv(path.resolve(__dirname, '..', 'static', panoFrontFileName))
				//Back
				let panoBackFileName = uuid.v4() + '.jpg'
				panoBack.mv(path.resolve(__dirname, '..', 'static', panoBackFileName))
				//Down
				let panoDownFileName = uuid.v4() + '.jpg'
				panoDown.mv(path.resolve(__dirname, '..', 'static', panoDownFileName))
				//Up
				let panoUpFileName = uuid.v4() + '.jpg'
				panoUp.mv(path.resolve(__dirname, '..', 'static', panoUpFileName))

				panorama = {
					left: panoLeftFileName,
					right: panoRightFileName,
					front: panoFrontFileName,
					back: panoBackFileName,
					down: panoDownFileName,
					up: panoUpFileName,
				};
			}

			const room = await Room.create({ title: title, description, type, price, capacity, availability, floor, image: imgFileName, panorama: panorama })

			return res.json(room)
		} catch (e) {
			return next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res) {
		let { limit, page } = req.query
		page = page || 1
		limit = limit || 9
		let offset = page * limit - limit

		let rooms = await Room.findAndCountAll({ limit, offset })
		return res.json(rooms)
	}

	async getOne(req, res) {
		const { id } = req.params
		const room = await Room.findOne(
			{
				where: { id },
			},
		)
		return res.json(room)
	}
}

module.exports = new RoomController