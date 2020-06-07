//images from Walmart

var products = [
    {
        name: "brocoli",
        vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fruitVege",
		image: "./img/brocoli.jpg",
		price: 1.99
    },
    {
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "bakery",
		image:"./img/bread.jpg",
		price: 1.69
    },
    {
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "meat",
		image: "./img/steak.jpg",
		price: 8.99
	},
    {
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		image: "./img/pork.jpg",
		price: 12.99
    },
    {
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "bakery",
		image: "./img/pasta.jpg",
		price: 0.99
    },
    {
		name: "garden salad",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "fruitVege",
		image: "./img/salad.jpg",
		price: 6.99
    },
    {
		name: "organic banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fruitVege",
		image: "./img/orgBanana.jpg",
		price: 3.99
	},
    {
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "fruitVege",
		image: "./img/banana.jpg",
		price: 2.99
    },
    {
		name: "organic apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fruitVege",
		image: "./img/orgApple.jpg",
		price: 4.99
    },
    {
		name: "breaded chicken burger",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		category: "meat",
		image: "./img/chicken.jpg",
		price: 8.99
    },
    {
		name: "orange",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "fruitVege",
		image: "./img/orange.jpg",
		price: 7.99
	}
];

function restrictListProducts(prods, glutenFree, organicOnly, vegetarian) {
	prods.sort(comparePrice);
	
	
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {
		if (organicOnly && !prods[i].organic){
			continue;
		}

		if(!vegetarian && !glutenFree){
			product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
		}

		let veg = vegetarian && prods[i].vegetarian;
		let glut = glutenFree && prods[i].glutenFree;

		if (vegetarian && glutenFree){
			if(prods[i].glutenFree && prods[i].vegetarian){
				product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
			}
		}
		else if (veg){
			product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
		}
		else if (glut){
			product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
		}
	}
	return product_names;
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

function getTotalPrice(chosenProducts, produntQuantity) {
	

	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		let index = chosenProducts.indexOf(products[i].name)

		if (index > -1){
			totalPrice += products[i].price * productQuantity[index];
		}
	}
	return Math.round(totalPrice * 100) / 100;
}