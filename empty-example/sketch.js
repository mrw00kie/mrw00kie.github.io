// Research Variables
var list_research_id;
var list_research_info;
var list_completed_research;
var list_research_cost;

var game_research_object;

var xml;
var xml_technologie_tree;




function preload() {
	xml = loadXML('xml/technologie.xml');
}


function setup() {

	xml_technologie_tree = xml.getChildren('tech');

	can = createCanvas(1280, 720);
	can.parent('game');

	// Research Variables
	list_research_id = new Array();
	list_research_info = new Array();
	list_completed_research = new Array();

	for(var i = 0; i < 6; i++) {
		list_research_id[i] = "EMPTY";
		list_research_info[i] = "";
		list_research_cost[i] = 0;
	}

	// Game Variables
	game_research_object = new object_research();

	getAvalibleResearch();

	setup_research_selection();
}

function draw()  {
	can.background(51);
}
