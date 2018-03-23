


function update_navigation_bar() {
	document.getElementById("navigation_money_value").innerHTML = String(recource_money);
	document.getElementById("navigation_research_value").innerHTML = String(game_research.researchRate);
	document.getElementById("navigation_production_value").innerHTML = String(game_productuion.productionRate);
	document.getElementById("navigation_power_value").innerHTML = String(recource_power);
	document.getElementById("navigation_materials_value").innerHTML = String(recource_materials);
}
