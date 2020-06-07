function openInfo(evt, tabName) {

	
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

/*function updatePreferences() {
	populateListProductChoices('dietSelect', 'displayProduct');
}*/

function populateListProductChoices() {
	let vegetarian = document.getElementById("Vegetarian").checked;
	let organicOnly = document.getElementById("yes").checked;
	let glutenFree = document.getElementById("GlutenFree").checked;

	

	/*var dietSelect = document.getElementById("dietSelect");
	var checkboxes = dietSelect.getElementsByTagName("input");

	var restrictions = [];
	for (i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			restrictions.push(checkboxes[i].value)
		}
	}

	console.log(restrictions);*/

	var optionArray = restrictListProducts(products, glutenFree, organicOnly, vegetarian);

	let bakery=[];
	let fruitVege=[];
	let meat=[];

	for (i = 0; i < optionArray.length; i++) {

		/*var productName = formatProductName(optionArray[i].name, optionArray[i].price);

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);

		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);

		s2.appendChild(document.createElement("br"));*/

		switch(optionArray[i][2]){
			case "bakery":
				bakery.push(optionArray[i]);
				break;
			case "fruitVege":
				fruitVege.push(optionArray[i]);
				break;
			case "meat":
				meat.push(optionArray[i]);
				break;
		}
	}

	if(bakery && !glutenFree){
		document.getElementById("bakery_sec").style.display = "block";
		fillCategories(bakery, "bakery");
	}else{
		document.getElementById("bakery").style.display = "none";
	}

	if(fruitVege){
		document.getElementById("fruitVege_sec").style.display = "block";
		fillCategories(fruitVege, "fruitVege");
	}

	if(meat && !vegetarian){
		document.getElementById("meat_sec").style.display = "block";
		fillCategories(meat, "meat");
	}
	else{
		document.getElementById("meat").style.display = "none";
	}
}

/*function formatProductName(productName, price){
	return productName + " ($" + price + ")";
}*/
function fillCategories(arr, el){
	tmp = document.getElementById(el);
	tmp.innerHTML = "";

	for(i=0; i<arr.length;i++){
		var productName = arr[i][0];
		var price = arr[i][1];
		let img = document.createElement("img");
		img.src = arr[i][3];
		tmp.appendChild(img);

		var label = document.createElement('label');
		label.htmlFor = productName;
		label.appendChild(document.createTextNode('\u00A0\u00A0'+ `${productName} - $${price}/ea` + '\u00A0\u00A0'));
		tmp.appendChild(label);

		var quantity = document.createElement("input");
		quantity.type = "number";
		quantity.name = "product";
		quantity.value = "0";
		quantity.id = productName;
		quantity.min = 0;
		quantity.max = 10;
		tmp.appendChild(quantity);
		tmp.appendChild(document.createElement("br"));
	}
}

function selectedItems() {

	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	var productQuantity = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].value>0) {
			let quantity = ele[i].value >10?10:ele[i].value;

			para.appendChild(document.createTextNode(`${ele[i].id} x ${quantity}`));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].id);
			productQuantity.push(quantity);
			
		}
	}

	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts, productQuantity)));

}