


function update_navigation_bar() {
	document.getElementById("navigation_money").innerHTML = "Money: "+String(recource_money)+"$";
	document.getElementById("navigation_research").innerHTML = "Research: "+String(game_research.researchRate);
	document.getElementById("navigation_production").innerHTML = "Production: "+String(game_productuion.productionRate);
	document.getElementById("navigation_power").innerHTML = "Power: "+String(recource_power)+"kW";
	document.getElementById("navigation_materials").innerHTML = "Mterials: "+String(recource_materials);
}
