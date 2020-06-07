function openInfo(evt, tabName) {

	
	navcontent = document.getElementsByClassName("navcontent");
	for (i = 0; i < navcontent.length; i++) {
		navcontent[i].style.display = "none";
	}

	navlinks = document.getElementsByClassName("navlinks");
	for (i = 0; i < navlinks.length; i++) {
		navlinks[i].className = navlinks[i].className.replace(" active", "");
	}

	document.getElementById(navName).style.display = "block";
	evt.currentTarget.className += " active";

}

/*function updatePreferences() {
	populateListProductChoices('dietSelect', 'displayProduct');
}*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {

	acc[i].addEventListener("click", function() {
    	this.classList.toggle("active");
		var panel = this.nextElementSibling;

		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
  });
}

var bcc = document.getElementsByClassName("panel");

function toggleItem() {
	for (i = 0; i < acc.length; i++) {
		if(acc[i].className === "accordion active") {
			acc[i].className = "accordion";
			bcc[i].style.display = "none";
		}
	}
}

function prefFunction(){
	var v = document.getElementById("Vegetarian").checked;
	var o = document.getElementById("Organic").checked;
	var g = document.getElementById("GlutenFree").checked;
	if(v == true && o == true && g == true){
		populateListProductChoices("Vegetarian & GlutenFree & Organic", 'displayFruit', 'displayBakery', 'displayMeat');
	}
	else if (v==true&&o==true){
		populateListProductChoices("Vegetarian & Organic", 'displayFruit', 'displayBakery', 'displayMeat');
	}
	else if (v==true&&g==true){
		populateListProductChoices("Vegetarian & GlutenFree", 'displayFruit', 'displayBakery', 'displayMeat');
	}
	else if (o==true&&g==true){
		populateListProductChoices("GlutenFree & Organic", 'displayFruit', 'displayBakery', 'displayMeat');
	}
	else if (v==true){
		populateListProductChoices("Vegetarian", 'displayFruit', 'displayBakery', 'displayMeat');
	}
	else if (o==true){
		populateListProductChoices("Organic", 'displayFruit', 'displayBakery', 'displayMeat');
	}
	else if (g==true){
		populateListProductChoices("GlutenFree", 'displayFruit', 'displayBakery', 'displayMeat');
	}else{
		populateListProductChoices("None", 'displayFruit', 'displayBakery', 'displayMeat');
	}
}

prefFunction()

function populateListProductChoices(sl1,sl2,sl3,sl4) {
	var s1 = sl1;
	var s2 = document.getElementById(sl2);
	var s3 = document.getElementById(sl3);
	var s4 = document.getElementById(sl4);
	s2.innerHTML="";
	s3.innerHTML="";
	s4.innerHTML="";
	var optionArray = restrictListProducts(products,s1);
	optionArray.sort(function(a,b) {return a.price-b.price});
	for (i = 0; i < optionArray.length; i++) {
		var productName = optionArray[i];
		var image = productName.img;
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName.name;
		var picture = document.createElement("IMG");
		picture.setAttribute("src", image);
		picture.setAttribute("width", "304");
		picture.setAttribute("height", "228");
		var label = document.createElement('label')
		label.htmlFor = productName.name;
		label.appendChild(document.createTextNode(productName.name + " " + productName.price));
		if(productName.foodGroup[0] == 1) {
			s2.appendChild(checkbox);
			s2.appendChild(picture);
			s2.appendChild(document.createElement("br"));
			s2.appendChild(checkbox);
			s2.appendChild(label);
			s2.appendChild(document.createElement("br"));
		}
		else if(productName.foodGroup[1] == 1) {
			s3.appendChild(checkbox);
			s3.appendChild(picture);
			s3.appendChild(document.createElement("br"));
			s3.appendChild(checkbox);
			s3.appendChild(label);
			s3.appendChild(document.createElement("br"));
		}
		else (productName.foodGroup[2] == 1) {
			s4.appendChild(checkbox);
			s4.appendChild(picture);
			s4.appendChild(document.createElement("br"));
			s4.appendChild(checkbox);
			s4.appendChild(label);
			s4.appendChild(document.createElement("br"));
		}
	}
}

	

	/*var dietSelect = document.getElementById("dietSelect");
	var checkboxes = dietSelect.getElementsByTagName("input");

	var restrictions = [];
	for (i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			restrictions.push(checkboxes[i].value)
		}
	}

	console.log(restrictions);*/
	

	/*var optionArray = restrictListProducts(products, glutenFree, organicOnly, vegetarian);

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

		s2.appendChild(document.createElement("br"));

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
}
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
}*/

function selectedItems() {

	var ele = document.getElementsByName("product");
	var chosenProducts = [];


	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
			
		}
	}

	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts).toFixed(2)));

}