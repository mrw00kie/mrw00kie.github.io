



function context_setup(that)
{
	sketch_width = document.getElementById('context_menu').offsetWidth;
	sketch_height = document.getElementById('context_menu').offsetHeight;

	that.createCanvas(sketch_width, sketch_height);
}


function context_draw(that)
{
	that.background(0, 0, 200);


}

function context_mousePressed()
{

}


function checkResearchAvalible(node)
{
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
			console.log(completet_research[k]);

			if(dependencies[i].innerHTML == completet_research[k]) {
				dependencie_researched = true;
			}
			if(dependencie_researched) {
			}
			else {
				console.log("dependencie not researched yet");
				return false;
			}
		}
	}
	return true;
}
