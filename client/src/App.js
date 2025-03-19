import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
