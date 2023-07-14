import PropTypes from "prop-types";

const OrdersCard = ({ date, total, totalProducts }) => {
	console.log(date, total, totalProducts);

	return (
		<div className='flex justify-between items-center px-6 mb-3 border border-black rounded-lg w-80 p-4'>
			<div className='flex justify-between w-full items-center'>
				<p className='flex flex-col'>
					<span className='font-light'>Date: {date}</span>
					<span className='font-light'>
						Products: {totalProducts}
					</span>
				</p>
				<span className='text-xl font-bold'>${total}</span>
			</div>
		</div>
	);
};

export default OrdersCard;

//PropType Validations
OrdersCard.propTypes = {
	date: PropTypes.string.isRequired,
	total: PropTypes.number.isRequired,
	totalProducts: PropTypes.number.isRequired,
};
