function openInfo(evt, navName) {

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

function populateListProductChoices(slct1, slct2, category) {
    var s2 = document.getElementById(slct2);	
    s2.innerHTML = "";		
    var optionArray = restrictListProducts(products, slct1, category);
	var priceArray = restrictListPrices(products, slct1, category);
	var imageArray = restrictListImages(products, slct1, category);
	
	for (i = 0; i < optionArray.length; i++) {			
		var productName = optionArray[i];		
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " ($" + priceArray[i] + ")"));
		s2.appendChild(label);
		
		s2.appendChild(document.createElement("br"));   
		var img = document.createElement('img');
		img.src = imageArray[i];
		img.setAttribute("width","200");
		img.setAttribute("height","200");
		s2.appendChild(img);
		
		s2.appendChild(document.createElement("br"));    
	}
	s2.appendChild(document.createTextNode("-----End of results-----"));
}
	
function selectedItems(){	
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
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
	openInfo(event, 'Cart');
}

function applyFilters(){
	var category = document.getElementById("categorySelect").value;
	var x = document.getElementById('filter1');
	var y = document.getElementById('filter2');
	var z = document.getElementById('filter3');
	var slct1 = "None";	
	
	if(!x.checked && !y.checked && !z.checked){
		slct1 = "None";
	}else if(!x.checked && !y.checked && z.checked){
		slct1 = "Organic";
	}else if(!x.checked && y.checked && !z.checked){
		slct1 = "GlutenFree";
	}else if(!x.checked && y.checked && z.checked){
		slct1 = "GlutenFreeOrganic";
	}else if(x.checked && !y.checked && !z.checked){
		slct1 = "Vegetarian";
	}else if(x.checked && !y.checked && z.checked){
		slct1 = "VegetarianOrganic";
	}else if(x.checked && y.checked && !z.checked){
		slct1 = "VegetarianGlutenFree";
	}else if(x.checked && y.checked && z.checked){
		slct1 = "All";
	}
	populateListProductChoices(slct1, 'displayProduct', category);
}

function start(){
	var category = document.getElementById("categorySelect").selectedIndex;
	document.getElementById("categorySelect").selectedIndex = category;
	applyFilters();
	openInfo(event, 'Products');
}