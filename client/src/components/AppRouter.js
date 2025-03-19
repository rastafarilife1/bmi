import { Routes, Route, Redirect } from 'react-router-dom'
import { authRoutes, adminRoutes, publicRoutes } from '../routes';
import Rooms from '../pages/Rooms';
import { useContext } from 'react';
import { Context } from '../index';
import Main from './Admin/layout/Main';
import { ADMIN_ROUTE } from '../utils/consts';
import Dashboard from '../pages/Admin/Dashboard'

function AppRouter() {
	const { user } = useContext(Context)

	return (
		<Routes>
			{user.isAdmin && <Route path={ADMIN_ROUTE} element={<Main />}>
				{adminRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={Component} />
				))}
				<Route path='*' element={<Dashboard />} index />
			</Route>}
			{user.isAuth && authRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={Component} />
			))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={Component} />
			))}
			<Route path="*" element={<Rooms />} />
		</Routes>
	);
}

export default AppRouter;