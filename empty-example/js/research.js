



var object_research = function()
{
	this.currentResearchID = "";
	this.researchSecond = 1;
	this.currentResearchCost = 0;

	this.updateResearchRate = function(amount) {
		this.researchSecond += amount;
	}

	this.setNewResearch = function(_id, _cost) {
		console.log("Set research to '" + _id + "' and it costs " + String(_cost));

		this.currentResearchID = _id;
		this.currentResearchCost = _cost;
	}

	this.updateResearch = function() {
		if(this.currentResearchID != "") {
			this.currentResearchCost -= this.researchSecond;
			if(this.currentResearchCost == 0) {
				// FINISHED RESEARCH
				list_completed_research.push(this.currentResearchID);
				this.currentResearchID = "";
				this.currentResearchCost = 0;

				getAvalibleResearch();
				setup_research_selection();
			}
		}
	}
}


function getAvalibleResearch()
{
	// Clear Arrays
	for(var i = 0; i < 6; i++) {
		list_research_id[i] = "EMPTY";
		list_research_info[i] = "";
		list_research_cost[i] = 0;
	}

	var index = 0;
	for(var i = 0; i < xml_technologie_tree.length; i++)
	{
		var isAllreadyResearched = false;
		var _techname = xml_technologie_tree[i].getString('name');
		for(var k = 0; k < list_completed_research.length; k++) {
			if(list_completed_research[k] == _techname) {
				isAllreadyResearched = true;
			}
		}
		if(isAllreadyResearched != true) {
			var _techdepends = xml_technologie_tree[i].getChildren('depends');
			var _dependsDone = 0;
			for(var j = 0; j < _techdepends.length; j++) {
				for(var k = 0; k < list_completed_research.length; k++) {
					if(list_completed_research[k] == _techdepends[j].getContent()) {
						_dependsDone++;
					}
				}
			}
			// all dependencies are done
			if(_dependsDone == _techdepends.length) {
				list_research_id[index] = _techname;
				list_research_info[index] = xml_technologie_tree[i].getChildren('description')[0].getContent();
				list_research_cost[index] = parseInt(xml_technologie_tree[i].getChildren('cost')[0].getContent(), 10);
				index++;
			}
		}
	}
}
