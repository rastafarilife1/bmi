import { makeAutoObservable } from "mobx"
export default class UserStore {
	constructor() {
		this._isAuth = true
		this._isAdmin = true
		this._user = {}
		makeAutoObservable(this)
	}

	setIsAuth(bool) {
		this._isAuth = bool
	}
	setIsAdmin(bool) {
		this._isAdmin = bool
	}
	setUser(user) {
		this._user = user
	}

	get isAuth() {
		return this._isAuth
	}

	get isAdmin() {
		return this._isAdmin
	}

	get user() {
		return this._user
	}
}