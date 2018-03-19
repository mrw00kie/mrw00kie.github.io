



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
	var dependencies = xmlDoc.getElementsByTagName('depends');

	for(var i = 0; i < dependencies.length; i++) {
		var dependencie_researched = false;
		for(var j = 0; j < completet_research.length; j++) {
			if(dependencies[i].innerHTML == completet_research[j]) {
				dependencie_researched = true;
				break;
			}
			if(!dependencie_researched) {
				return false;
			}
		}
	}
	return true;
}
