var list_research_id;
var list_research_info;


// XML GET REQUEST FOR TECHNOLOGIES
var xhttp = new XMLHttpRequest();
var xml_techtree;

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    xml_techtree = xmlDoc.getElementsByTagName("tech");
    console.log(tech_tree);
}

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "xml/technologie.xml", true);
xhttp.send();






function setup() {
	// wait while loading xml
	while(xml_techtree != undefined)
	{}

	console.log(xml_techtree);

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
