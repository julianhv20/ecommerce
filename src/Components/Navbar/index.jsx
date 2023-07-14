import { useContext } from "react";
import ShoppingContext from "../../Context";

import NavItem from "../NavItem";

const navItemsLeft = [
	{ name: "Shopi", to: "/" },
	{ name: "All", to: "/" },
	{ name: "Clothes", to: "/clothing" },
	{ name: "Electronics", to: "/electronics" },
	{ name: "jewelery", to: "/jewelery" },
];

const navItemsRight = [{ to: "/my-orders", name: "My Orders" }];

const Navbar = () => {
	const activeStyle = "underline underline-offset-4";

	const { count } = useContext(ShoppingContext);

	return (
		<nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
			<ul className='flex items-center gap-3'>
				{navItemsLeft.map((item) => (
					<li
						key={item.name}
						className='first:font-semibold first:text-lg'>
						<NavItem
							to={item.to}
							className={item.className}
							navbarName={item.name}
							activeStyle={activeStyle}
						/>
					</li>
				))}
			</ul>

			<ul className='flex items-center gap-3'>
				{navItemsRight.map((item) => (
					<li key={item.name}>
						<NavItem
							//key={item.name}
							to={item.to}
							className={item.className}
							navbarName={item.name}
							activeStyle={activeStyle}
						/>
					</li>
				))}
				<li className='font-semibold text-sm'>🛒{count}</li>
			</ul>
		</nav>
	);
};

export default Navbar;
