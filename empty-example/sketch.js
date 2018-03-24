// Research Variables
var list_research_id;
var list_research_info;
var list_completed_research;
var list_research_cost;

var xml;
var xml_technologie_tree;
var xml2;
var xml_building_tree;


// Notifications Box Variables
var list_notifications_text;

// Resource Variables
var recource_money;
var recource_power;
var recource_materials;

// Production Variables
var list_completed_buildings;
var list_buildings_id;
var list_buildings_production_cost;
var list_buildings_money_cost;

// Game Variables
var game_research;
var game_productuion;
var game_lastFrame;

function getSystemTime() { return (int)(millis() / 1000); }


function preload() {
	xml =  loadXML('xml/technologie.xml');
	xml2 = loadXML('xml/buildings.xml');

}


// DEBUG CANVIS COLOR
var sat;
var mode;

function setup() {
	xml_technologie_tree = xml.getChildren('tech');
	xml_building_tree = xml2.getChildren('building');


	can = createCanvas(1280, 720);
	can.parent('game');

	// Research Variables
	list_research_id = new Array();
	list_research_info = new Array();
	list_completed_research = new Array();
	list_research_cost = new Array();

	for(var i = 0; i < 6; i++) {
		list_research_id[i] = "EMPTY";
		list_research_info[i] = "";
		list_research_cost[i] = 0;
	}

	// Buildings Variables
	list_buildings_id = new Array();
	list_buildings_production_cost = new Array();
	list_buildings_money_cost = new Array();
	list_completed_buildings = new Array();

	// Notifications Box Variables
	list_notifications_text = new Array();
	list_notifications_text.push("Welcome! Lead your Civilizastion to great power.");

	// Game Variables
	game_research = new research_object();
	game_productuion = new productuion_object();
	game_lastFrame = getSystemTime();

	//setup Recource Variables
	recource_money = 40;
	recource_power = 2;
	recource_materials = 2;


	// Research Window setup
	getAvalibleResearch();
	setup_research_selection();
	// Notification Bar setup
	setup_notifications_box();
	update_notification_text();
	// Building Window setup
	getAvalibleBuildings();
	setup_building_selection();
	// Navigation Bar setup
	create_navigation_bar();
	update_navigation_bar();
	update_navigation_selection();

	// Debug Values
	sat = 0;
	mode = false;
}

function draw()  {
	if(game_lastFrame != getSystemTime()){
		game_lastFrame = getSystemTime();
		// Only once Per Second
		//console.log(getSystemTime()); // Game Time
		game_research.updateCurrentResearch();
		game_productuion.updateCurrentConstruction();
	}
	// 60 - times per second
	can.background(sat, 0, 50);

	// Debug Stuff
	if(mode)
		sat--;
	else
		sat++;

	if(sat == 255)
		mode = true;
	if(sat == 0)
		mode = false;
}
