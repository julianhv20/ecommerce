import { useContext } from "react";
import ShoppingContext from "../../Context";

import PropTypes from "prop-types";

const Card = ({ product }) => {
	//console.log(product);

	const {
		count,
		setCount,
		openProductDetail,
		setProductToShow,
		setCartProducts,
		cartProducts,
		openCheckout,
		closeCheckoutSideMenu,
	} = useContext(ShoppingContext);

	const showProduct = (product) => {
		closeCheckoutSideMenu();
		openProductDetail();
		setProductToShow(product);
	};

	const addToCart = () => {
		setCount(count + 1);

		const productExists = cartProducts.some((el) => el.id === product.id); // dará true si el producto ya se encuentra en el carrito

		if (productExists) {
			// valida la existencia
			const productCart = cartProducts.find((el) => el.id === product.id); // busca el producto
			productCart.quantity += 1; // aumenta la cantidad en 1
			setCartProducts([...cartProducts]); // actualiza el carrito
			console.log(cartProducts);
		} else {
			product.quantity = 1;
			setCartProducts(() => {
				return [...cartProducts, product];
			});
		}

		openCheckout();
	};

	return (
		<div className='bg-white cursor-pointer w-56 h-64 rounded-lg'>
			<figure className='relative mb-2 w-full h-3/4'>
				<span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
					{product.category}
				</span>
				<img
					className='w-full h-full object-cover rounded-lg'
					onClick={() => showProduct()}
					src={product.image}
					alt={product.title}
				/>
				<button
					className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
					onClick={() => addToCart()}>
					+
				</button>
			</figure>
			<p className='flex justify-between items-center '>
				<span className='text-xs font-light line-clamp-1 hover:line-clamp-none'>
					{product.title}
				</span>
				<span className='text-lg font-medium'>${product.price}</span>
			</p>
		</div>
	);
};

export default Card;

// PropType Validation
Card.propTypes = {
	product: PropTypes.object.isRequired,
};
