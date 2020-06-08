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

var acc = document.getElementsByClassName("accordion");

var i;



for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {

    /* Toggle between adding and removing the "active" class,

    to highlight the button that controls the panel */

    this.classList.toggle("active");



    /* Toggle between hiding and showing the active panel */

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


function prefFunction() {

	var x = document.getElementById("Vegetarian").checked;

	var y = document.getElementById("Organic").checked;

	var z = document.getElementById("GlutenFree").checked;



	if(x == true && y == true && z == true) {

		populateListProductChoices("Vegetarian & GlutenFree & Organic", 'displayFruit', 'displayBakery', 'displayMeat')

	}

	else if (x == true && y == true) {

		populateListProductChoices("Organic & Vegetarian", 'displayFruit', 'displayBakery', 'displayMeat')

	}

	else if (x == true && z ==true) {

		populateListProductChoices("Vegetarian & GlutenFree", 'displayFruit', 'displayBakery', 'displayMeat')

	}

	else if (y == true && z == true) {

		populateListProductChoices("Organic & GlutenFree", 'displayFruit', 'displayBakery', 'displayMeat')

	}

	else if (x == true) {

		populateListProductChoices("Vegetarian", 'displayFruit', 'displayBakery', 'displayMeat')

	}

	else if (y == true) {

		populateListProductChoices("Organic", 'displayFruit', 'displayBakery', 'displayMeat')

	}

	else if (z == true) {

		populateListProductChoices("GlutenFree", 'displayFruit', 'displayBakery', 'displayMeat')

	}

	else {

		populateListProductChoices("None", 'displayFruit', 'displayBakery', 'displayMeat')

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
		picture.setAttribute("width", "250");
		picture.setAttribute("height", "220");
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
		else  {
			s4.appendChild(checkbox);
			s4.appendChild(picture);
			s4.appendChild(document.createElement("br"));
			s4.appendChild(checkbox);
			s4.appendChild(label);
			s4.appendChild(document.createElement("br"));
		}
	}
}

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