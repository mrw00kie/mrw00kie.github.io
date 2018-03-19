


function research_object()
 {
	this.researchPoints = 1;
	this.currentResearchID = 0;
	this.currentResearch = 0;
	this.currentResearchName = "";

	this.modifyResearch = function(amount) { this.researchPoints += amount; }
	this.setResearch = function(id, name, requiredPoints) {
		this.currentResearchID = id;
		this.currentResearchName = name;
		this.currentResearch = requiredPoints;
	}
	this.updateCurrentResearch = function() {
		if(this.currentResearchID != 0)
		{
			this.currentResearch -= this.researchPoints;
			if(this.currentResearch <= 0){
				// research is done !
				notification_msg.push("Research for "+this.currentResearchName+" is done!");

				this.currentResearchName = "";
				this.currentResearchID = 0;
				this.currentResearch = 0;
				// TODO: UPDATE TECH-TREE ETC...
			}
		}
	}

}
