
var dropdown_navigation_selection;

function update_navigation_bar() {
	document.getElementById("navigation_money_value").innerHTML = String(recource_money);
	document.getElementById("navigation_research_value").innerHTML = String(game_research.researchRate);
	document.getElementById("navigation_production_value").innerHTML = String(game_productuion.productionRate);
	document.getElementById("navigation_power_value").innerHTML = String(recource_power);
	document.getElementById("navigation_materials_value").innerHTML = String(recource_materials);
}

function create_navigation_bar()
{
	dropdown_navigation_selection = createSelect();
	dropdown_navigation_selection.parent('navigation_bar');
	dropdown_navigation_selection.style('position', 'relative');
	dropdown_navigation_selection.style('left', '10px');
	dropdown_navigation_selection.style('top', '2px');
	dropdown_navigation_selection.id('dropdown_navigation_selection');
	dropdown_navigation_selection.option('dropdown_navigation_research');
	dropdown_navigation_selection.option('dropdown_navigation_buildings');
	dropdown_navigation_selection.option('dropdown_navigation_units');
	dropdown_navigation_selection.option('dropdown_navigation_materials');
	dropdown_navigation_selection.option('dropdown_navigation_none');
	dropdown_navigation_selection.changed(update_navigation_selection);

	var dropd = document.getElementById("dropdown_navigation_selection");
	dropd.options[0].id = "dropdown_navigation_option_research";
	dropd.options[0].innerHTML = "Research";
	dropd.options[1].id = "dropdown_navigation_option_buildings";
	dropd.options[1].innerHTML = "Buildings";
	dropd.options[2].id = "dropdown_navigation_option_units";
	dropd.options[2].innerHTML = "Units";
	dropd.options[3].id = "dropdown_navigation_option_materials";
	dropd.options[3].innerHTML = "Materials";
	dropd.options[4].id = "dropdown_navigation_option_none";
	dropd.options[4].innerHTML = "None";
}

function update_navigation_selection() {
	var selected_ = dropdown_navigation_selection.value();
	if(selected_ == 'dropdown_navigation_research') {
		// show right element
		element_research_box.show();
		// hide other elements ..
		element_buildings_box.hide();


	}
	if(selected_ == 'dropdown_navigation_buildings') {
		// show right element
		element_buildings_box.show();
		// hide other elements ..
		element_research_box.hide();
		element_unit_box.hide();
	}
	if(selected_ == 'dropdown_navigation_units') {
		// show right element
		element_unit_box.show();
		// hide other elements ..
		element_research_box.hide();
		element_buildings_box.hide();
	}
	if(selected_ == 'dropdown_navigation_materials') {
		// show right element
		// hide other elements ..
		element_research_box.hide();
		element_buildings_box.hide();
		element_unit_box.hide();

	}
	if(selected_ == 'dropdown_navigation_none') {
		// show right element
		// hide other elements ..
		element_research_box.hide();
		element_buildings_box.hide();
		element_unit_box.hide();

	}
}
