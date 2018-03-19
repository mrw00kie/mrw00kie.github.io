



function context_setup(that)
{
	sketch_width = document.getElementById('context_menu').offsetWidth;
	sketch_height = document.getElementById('context_menu').offsetHeight;

	that.createCanvas(sketch_width, sketch_height);
}


function context_draw(that)
{
	that.background(0, 0, 200);

	// DRAW BUTTONS
	for(int i = 0; i < avalible_techs.length; i++) {
		var _x = 10;
		var _y = i * 60 + 10;

		that.rect(_x, _y,  236, 50);
		that.textSize(12);
		that.text(avalible_techs[i].getAttribute('name'), _x + 5, _y + 5);
		that.text(avalible_techs[i].getElementsByTagName('cost').innerHTML, _x + 5, _y + 15);
	}
}

function context_mousePressed()
{

}

function checkResearchAvalible(node)
{
	// Returns True if TECH is available
	var node_name = node.getAttribute('name');
	var dependencies = node.getElementsByTagName('depends');
	if(dependencies.length == 0){
		return true;
	}
	for(var i = 0; i < dependencies.length; i++) {
		var dependencie_researched = false;
		if(completet_research.length == 0) {
			return false;
		}
		for(var k = 0; k < completet_research.length; k++) {
			if(dependencies[i].innerHTML == completet_research[k]) {
				dependencie_researched = true;
			}
		}
		if(dependencie_researched == false) {
			return false;
		}
	}
	return true;
}
