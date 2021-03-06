
var element_research_bttn;
var element_research_box;
var element_research_text;


var dropdown_research_selection;


function update_research_selection() {
	var dropd = document.getElementById("dropdown_research_selection");
	for(var i = 0; i < 6; i++) {
		dropd.options[i].value = list_research_id[i];
		dropd.options[i].innerHTML =  list_research_id[i];
	}
}


function setup_research_selection()
{
	// DIV BODY RESEARCH
	element_research_box = createElement('div');
	element_research_box.parent('game');
	element_research_box.id('element_research_box');
	element_research_box.style('position', 'relative');
	element_research_box.style('background-color', 'gray');
	element_research_box.style('width', '350px');
	element_research_box.style('height', '170px');
	element_research_box.style('top', '5px');
	element_research_box.style('left', '5px');

	// RESEARCH COMMIT BUTTON
	element_research_bttn = createElement('button', 'Start Research');
	element_research_bttn.parent(element_research_box);
	element_research_bttn.id('element_research_bttn');
	element_research_bttn.style('position', 'relative');
	element_research_bttn.style('top', '10px');
	element_research_bttn.style('right', '10px');
	element_research_bttn.style('width', '105px');
	element_research_bttn.style('height', '21px');
	element_research_bttn.mouseClicked(research_start);

	// RESEARCH INFO TEXT
	element_research_text = createElement('p', list_research_info[0]);
	element_research_text.id('element_research_text');
	element_research_text.parent(element_research_box);
	element_research_text.style('position', 'relative');
	element_research_text.style('left', '10px');
	element_research_text.style('top', '40px');

	// RESEARCH DROPDOWN SELECTION
	dropdown_research_selection = createSelect();
	dropdown_research_selection.id('dropdown_research_selection');
	for(var i = 0; i < 6; i++)
	{
		dropdown_research_selection.option('a'+String(i));
	}
	var dropd = document.getElementById("dropdown_research_selection");
	for(var i = 0; i < 6; i++) {
		dropd.options[i].id = "dropdown_research_option_"+String(i);
		dropd.options[i].value = list_research_id[i];
		dropd.options[i].innerHTML = list_research_id[i];
	}
	dropdown_research_selection.changed(update_research_info);
	dropdown_research_selection.parent('element_research_box');
	dropdown_research_selection.style('position', 'relative');
	dropdown_research_selection.style('top', '10px');
	dropdown_research_selection.style('left', '10px');
}

function update_research_info()
{
	var selected_ = dropdown_research_selection.value();
	console.log("research was changed to " + String(selected_));

	for(var i = 0; i < 6; i++) {
		if(selected_ == list_research_id[i]) {
			document.getElementById('element_research_text').innerHTML = list_research_info[i];
		}
	}
}


function research_start()
{
	var selected_ = dropdown_research_selection.value();

	if(selected_ == "EMPTY")
		return false;

	for(var i = 0; i < 6; i++) {
		if(selected_ == list_research_id[i]) {
			// Start RESEARCH
			game_research.setResearch(String(selected_), list_research_cost[i]);
			return true;
		}
	}
	return false;
}
