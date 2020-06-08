//images from Walmart

var products = [
    {
        name: "brocoli",
        vegetarian: true,
		glutenFree: true,
		organic: true,
		foodGroup: [1,0,0],
		image: "img/brocoli.jpg",
		price: 1.99
    },
    {
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		foodGroup: [0,1,0],
		image:"img/bread.jpg",
		price: 1.69
    },
    {
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		foodGroup: [0,0,1],
		image: "img/steak.jpg",
		price: 8.99
	},
    {
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		foodGroup: [0,0,1],
		image: "img/pork.jpg",
		price: 12.99
    },
    {
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		foodGroup: [0,1,0],
		image: "img/pasta.jpg",
		price: 0.99
    },
    {
		name: "garden salad",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		foodGroup: [1,0,0],
		image: "img/salad.jpg",
		price: 6.99
    },
    {
		name: "organic banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		foodGroup: [1,0,0],
		image: "img/orgBanana.jpg",
		price: 3.99
	},
    {
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		foodGroup: [1,0,0],
		image: "img/banana.jpg",
		price: 2.99
    },
    {
		name: "organic apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		foodGroup: [1,0,0],
		image: "img/orgApple.jpg",
		price: 4.99
    },
    {
		name: "breaded chicken burger",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		foodGroup: [0,0,1],
		image: "img/chicken.jpg",
		price: 8.99
    },
    {
		name: "orange",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		foodGroup: [1,0,0],
		image: "img/orange.jpg",
		price: 7.99
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
	}
	return product_names;
}



function getTotalPrice(chosenProducts) {
	console.log(chosenProducts);

	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}