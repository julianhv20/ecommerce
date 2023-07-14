export const totalPrices = (items) => {
	return items.reduce((acc, item) => acc + item.price, 0);
};
