var products = [
    {
        name: "brocoli",
        vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
    },
    {
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.69
    },
    {
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 8.99
	},
    {
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 12.99
    },
    {
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 0.99
    },
    {
		name: "garden salad",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 6.99
    },
    {
		name: "organic banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99
	},
    {
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.99
    },
    {
		name: "organic apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99
    },
    {
		name: "breaded chicken legs",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 8.99
    },
    {
		name: "orange",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 7.99
	}
];

function restrictListProducts(prods, restrictions) {
	prods.sort(comparePrice);
	
	
	let selectedProducts = [];

	for (let i = 0; i < prods.length; i += 1) {
		if (!((restrictions.includes("Vegetarian") && (!prods[i].vegetarian)) ||
			(restrictions.includes("GlutenFree") && (!prods[i].glutenFree) ||
				(restrictions.includes("Organic") && (!prods[i].organic))
			))) {
			
			selectedProducts.push(prods[i]);
		}
		
	}

	return selectedProducts;
}

function comparePrice(item1, item2) {
	if (item1.price < item2.price) {
		return -1;
	}
	if (item1.price > item2.price) {
		return 1;
	}
	return 0;
}

function getTotalPrice(chosenProducts) {
	console.log(chosenProducts);

	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		let formattedName = formatProductName(products[i].name, products[i].price);
		if (chosenProducts.indexOf(formattedName) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}