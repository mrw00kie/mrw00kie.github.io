


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
	if(tech_tree != undefined) {
		var k = 0;
		for(var i = 0; i < tech_tree.length; i++) {
			if(checkResearchAvalible(tech_tree[i]) == true) {
				var allreadyResearched = false;
				for(var j = 0; j < completet_research.length; j++) {
					if(tech_tree[i].getAttribute('name') == completet_research[j]) {
						allreadyResearched = true;
					}
				}

				if(allreadyResearched == false) {
					var _x = 10;
					var _y = k * 60 + 10;

					that.fill(200);
					that.rect(_x, _y,  236, 50);

					// is current Research
					if(tech_tree[i].getAttribute('name') == research.currentResearchName)
					{
						var cost__ = parseInt(tech_tree[i].getElementsByTagName('cost')[0].innerHTML, 10);

						console.log(map(cost__, cost__, 0, 0, 100, true));

						that.fill(0, 150, 0);
						that.rect(_x, _y,  map(cost__, cost__, 0, 0, 236), 50);
					}

					that.textSize(16);
					that.fill(0);
					that.text("Name: "+tech_tree[i].getAttribute('name'), _x + 15, _y + 25);
					that.text("Cost:   "+tech_tree[i].getElementsByTagName('cost')[0].innerHTML, _x + 15, _y + 40);
					k++;
				}
			}
		}
	}
}

function context_mousePressed()
{
	if(mouseX > 10 && mouseX < 246) {
		var k = 0;
		for(var i = 0; i < tech_tree.length; i++) {

			var allreadyResearched = false;
			for(var j = 0; j < completet_research.length; j++) {
				if(tech_tree[i].getAttribute('name') == completet_research[j]) {
					allreadyResearched = true;
				}
			}
			if(allreadyResearched == false) {
				if(checkResearchAvalible(tech_tree[i]) == true) {
					var _y = (0 - 720) + (k * 60 + 10);

					if(mouseY > _y  && mouseY < _y + 50){
						research.setResearch(tech_tree[i].getAttribute('name'), parseInt(tech_tree[i].getElementsByTagName('cost')[0].innerHTML, 10));
					}
					k++;
				}
			}
		}
	}
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
