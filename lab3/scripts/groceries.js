

var products = [
    {
        name: "brocoli",
        vegetarian: true,
		glutenFree: true,
		organic: true,
		foodGroup: [1,0,0,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Brocoli_03.jpg",
		price: 1.99
    },
    {
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		foodGroup: [0,1,0,0],
		image:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Home_made_sour_dough_bread.jpg",
		price: 1.69
    },
    {
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		foodGroup: [0,0,1,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Steak_03_bg_040306.jpg",
		price: 8.99
	},
    {
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		foodGroup: [0,0,1,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jumbo_Roasted_pork%2C_Oude_Pekela_%282019%29_01.jpg",
		price: 12.99
    },
    {
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		foodGroup: [0,1,0,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Dry_tagliatelle_pasta.jpg",
		price: 0.99
    },
    {
		name: "garden salad",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		foodGroup: [1,0,0,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg",
		price: 6.99
    },
    {
		name: "organic banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		foodGroup: [1,0,0,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Organic_banana_%283077175990%29.jpg",
		price: 3.99
	},
    {
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		foodGroup: [1,0,0,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Ripening_banana.jpg",
		price: 2.99
    },
    {
		name: "organic apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		foodGroup: [1,0,0,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Malus-Boskoop_organic.jpg",
		price: 4.99
    },
    {
		name: "breaded chicken burger",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		foodGroup: [0,0,1,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Burger-King-Chicken-Tenders.jpg",
		price: 8.99
    },
    {
		name: "orange",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		foodGroup: [1,0,0,0],
		image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg",
		price: 7.99
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		foodGroup: [0,0,0,1],
		image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Atlantic_Salmon.png",
		price: 12.99
    }
];









function restrictListProducts(prods, restriction) {

	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {

		if ((restriction == "Vegetarian & GlutenFree & Organic") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){

			product_names.push(prods[i]);

		}

		else if ((restriction == "Vegetarian & GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){

			product_names.push(prods[i]);

		}

		else if ((restriction == "Organic & GlutenFree") && (prods[i].organic == true) && (prods[i].glutenFree == true)){

			product_names.push(prods[i]);

		}

		else if ((restriction == "Organic & Vegetarian") && (prods[i].organic == true) && (prods[i].vegetarian == true)){

			product_names.push(prods[i]);

		}

		else if ((restriction == "Organic") && (prods[i].organic == true)){

			product_names.push(prods[i]);

		}

		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){

			product_names.push(prods[i]);

		}

		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){

			product_names.push(prods[i]);

		}

		else if (restriction == "None"){

			product_names.push(prods[i]);

		}

	}

	return product_names;

}



function getTotalPrice(chosenProducts) {

	totalPrice = 0;

	for (let i=0; i<products.length; i+=1) {

		if (chosenProducts.indexOf(products[i].name) > -1){

			totalPrice += products[i].price;

		}

	}

	return totalPrice;

}