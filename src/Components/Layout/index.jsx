import PropTypes from "prop-types";

const Layout = ({ children }) => {
	return <div className='flex flex-col items-center mt-20'>{children}</div>;
};

export default Layout;

//PropType Validation
Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
