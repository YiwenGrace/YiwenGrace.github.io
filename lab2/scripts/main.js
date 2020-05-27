function openInfo(evt, tabName) {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent [i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.repalce("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}

function updatePreferences() {
    populateListProductChoices('dietSelect', 'displayProduct');
}

function populateListProductChoices(slct1,slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

    s2.innerHTML = "";

    var dietSelect = document.getElementById("dietSelect");
    var checkboxes = dietSelect.getElementsByTagName("input");

    var restrictions = [];

    for (i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked) {
			restrictions.push(checkboxes[i].value)
		}
    }

    console.log(restrictions);

    var optionArray = restrictListProducts(products, restrictions);

    for (i = 0; i < optionArray.length; i++){
        var productName = formatProductName(optionArray[i].name, optionArray[i].price);
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        var label = document.createElement('label');
        label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
        s2.appendChild(label);
        s2.appendChild(document.createElement("br"));
    }
}

function formatProductName(productName, price){
    return productName + " ($" + price + ")";
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

			console.log(ele[i].value)
			chosenProducts.push(ele[i].value);
		}
    }
    
    c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));

}