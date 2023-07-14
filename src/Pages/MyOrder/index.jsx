import { useContext } from "react";
import ShoppingContext from "../../Context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import OrderCard from "../../Components/OrderCard";

const MyOrder = () => {
	const { order } = useContext(ShoppingContext);

	console.log(order);

	const params = useParams();
	const orderId = Number(params.id);

	console.log(orderId);
	console.log(order?.[orderId]);

	return (
		<>
			<div className='flex items-center justify-center w-80 relative mb-6'>
				<Link
					to='/my-orders'
					className='absolute left-0'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 19.5L8.25 12l7.5-7.5'
						/>
					</svg>
				</Link>
				<h1 className='text-xl font-bold'>My Order</h1>
			</div>
			<div className='flex flex-col w-80'>
				{!isNaN(orderId)
					? order?.[orderId]?.products?.map((product) => (
							<OrderCard
								key={product.id}
								id={product.id}
								title={product.title}
								image={product.image}
								price={product.price}
								quantity={product.quantity}
							/>
					  ))
					: order?.slice(-1)[0]?.products?.map((product) => (
							<OrderCard
								key={product.id}
								id={product.id}
								title={product.title}
								image={product.image}
								price={product.price}
								quantity={product.quantity}
							/>
					  ))}
			</div>
		</>
	);
};

export default MyOrder;
