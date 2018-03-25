

function productuion_object() {
	this.productionRate = 2;
	this.currentConstruction = 0;
	this.currentConstructionID = "";

	this.setConstruction = function(id_, cost_) {
		this.currentConstruction = cost_;
		this.currentConstructionID = id_;
	}

	this.updateCurrentConstruction = function() {
		if(this.currentConstructionID != "") {
			this.currentConstruction -= this.productionRate;

			if(this.currentConstruction <= 0) {
				// NOTIFY PLAYER
				list_notifications_text.push("Construction for "+this.currentConstructionID+" has finished!");
				// TODO: APPLY BUILDING EFFECTS
				//	<reward_power></reward_power>
				//	<reward_research></reward_research>
				//	<reward_production></reward_production>

				for(var i = 0; i < xml_building_tree.length; i++) {
					if(xml_building_tree[i].getString('name') == this.currentConstructionID) {
						var reward_power = xml_building_tree[i].getChildren('reward_power')[0].getContent();
						var reward_research = xml_building_tree[i].getChildren('reward_research')[0].getContent();
						var reward_production = xml_building_tree[i].getChildren('reward_production')[0].getContent();

						if(reward_power != undefined || reward_power != "")
							recource_power += parseInt(reward_power, 10);
						if(reward_research != undefined || reward_research != "")
							game_research.researchRate += parseInt(reward_research, 10);
						if(reward_production != undefined || reward_production != "")
							this.productionRate += parseInt(reward_production, 10);

					}
				}

				// Update Navigation-Bar
				update_navigation_bar();
				// Reset Variables
				list_completed_buildings.push(this.currentConstructionID);
				this.currentConstructionID = "";
				this.currentConstruction = 0;
				// Update construction tree
				getAvalibleBuildings();
				update_Buildings_select();
				document.getElementById("element_buildings_bttn").innerHTML = "Start Construction";
			}
			else {
				document.getElementById("element_buildings_bttn").innerHTML = this.getTimeLeft();
			}
		}
	}

	this.getTimeLeft = function() {
		if(this.currentConstruction == 0)
			return 0;
		return floor(this.currentConstruction/this.productionRate);
	}
}

function getAvalibleBuildings()
{
	// CLEAR ARRAYS
	list_buildings_id = [];
	list_buildings_production_cost = [];
	list_buildings_money_cost = [];

	for(var i = 0; i < xml_building_tree.length; i++)
	{
		var isAllreadyBuild = false;
		var _buildingname = xml_building_tree[i].getString('name');
		for(var k = 0; k < list_completed_buildings.length; k++) {
			if(list_completed_buildings[k] == _buildingname) {
				isAllreadyBuild = true;
			}
		}


		if(isAllreadyBuild != true) {
			var _buildingdepends = xml_building_tree[i].getChildren('depends');
			var _siencedepends = xml_building_tree[i].getChildren('depends_sience');
			var _dependsDone = 0;
			var _scienceDependsDone = 0;

			//console.log(xml_building_tree);

			for(var j = 0; j < _siencedepends.length; j++) {
				for(var k = 0; k < list_completed_research.length; k++) {
					if(list_completed_research[k] == _siencedepends[j].getContent()) {
						_scienceDependsDone++;
					}
				}
			}

			for(var j = 0; j < _buildingdepends.length; j++) {
				for(var k = 0; k < list_completed_buildings.length; k++) {
					if(list_completed_buildings[k] == _buildingdepends[j].getContent()) {
						_dependsDone++;
					}
				}
			}
			if(_dependsDone == _buildingdepends.length && _scienceDependsDone == _siencedepends.length) {
				list_buildings_id.push(_buildingname);
				list_buildings_production_cost.push(parseInt(xml_building_tree[i].getChildren('production_cost')[0].getContent(),10));
				list_buildings_money_cost.push(parseInt(xml_building_tree[i].getChildren('money_cost')[0].getContent(), 10));
			}
		}
	}
}
