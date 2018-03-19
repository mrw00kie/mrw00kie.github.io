// Game Vars
var notification_msg;
var game_lastFrame;

//
var research;

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("tech");
    console.log(x);
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		myFunction(this);
	}
};
xhttp.open("GET", "xml/techtree.xml", true);
xhttp.send();


function getSystemTime() { return (int)(millis() / 1000); }

function setup() {
	// Game Vars
	notification_msg = new Array();
	game_lastFrame = getSystemTime();
	research = new research_object();

	notification_msg.push("<<INSERT TEXT HERE>>");


}


function draw() {
	if(game_lastFrame != getSystemTime()){
		game_lastFrame = getSystemTime();
		// Only once Per Second
		//console.log(getSystemTime()); // Game Time
		research.updateCurrentResearch();
		console.log(research.currentResearch);
	}
	// 60 - times per second

}
