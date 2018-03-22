
var element_notifications_box;

var element_notifications_textbox_1;
var element_notifications_textbox_2;


var element_notifications_bttn_1;
var element_notifications_bttn_2;



function setup_notifications_box()
{
	// DIV Main Body
	element_notifications_box = createElement('div');
	element_research_box.parent('game');
	element_notifications_box.id('element_notifications_box');
	element_notifications_box.style('position', 'relative');
	element_notifications_box.style('background-color', 'gray');
	element_notifications_box.style('width', '350px');
	element_notifications_box.style('height', '170px');
	element_notifications_box.style('top', '180px');
	element_notifications_box.style('left', '5px');

	// DIV Text Body 1
	element_notifications_textbox_1 = createElement('div');
	element_notifications_textbox_1.parent('element_notifications_box');
	element_notifications_textbox_1.id('element_notifications_textbox_1');
	element_notifications_textbox_1.style('position', 'relative');
	element_notifications_textbox_1.style('background-color', 'white');
	element_notifications_textbox_1.style('width', '340px');
	element_notifications_textbox_1.style('height', '70px');
	element_notifications_textbox_1.style('bottom', '5px');
	element_notifications_textbox_1.style('left', '5px');

	// DIV Text Body 1
	element_notifications_textbox_2 = createElement('div');
	element_notifications_textbox_2.parent('element_notifications_box');
	element_notifications_textbox_2.id('element_notifications_textbox_2');
	element_notifications_textbox_2.style('position', 'relative');
	element_notifications_textbox_2.style('background-color', 'white');
	element_notifications_textbox_2.style('width', '340px');
	element_notifications_textbox_2.style('height', '70px');
	element_notifications_textbox_2.style('bottom', '5px');
	element_notifications_textbox_2.style('left', '5px');

	// Notifications Bttn 1
	element_notifications_bttn_1 = createElement('Button','X');
	element_notifications_bttn_1.parent('element_notifications_textbox_1')
	element_notifications_bttn_1.style('right', '5px');
	element_notifications_bttn_1.style('bottom', '5px');
	element_notifications_bttn_1.mouseClicked(bttn_notifications_1);

	// Notifications Bttn 2
	element_notifications_bttn_2 = createElement('Button','X');
	element_notifications_bttn_2.parent('element_notifications_textbox_2')
	element_notifications_bttn_2.style('right', '5px');
	element_notifications_bttn_2.style('bottom', '5px');
	element_notifications_bttn_2.mouseClicked(bttn_notifications_2);

	// text 1
	var element_notifications_text_1 = createElement('p');
	element_notifications_text_1.id('element_notifications_text_1');
	element_notifications_text_1.parent('element_notifications_textbox_1');
	element_notifications_text_1.style('right', '5px');
	element_notifications_text_1.style('top', '5px');

	// text 2
	var element_notifications_text_2 = createElement('p');
	element_notifications_text_2.id('element_notifications_text_2');
	element_notifications_text_2.parent('element_notifications_textbox_2');
	element_notifications_text_2.style('right', '5px');
	element_notifications_text_2.style('top', '5px');
}


function update_notification_text()
{
	var _text_0 = document.getElementById("element_notifications_text_1");
	var _text_1 = document.getElementById("element_notifications_textbox_2");

	_text_0.innerHTML = "";
	_text_1.innerHTML = "";

	if(list_notifications_text.length > 0) {
		_text_0.innerHTML = list_notifications_text[0];
	}
	if(list_notifications_text.length > 1)
		_text_1.innerHTML = list_notifications_text[1];
}

function bttn_notifications_1()
{
	if(list_notifications_text.length > 0)
	{
		list_notifications_text.splice(0, 1);
		update_notification_text();
	}
}

function bttn_notifications_2()
{
	if(list_notifications_text.length > 1)
	{
		list_notifications_text.splice(1, 1);
		update_notification_text();
	}
}
















// PLAYEHOLDER
