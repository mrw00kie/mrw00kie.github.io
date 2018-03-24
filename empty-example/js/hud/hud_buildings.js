
var element_buildings_box;
var element_buildings_bttn;

var dropdown_buildings_selection;


function setup_building_selection()
{
	// DIV BODY Buildings
	element_buildings_box = createElement('div');
	element_buildings_box.parent('game');
	element_buildings_box.id('element_buildings_box');
	element_buildings_box.style('position', 'relative');
	element_buildings_box.style('background-color', 'gray');
	element_buildings_box.style('width', '350px');
	element_buildings_box.style('height', '300px');
	element_buildings_box.style('top', '5px');
	element_buildings_box.style('left', '5px');

	// Construction Start BUTTON
	element_buildings_bttn = createElement('button', 'Start Construction');
	element_buildings_bttn.parent(element_buildings_box);
	element_buildings_bttn.id('element_buildings_bttn');
	element_buildings_bttn.style('position', 'relative');
	element_buildings_bttn.style('top', '10px');
	element_buildings_bttn.style('right', '10px');
	element_buildings_bttn.style('width', '330px');
	element_buildings_bttn.style('height', '21px');
	element_buildings_bttn.mouseClicked(building_start);

	// Construction dropdown selection
	dropdown_buildings_selection = createSelect(true);
	dropdown_buildings_selection.id('dropdown_buildings_selection');
	dropdown_buildings_selection.parent('element_buildings_box');
	dropdown_buildings_selection.style('position', 'relative');
	dropdown_buildings_selection.style('top', '40px');
	dropdown_buildings_selection.style('width', '330px');
	dropdown_buildings_selection.style('height', '260px');
	// create options
	for(var i = 0; i < list_buildings_id.length; i++) {
		dropdown_buildings_selection.option('b'+String(i));
	}
	// give options ID and Values ...
	var dropd = document.getElementById("dropdown_buildings_selection");
	for(var i = 0; i < list_buildings_id.length; i++) {
		dropd.options[i].id = "dropdown_buildins_option_"+String(i);
		dropd.options[i].value = list_buildings_id[i];
		dropd.options[i].innerHTML = list_buildings_id[i];
	}
}

function update_Buildings_select()
{
	// delete Select
	dropdown_buildings_selection.remove();
	// recreate Select
	dropdown_buildings_selection = createSelect(true);
	dropdown_buildings_selection.id('dropdown_buildings_selection');
	dropdown_buildings_selection.parent('element_buildings_box');
	dropdown_buildings_selection.style('position', 'relative');
	dropdown_buildings_selection.style('top', '40px');
	dropdown_buildings_selection.style('width', '330px');
	dropdown_buildings_selection.style('height', '260px');
	// create options
	for(var i = 0; i < list_buildings_id.length; i++) {
		dropdown_buildings_selection.option('b'+String(i));
	}
	// give options ID and Values ...
	var dropd = document.getElementById("dropdown_buildings_selection");
	for(var i = 0; i < list_buildings_id.length; i++) {
		dropd.options[i].id = "dropdown_buildins_option_"+String(i);
		dropd.options[i].value = list_buildings_id[i];
		dropd.options[i].innerHTML = list_buildings_id[i];
	}
}

function getAvalibleBuildings()
{

}

function building_start()
{
	console.log("Started Construction");
}
