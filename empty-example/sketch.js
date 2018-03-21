var list_research_id;
var list_research_info;


var xml;
var xml_technologie_tree;

function preload() {
	xml = loadXML('xml/technologie.xml');
}


function setup() {

	xml_technologie_tree = xml.getChildren('tech');
	console.log(xml_technologie_tree);

	can = createCanvas(1280, 720);
	can.parent('game');

	list_research_id = new Array();
	list_research_info = new Array();

	for(var i = 0; i < 6; i++) {
		list_research_id[i] = "EMPTY " + String(i);
		list_research_info[i] = "This is a example 'Info Text' for a specific Research, Number "
									+ String(i);
	}

	setup_research_selection();
}

function draw()  {
	can.background(51);
}
