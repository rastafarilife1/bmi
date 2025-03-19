import { makeAutoObservable } from "mobx"
export default class RoomStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Type 1' },
			{ id: 2, name: 'Type 2' },
			{ id: 3, name: 'Type 3' },
			{ id: 4, name: 'Type 4' },
		]
		this._selectedType = {}
		this._capacities = [
			{ id: 1, name: '1' },
			{ id: 2, name: '2' },
			{ id: 3, name: '3' },
			{ id: 4, name: '4' },
		]
		this._selectedCapacity = {}
		this._rooms = [
			{ "id": 1, "title": "Уютный номер с панорамными окнами", "description": "Просторный и светлый номер, идеально подходящий для комфортного отдыха и работы. Интерьер выполнен в современном стиле с использованием натуральных оттенков. В номере большая двуспальная кровать, мягкий диван, рабочая зона, телевизор и кондиционер. Просторная ванная комната оснащена всем необходимым: душевой кабиной, феном и туалетно-косметическими принадлежностями.\\nИз окон открывается приятный вид на город. Отличный выбор для пар или гостей, ценящих комфорт и уют.", "type": "Стандарт", "image": "http://localhost:5000/197cb3f4-154f-40fb-87fe-b992f5fd95b7.jpg", "panorama": { "up": "http://localhost:5000/561d0996-329b-4699-bad5-a07922cda180.jpg", "back": "http://localhost:5000/13bae33c-687d-4b86-bd25-b39e4409eaaf.jpg", "down": "http://localhost:5000/00ee8e79-fd8f-4788-8b1d-a5410bc46ff5.jpg", "left": "http://localhost:5000/44e9cde7-fc20-4ca2-a57f-a52284e91c35.jpg", "front": "http://localhost:5000/d744fc88-8cf2-453b-a426-6fcc07db4cee.jpg", "right": "http://localhost:5000/2d1db9dc-34bd-4e23-8f60-1942f618d657.jpg" }, "price": 50, "capacity": "2", "availability": true, "floor": null, "createdAt": "2025-03-19T07:05:47.689Z", "updatedAt": "2025-03-19T07:05:47.689Z" },
			{ "id": 3, "title": "42 pro fdd", "description": "awd", "type": "type 2", "image": "http://localhost:5000/95d80006-c42c-4504-bf14-f20bb9ccf208.jpg", "price": 240, "capacity": "3", "availability": true, "floor": null, "createdAt": "2025-02-17T10:53:46.568Z", "updatedAt": "2025-02-17T10:53:46.568Z" }
		]
		makeAutoObservable(this)
	}

	setRooms(rooms) {
		this._rooms = rooms
	}
	setTypes(types) {
		this._types = types
	}
	setSelectedType(type) {
		this._selectedType = type
	}
	setCapacities(capacities) {
		this._capacities = capacities
	}
	setSelectedCapacity(capacity) {
		this._selectedCapacity = capacity
	}

	get rooms() {
		return this._rooms
	}
	get types() {
		return this._types
	}
	get selectedType() {
		return this._selectedType
	}
	get capacities() {
		return this._capacities
	}

	get selectedCapacity() {
		return this._selectedCapacity
	}
}