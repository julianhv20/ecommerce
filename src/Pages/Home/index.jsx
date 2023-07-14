import { useContext } from "react";
import ShoppingContext from "../../Context";

import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useParams } from "react-router-dom";

const Home = () => {
	const { products, searchProduct, setSearchProduct } =
		useContext(ShoppingContext);

	const handleSearch = (e) => {
		setSearchProduct(e.target.value);
	};

	const { category } = useParams();
	if (category === undefined) console.log(category);

	//console.log(products);
	//console.log(searchProduct);

	return (
		<>
			<div className='flex items-center justify-center w-80 mb-4'>
				<h1 className='text-xl font-bold'>Exclusive Products</h1>
			</div>

			{
				/* Search Bar */
				category === undefined ? (
					<input
						type='text'
						placeholder='Search Products'
						className='w-80 mb-4 rounded-lg border border-black p-4 focus:outline-none'
						onChange={handleSearch}
					/>
				) : (
					""
				)
			}

			<div className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg'>
				{category === undefined
					? products
							?.filter((item) => {
								return item.title
									.toLowerCase()
									.includes(searchProduct.toLowerCase());
							})
							?.map((product) => (
								<Card
									key={product.id}
									product={product}
								/>
							))
					: products
							?.filter((item) => {
								return item.category.includes(
									category.toLowerCase()
								);
							})
							?.map((product) => (
								<Card
									key={product.id}
									product={product}
								/>
							))}
			</div>
			<ProductDetail />
		</>
	);
};

export default Home;
