


function update_navigation_bar() {
	document.getElementById("navigation_money").innerHTML = "Money: "+String(recource_money)+"$";
	document.getElementById("navigation_research").innerHTML = "Research: "+String(game_research.researchRate);
	document.getElementById("navigation_production").innerHTML = "Production: "+String(game_productuion.productionRate);
	document.getElementById("navigation_crystals").innerHTML = "Crystals: "+String(recource_crystals)+"t";
	document.getElementById("navigation_metal").innerHTML = "Metals: "+String(recource_metals)+"t";
}
