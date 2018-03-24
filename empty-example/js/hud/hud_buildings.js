
var element_buildings_box;
var element_buildings_bttn;

function setup_building_selection()
{
	// DIV BODY RESEARCH
	element_buildings_box = createElement('div');
	element_buildings_box.parent('game');
	element_buildings_box.id('element_buildings_box');
	element_buildings_box.style('position', 'relative');
	element_buildings_box.style('background-color', 'gray');
	element_buildings_box.style('width', '350px');
	element_buildings_box.style('height', '300px');
	element_buildings_box.style('top', '5px');
	element_buildings_box.style('left', '5px');

	// RESEARCH COMMIT BUTTON
	element_buildings_bttn = createElement('button', 'Start Construction');
	element_buildings_bttn.parent(element_buildings_box);
	element_buildings_bttn.id('element_buildings_bttn');
	element_buildings_bttn.style('position', 'relative');
	element_buildings_bttn.style('top', '10px');
	element_buildings_bttn.style('right', '10px');
	element_buildings_bttn.style('width', '330px');
	element_buildings_bttn.style('height', '21px');
	element_buildings_bttn.mouseClicked(building_start);


}



function building_start()
{
	console.log("Started Construction");
}
