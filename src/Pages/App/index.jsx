import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingProvider } from "../../Context";

import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import NotFound from "../NotFound";
import SignIn from "../SignIn";

import "./App.css";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

const AppRoutes = () => {
	let routes = useRoutes([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/:category",
			element: <Home />,
		},

		{
			path: "/my-account",
			element: <MyAccount />,
		},
		{
			path: "/my-orders",
			element: <MyOrders />,
		},
		{
			path: "/my-orders/last",
			element: <MyOrder />,
		},
		{
			path: "/my-orders/:id",
			element: <MyOrder />,
		},
		{
			path: "/my-order",
			element: <MyOrder />,
		},
		{
			path: "/sign-in",
			element: <SignIn />,
		},
		{
			path: "/*",
			element: <NotFound />,
		},
	]);

	return routes;
};

function App() {
	return (
		<ShoppingProvider>
			<BrowserRouter>
				<AppRoutes />
				<Navbar />
				<CheckoutSideMenu />
			</BrowserRouter>
		</ShoppingProvider>
	);
}

export default App;
