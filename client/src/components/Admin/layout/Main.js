import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ }) {
	const [visible, setVisible] = useState(false);
	const [sidenavColor, setSidenavColor] = useState("#1890ff");
	const [sidenavType, setSidenavType] = useState("transparent");
	const [fixed, setFixed] = useState(false);

	const openDrawer = () => setVisible(!visible);
	const handleSidenavType = (type) => setSidenavType(type);
	const handleSidenavColor = (color) => setSidenavColor(color);
	const handleFixedNavbar = (type) => setFixed(type);

	let { pathname } = useLocation();
	pathname = pathname.replace("/", "");


	return (
		<Layout className={`layout-dashboard ${pathname === "profile" ? "layout-profile" : ""}`} >
			<Drawer
				title={false}
				closable={false}
				onClose={() => setVisible(false)}
				width={250}
				className={`drawer-sidebar`}
			>
				<Layout
					className={`layout-dashboard`}
				>
					<Sider
						trigger={null}
						width={250}
						theme="light"
						className={`sider-primary ant-layout-sider-primary ${sidenavType === "#fff" ? "active-route" : ""
							}`}
						style={{ background: sidenavType }}
					>
						<Sidenav color={sidenavColor} />
					</Sider>
				</Layout>
			</Drawer>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
				trigger={null}
				width={250}
				theme="light"
				className={`sider-primary ant-layout-sider-primary ${sidenavType === "#fff" ? "active-route" : ""
					}`}
				style={{ background: sidenavType }}
			>
				<Sidenav color={sidenavColor} />
			</Sider>
			<Layout>
				<Content className="content-ant pt-3">
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
}

export default Main;
