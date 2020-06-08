

var products = [
    {
        name: "brocoli",
        vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "vegetables",
		image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Brocoli_03.jpg",
		price: 1.99
    },
    {
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "bakery",
		image:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Home_made_sour_dough_bread.jpg",
		price: 1.69
    },
    {
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "meat",
		image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Steak_03_bg_040306.jpg",
		price: 8.99
	},
    {
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jumbo_Roasted_pork%2C_Oude_Pekela_%282019%29_01.jpg",
		price: 12.99
    },
    {
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "bakery",
		image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Dry_tagliatelle_pasta.jpg",
		price: 0.99
    },
    {
		name: "garden salad",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "vegetables",
		image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg",
		price: 6.99
    },
    {
		name: "organic banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fruits",
		image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Organic_banana_%283077175990%29.jpg",
		price: 3.99
	},
    {
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "fruits",
		image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Ripening_banana.jpg",
		price: 2.99
    },
    {
		name: "organic apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fruits",
		image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Malus-Boskoop_organic.jpg",
		price: 4.99
    },
    {
		name: "breaded chicken burger",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		category: "meat",
		image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Burger-King-Chicken-Tenders.jpg",
		price: 8.99
    },
    {
		name: "orange",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "fruits",
		image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg",
		price: 7.99
	}
];

function compare( a, b ) {
	if ( a.price < b.price ){
	  return -1;
	}
	if ( a.price > b.price ){
	  return 1;
	}
	return 0;
  }
  
  products.sort(compare);

  function restrictListProducts(prods, restriction, category) {
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {
		if((prods[i].category == category) || (category == "all")){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction, category) {
	let prices = [];

	for (let i=0; i<prods.length; i+=1) {
		if((prods[i].category == category) || (category == "all")){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				prices.push(prods[i].price);
			}
			else if (restriction == "None"){
				prices.push(prods[i].price);
			}
		}
	}
	return prices;
}

function restrictListImages(prods, restriction, category) {
	let images = [];

	for (let i=0; i<prods.length; i+=1) {
		if((prods[i].category == category) || (category == "all")){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "Organic") && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				images.push(prods[i].image);
			}
			else if (restriction == "None"){
				images.push(prods[i].image);
			}
		}
	}
	return images;
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