import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
	const [count, setCount] = useState(0);
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const [productToShow, setProductToShow] = useState({});

	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
	const [cartProducts, setCartProducts] = useState([]);
	const [order, setOrder] = useState([]);

	const [searchProduct, setSearchProduct] = useState("");

	const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const openProductDetail = () => {
		setIsProductDetailOpen(true);
	};
	const closeProductDetail = () => {
		setIsProductDetailOpen(false);
	};

	const openCheckout = () => {
		setIsCheckoutOpen(true);
	};
	const closeCheckout = () => {
		setIsCheckoutOpen(false);
	};

	return (
		<ShoppingContext.Provider
			value={{
				count,
				setCount,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				productToShow,
				setProductToShow,
				cartProducts,
				setCartProducts,
				isCheckoutOpen,
				openCheckout,
				closeCheckout,
				order,
				setOrder,
				products,
				setProducts,
				searchProduct,
				setSearchProduct,
			}}>
			{children}
		</ShoppingContext.Provider>
	);
};

export default ShoppingContext;

// PropType Validation
ShoppingProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
