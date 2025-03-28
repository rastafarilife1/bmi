import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

function Auth() {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ minHeight: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className="p-5">
				<h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						className="mt-3"
						placeholder="Введите ваш Email..."
					/>
					<Form.Control
						className="mt-3"
						placeholder="Введите ваш пароль..."
					/>
					<Row className="d-flex justify-content-between mt-3 px-3">
						{isLogin ?
							<div style={{ width: 'auto', padding: 0 }}>
								Нет акккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
							</div>
							:
							<div style={{ width: 'auto', padding: 0 }}>
								Есть акккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
							</div>
						}



						<Button
							className="align-self-end"
							variant="outline-success"
							style={{ width: 'auto' }}
						>
							{isLogin ? 'Войти' : 'Регистрация'}
						</Button>



					</Row>

				</Form>
			</Card>
		</Container>
	);
}

export default Auth;