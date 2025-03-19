import Profile from "./pages/Profile"
import Auth from "./pages/Auth"
import Booking from "./pages/Booking"
import RoomPage from "./pages/RoomPage"
import Rooms from "./pages/Rooms"
import Dashboard from "./pages/Admin/Dashboard"
import Tables from "./pages/Admin/Tables"
import Billing from "./pages/Admin/Billing"
import { PROFILE_ROUTE, BOOKING_DETAIL_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ROOM_ROUTE, ROOMS_ROUTE, ADMIN_ROUTE } from "./utils/consts"


export const authRoutes = [
	{
		path: PROFILE_ROUTE,
		Component: <Profile />
	},
	{
		path: BOOKING_DETAIL_ROUTE + '/:id',
		Component: <Booking />
	},
]

export const adminRoutes = [
	{
		path: 'dashboard',
		Component: <Dashboard />
	},
	{
		path: 'tables',
		Component: <Tables />
	},
	{
		path: 'billing',
		Component: <Billing />
	},
]

export const publicRoutes = [
	{
		path: ROOMS_ROUTE,
		Component: <Rooms />
	},
	{
		path: LOGIN_ROUTE,
		Component: <Auth />
	},
	{
		path: REGISTRATION_ROUTE,
		Component: <Auth />
	},
	{
		path: ROOM_ROUTE + '/:id',
		Component: <RoomPage />
	},
]