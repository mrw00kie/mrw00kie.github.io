
var element_unit_box;
var element_unit_bttn;

var dropdown_unit_selection;


function setup_unit_selection()
{
	// DIV BODY Buildings
	element_unit_box = createElement('div');
	element_unit_box.parent('game');
	element_unit_box.id('element_unit_box');
	element_unit_box.style('position', 'relative');
	element_unit_box.style('background-color', 'gray');
	element_unit_box.style('width', '350px');
	element_unit_box.style('height', '300px');
	element_unit_box.style('top', '5px');
	element_unit_box.style('left', '5px');

	// Construction Start BUTTON
	element_unit_bttn = createElement('button', 'Start Training');
	element_unit_bttn.parent(element_unit_box);
	element_unit_bttn.id('element_unit_bttn');
	element_unit_bttn.style('position', 'relative');
	element_unit_bttn.style('top', '10px');
	element_unit_bttn.style('right', '10px');
	element_unit_bttn.style('width', '330px');
	element_unit_bttn.style('height', '21px');
	element_unit_bttn.mouseClicked(training_start);

	// Construction dropdown selection
	dropdown_unit_selection = createSelect(true);
	dropdown_unit_selection.id('dropdown_unit_selection');
	dropdown_unit_selection.parent('element_unit_box');
	dropdown_unit_selection.style('position', 'relative');
	dropdown_unit_selection.style('top', '40px');
	dropdown_unit_selection.style('right', '10px');
	dropdown_unit_selection.style('width', '330px');
	dropdown_unit_selection.style('height', '250px');
	// create options
	for(var i = 0; i < list_unit_id.length; i++) {
		dropdown_unit_selection.option('b'+String(i));
	}
	// give options ID and Values ...
	var dropd = document.getElementById("dropdown_unit_selection");
	for(var i = 0; i < list_unit_id.length; i++) {
		dropd.options[i].id = "dropdown_unit_option_"+String(i);
		dropd.options[i].value = list_unit_id[i];
		dropd.options[i].innerHTML = list_unit_id[i];
	}
}

function update_Unit_select()
{
	// delete Select
	dropdown_unit_selection.remove();
	// recreate Select
	dropdown_unit_selection = createSelect(true);
	dropdown_unit_selection.id('dropdown_unit_selection');
	dropdown_unit_selection.parent('element_unit_box');
	dropdown_unit_selection.style('position', 'relative');
	dropdown_unit_selection.style('top', '40px');
	dropdown_unit_selection.style('right', '10px');
	dropdown_unit_selection.style('width', '330px');
	dropdown_unit_selection.style('height', '250px');
	// create options
	for(var i = 0; i < list_unit_id.length; i++) {
		dropdown_unit_selection.option('b'+String(i));
	}
	// give options ID and Values ...
	var dropd = document.getElementById("dropdown_unit_selection");
	for(var i = 0; i < list_unit_id.length; i++) {
		dropd.options[i].id = "dropdown_unit_option_"+String(i);
		dropd.options[i].value = list_unit_id[i];
		dropd.options[i].innerHTML = list_unit_id[i];
	}
}

function training_start()
{
	var selected_ = dropdown_buildings_selection.value();

	for(var i = 0; i < list_buildings_id.length; i++) {
		if(selected_ == list_buildings_id[i] && list_buildings_money_cost[i] <= recource_money)
		{
			update_navigation_bar();
			recource_money -= list_buildings_money_cost[i];
			game_productuion.setConstruction(String(selected_), list_buildings_production_cost[i]);
			return true;
		}
	}
	return false;
}













//
