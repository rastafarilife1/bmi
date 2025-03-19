import { useContext } from "react";
import { Context } from "../index";
import Nav from 'react-bootstrap/Nav';
import { Button, Image } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { observer } from "mobx-react-lite";
import { PROFILE_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import logo from '../assets/logo.svg'

const NavBar = observer(() => {
	const { user } = useContext(Context)
	const navigate = useNavigate()
	return (
		<header className="bg-dark py-3">
			<Container className="d-flex justify-content-between">
				<NavLink to="/"><Image src={logo} /></NavLink>

				{user.isAuth ?
					<Nav className="ms-auto">
						<Button variant="outline-light" onClick={() => navigate(PROFILE_ROUTE)}>Профиль</Button>
						<Button variant="outline-light" className="ms-2" onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
					</Nav>
					:
					<Nav className="ms-auto">
						<Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
					</Nav>
				}
			</Container>
		</header>

	);
});

export default NavBar;