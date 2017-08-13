



		
		
	
	
//Total Order with list receipt, subtotal, and total price--->
		
	
	function getReceipt() {
		var text1 = "<h5>Your Order:</h5>";
		var text2 = "<br><h6>Subtotal:</h6>";
		var runningTotal = 0;
		var sizeTotal = 0;
		var sizeArray = document.getElementsByClassName("size");
		for (var i = 0; i < sizeArray.length; i++) {
			if (sizeArray[i].checked) {
				var selectedSize =sizeArray[i].value;
				text1 = text1+selectedSize+"<br>";
			}
		}
		
	    if (selectedSize === "Personal Pizza") {
			sizeTotal = 6;
			text2 = text2+sizeTotal+"<br>";
		} else if (selectedSize === "Medium Pizza") {
			sizeTotal = 10;
			text2 = text2+sizeTotal+"<br>";
		} else if (selectedSize === "Large Pizza") {
			sizeTotal = 14;
			text2 = text2+sizeTotal+"<br>";
		} else if (selectedSize === "Extra Large Pizza") {
			sizeTotal = 16;
			text2 = text2+sizeTotal+"<br>";
		}
		runningTotal = sizeTotal;	
	    getMeat(runningTotal,text1,text2);
	};
	function getMeat(runningTotal,text1,text2) {
		<!--var runningTotal = runningTotal; -->
		var meatTotal = 0;
		var selectedMeat = [];
		var meatArray =document.getElementsByClassName("meats");
		for (var j = 0; j < meatArray.length; j++) {
			if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			}
		}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatCount = meatCount - 1;
			}else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
					text2 = text2 + 1 + "<br>";
				   meatCount = meatCount - 1;
			}
		}
			
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice1").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCheese(runningTotal,text1,text2);
};
		
	function getCheese(runningTotal,text1,text2) {
	    var runningTotal = runningTotal;
		var cheeseTotal = 0;
		var cheeseArray = document.getElementsByClassName("cheese");
		for(var i = 0; i < cheeseArray.length; i++) {
			if (cheeseArray[i].checked) {
				var selectedCheese = cheeseArray[i].value;				
			}
		}
		
	     if (selectedCheese === "Regular Cheese") {
			cheeseTotal = 0;
			text2 = text2 +cheeseTotal+ "<br>";	
			
		} else if (selectedCheese === "No Cheese") {
			cheeseTotal = 0;	
			text2 = text2 +cheeseTotal+ "<br>";	
		} else  if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
			text2 = text2 +cheeseTotal+ "<br>";	
		}
		
		text1 = text1+selectedCheese+"<br>";
		runningTotal = (runningTotal + cheeseTotal);
		document.getElementById("showText1").innerHTML=text1;
		document.getElementById("showText2").innerHTML=text2;
		document.getElementById("totalPrice1").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
		getCrust(runningTotal,text1,text2); 
};
function getCrust(runningTotal,text1,text2) {
		var crustTotal = 0;
		var crustArray =document.getElementsByClassName("crust");
		for (var i = 0; i < crustArray.length; i++) {
			if (crustArray[i].checked) {
				var selectedCrust = crustArray[i].value;
			}
		}
		
	   if (selectedCrust === "Plain Crust") {
			crustTotal = 0;
			text2 = text2 +crustTotal+ "<br>";
		} else if (selectedCrust === "Garlic Butter Crust") {
			crustTotal = 0;
			text2 = text2 +crustTotal+ "<br>";
		} else if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 0; 
			text2 = text2 +crustTotal+ "<br>";
		} else if (selectedCrust === "Spicy Crust") {
			crustTotal = 0;
			text2 = text2 +crustTotal+ "<br>";
		} else { (selectedCrust === "House Special Crust") 
			crustTotal = 0;
			text2 = text2 +crustTotal+ "<br>";
		}
		text1 = text1+selectedCrust+"<br>";
		runningTotal = (runningTotal + crustTotal);
		document.getElementById("showText1").innerHTML=text1;
		document.getElementById("showText2").innerHTML=text2;
		document.getElementById("totalPrice1").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
		getSauce(runningTotal,text1,text2); 
};
function getSauce(runningTotal,text1,text2) {
		var sauceTotal = 0;
		var sauceArray =document.getElementsByClassName("sauce");
		for (var i = 0; i < sauceArray.length; i++) {
			if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			}
		}
		if (selectedSauce === "Marinara Sauce") {
			sauceTotal = 0;
			text2 = text2 +sauceTotal+ "<br>";
		}else if (selectedSauce === "White Sauce") {
			sauceTotal = 0;
			text2 = text2 +sauceTotal+ "<br>";
		}else if (selectedSauce === "Barbecue Sauce") {
			sauceTotal = 0;
			text2 = text2 +sauceTotal+ "<br>";
		}else {(selectedSauce === "No Sauce") 
			sauceTotal = 0;
			text2 = text2 +sauceTotal+ "<br>";
		}
		text1 = text1+selectedSauce+"<br>";
		runningTotal = (runningTotal + sauceTotal);
		document.getElementById("showText1").innerHTML=text1;
		document.getElementById("showText2").innerHTML=text2;
		document.getElementById("totalPrice1").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
		getVeggies(runningTotal,text1,text2); 
};
	function getVeggies(runningTotal,text1,text2) {
		var veggiesTotal = 0;
		var selectedVeggies = [];
		var veggiesArray =document.getElementsByClassName("veggies");
		for (var j = 0; j < veggiesArray.length; j++) {
			if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);			 
			}
		}
		var veggiesCount = selectedVeggies.length;
		if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
		} else {
		veggiesTotal = 0;
		}
		runningTotal = (runningTotal + veggiesTotal);
	for (var j = 0; j < selectedVeggies.length; j++) {
			text1 = text1+selectedVeggies[j]+"<br>";
			if (veggiesCount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggiesCount = veggiesCount - 1;
			}else if (veggiesCount == 2) {
				text2 = text2 + 1 + "<br>";
				veggiesCount = veggiesCount - 1;
			} else {
					text2 = text2 + 1 + "<br>";
				   veggiesCount = veggiesCount - 1;
			}
		}
		document.getElementById("cart").style.opacity=1;
	    document.getElementById("showText1").innerHTML=text1
		document.getElementById("showText2").innerHTML=text2;
		document.getElementById("totalPrice1").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";	
};

function clearAll() {
		document.getElementById("pizzaMenu").reset();
		document.getElementById("cart").style.opacity=0;
		
	};

	

	
    
	
	
	
	
	
	
	
	
	

	










	



	