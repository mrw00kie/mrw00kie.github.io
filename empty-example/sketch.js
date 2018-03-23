// Research Variables
var list_research_id;
var list_research_info;
var list_completed_research;
var list_research_cost;

var xml;
var xml_technologie_tree;

// Notifications Box Variables
var list_notifications_text;

// Resource Variables
var recource_money;
var recource_crystals;
var recource_metals;

// Production Variables

// Game Variables
var game_research;
var game_productuion;
var game_lastFrame;

function getSystemTime() { return (int)(millis() / 1000); }



function preload() {
	xml = loadXML('xml/technologie.xml');
}


// DEBUG CANVIS COLOR
var sat;
var mode;

function setup() {
	xml_technologie_tree = xml.getChildren('tech');

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

	// Notifications Box Variables
	list_notifications_text = new Array();
	list_notifications_text.push("Welcome! Lead your Civilizastion to great power.");

	// Game Variables
	game_research = new research_object();
	game_productuion = new productuion_object();
	game_lastFrame = getSystemTime();


	getAvalibleResearch();
	setup_research_selection();

	setup_notifications_box();
	update_notification_text();

	sat = 0;
	mode = false;
}


function draw()  {
	if(game_lastFrame != getSystemTime()){
		game_lastFrame = getSystemTime();
		// Only once Per Second
		//console.log(getSystemTime()); // Game Time
		game_research.updateCurrentResearch();
	}
	// 60 - times per second
	can.background(sat);

	if(mode)
		sat--;
	else
		sat++;

	if(sat == 255)
		mode = true;
	if(sat == 0)
		mode = false;
}
