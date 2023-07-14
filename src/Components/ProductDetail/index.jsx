import { useContext } from "react";
import ShoppingContext from "../../Context";

const ProductDetail = () => {
	const { isProductDetailOpen, productToShow, closeProductDetail } =
		useContext(ShoppingContext);

	return (
		<aside
			className={`${
				isProductDetailOpen ? "flex" : "hidden"
			} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>{productToShow.title}</h2>
				<button onClick={() => closeProductDetail()}>
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
							d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
						/>
					</svg>
				</button>
			</div>
			<figure className='flex flex-col items-center px-5'>
				<img
					className='w-3/4 h-full object-cover'
					src={productToShow.image}
					alt={productToShow.title}
				/>
			</figure>
			<p className='flex flex-col p-6'>
				<span className='font-medium text-lg'>
					${productToShow.price}
				</span>

				<span className='font-medium text-sm'>
					{productToShow.description}
				</span>
			</p>
		</aside>
	);
};

export default ProductDetail;
