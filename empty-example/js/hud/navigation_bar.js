
var dropdown_navigation_selection;

function update_navigation_bar() {
	document.getElementById("navigation_money_value").innerHTML = String(recource_money);
	document.getElementById("navigation_research_value").innerHTML = String(game_research.researchRate);
	document.getElementById("navigation_production_value").innerHTML = String(game_productuion.productionRate);
	document.getElementById("navigation_power_value").innerHTML = String(recource_power);
	document.getElementById("navigation_materials_value").innerHTML = String(recource_materials);


	dropdown_navigation_selection = createSelect();
	dropdown_navigation_selection.parent('navigation_bar');
	dropdown_navigation_selection.style('position', 'relative');
	dropdown_navigation_selection.style('left', '400px');
	dropdown_navigation_selection.style('top', '2px');
	dropdown_navigation_selection.id('dropdown_navigation_selection');
	dropdown_navigation_selection.option('dropdown_navigation_research');
	dropdown_navigation_selection.option('dropdown_navigation_buildings');
	dropdown_navigation_selection.option('dropdown_navigation_units');
	dropdown_navigation_selection.option('dropdown_navigation_materials');

	var dropd = document.getElementById("dropdown_navigation_selection");
	dropd.options[0].id = "dropdown_navigation_option_research";
	dropd.options[0].innerHTML = "Research";
	dropd.options[1].id = "dropdown_navigation_option_buildings";
	dropd.options[1].innerHTML = "Buildings";
	dropd.options[2].id = "dropdown_navigation_option_units";
	dropd.options[2].innerHTML = "Units";
	dropd.options[3].id = "dropdown_navigation_option_materials";
	dropd.options[3].innerHTML = "Materials";
}
