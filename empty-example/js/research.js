

function research_object() {
	this.researchRate = 1;
	this.currentResearch = 0;
	this.currentResearchID = "";

	this.modifyResearch = function(amount) { this.researchRate += amount; }
	this.setResearch = function(id_, cost_) {
		this.currentResearchID = id_;
		this.currentResearch = cost_;
	}
	this.updateCurrentResearch = function() {
		if(this.currentResearchID != "") {
			this.currentResearch -= this.researchRate;

			if(this.currentResearch <= 0) {
				// NOTIFY PLAYER
				list_notifications_text.push("Research for "+this.currentResearchID+" has finished!");
				update_notification_text();
				// research is done !
				list_completed_research.push(this.currentResearchID);
				this.currentResearchID = "";
				this.currentResearch = 0;
				// TODO: UPDATE TECH-TREE ETC...
				getAvalibleResearch();
				update_research_selection();
				getAvalibleBuildings();
				update_Buildings_select();

				document.getElementById("element_research_bttn").innerHTML = "Start Research";
			}
			else {
				document.getElementById("element_research_bttn").innerHTML = this.getTimeLeft();
			}
		}
	}

	this.getTimeLeft = function() {
		if(this.currentResearch == 0)
			return 0;
		return floor(this.currentResearch/this.researchRate);
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
