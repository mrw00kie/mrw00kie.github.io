


var object_research = function()
{
	this.currentResearchID = "";
	this.researchSecond = 1;
	this.currentResearchCost = 0;
}


function getAvalibleResearch()
{
	// Clear Arrays
	for(var i = 0; i < 6; i++) {
		list_research_id[i] = "EMPTY " + String(i);
		list_research_info[i] = "This is a example 'Info Text' for a specific Research, Number "
									+ String(i);
	}

	var index = 0;
	for(var i = 0; i < xml_technologie_tree.length; i++)
	{
		var _techname = xml_technologie_tree[i].getString('name');
		for(var k = 0; k < list_completed_research.length; k++) {
			if(list_completed_research[k] == _techname) {
				return false;
			}
		}
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
			index++;
		}
	}
}
