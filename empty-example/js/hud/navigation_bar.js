
var dropdown_navigation_selection;

function update_navigation_bar() {
	document.getElementById("navigation_money_value").innerHTML = String(recource_money);
	document.getElementById("navigation_research_value").innerHTML = String(game_research.researchRate);
	document.getElementById("navigation_production_value").innerHTML = String(game_productuion.productionRate);
	document.getElementById("navigation_power_value").innerHTML = String(recource_power);
	document.getElementById("navigation_materials_value").innerHTML = String(recource_materials);


	dropdown_navigation_selection = createElement();
	dropdown_navigation_selection.parent(navigation_bar);
	dropdown_navigation_selection.style('position', 'relative');
	dropdown_navigation_selection.style('left', '400px');
	dropdown_navigation_selection.style('top', '2px');
	dropdown_navigation_selection.id('dropdown_navigation_selection');
	dropdown_navigation_selection.option('dropdown_navigation_research', 'Research');
	dropdown_navigation_selection.option('dropdown_navigation_buildings', 'Buildings');
	dropdown_navigation_selection.option('dropdown_navigation_units', 'Units');
	dropdown_navigation_selection.option('dropdown_navigation_materials', 'Materials');

	var dropd = document.getElementById("dropdown_navigation_selection");
	for(var i = 0; i < 4; i++) {
		dropd.options[i].id = "dropdown_navigation_option_"+String(i);
	}

}
