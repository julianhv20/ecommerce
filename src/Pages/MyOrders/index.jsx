import { useContext } from "react";
import ShoppingContext from "../../Context";
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";

const MyOrders = () => {
	const { order } = useContext(ShoppingContext);
	console.log(order.length);

	return (
		<>
			<div className='flex items-center justify-center w-80 mb-4'>
				<h1 className='text-xl font-bold'>My Orders</h1>
			</div>
			{order?.map((order) => (
				<Link
					to={`/my-orders/${order.id}`}
					key={order.id}>
					<OrdersCard
						date={order.date}
						total={order.total}
						totalProducts={order.totalProducts}
					/>
				</Link>
			))}
		</>
	);
};

export default MyOrders;
