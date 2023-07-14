import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ to, activeStyle, navbarName }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? activeStyle : undefined)}>
			{navbarName}
		</NavLink>
	);
};

export default NavItem;

//PropType Validation
NavItem.propTypes = {
	to: PropTypes.string.isRequired,
	activeStyle: PropTypes.string.isRequired,
	navbarName: PropTypes.string.isRequired,
};
