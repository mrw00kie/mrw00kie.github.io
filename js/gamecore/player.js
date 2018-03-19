var tech_tree;
var completet_research = new Array();
var avalible_techs = new Array();

function research_object()
 {
	this.researchPoints = 1;
	this.currentResearch = 0;
	this.currentResearchName = "";

	this.modifyResearch = function(amount) { this.researchPoints += amount; }
	this.setResearch = function(name, requiredPoints) {
		this.currentResearchName = name;
		this.currentResearch = requiredPoints;
	}
	this.updateCurrentResearch = function() {
		if(this.currentResearchName != "")
		{
			this.currentResearch -= this.researchPoints;
			if(this.currentResearch <= 0){
				// research is done !
				notification_msg.push("Research for "+this.currentResearchName+" is done!");

				completet_research.push(this.currentResearchName);
				this.currentResearchName = "";
				this.currentResearch = 0;
				// TODO: UPDATE TECH-TREE ETC...
				// clear avalible_techs array and repopulate it
				avalible_techs.splice(0,avalible_techs.length);
				for(var i = 0; i < tech_tree.length; i++) {
					if(checkResearchAvalible(tech_tree[i])) {
						avalible_techs.push(tech_tree[i]);
		}	}	}	}
	}

}
