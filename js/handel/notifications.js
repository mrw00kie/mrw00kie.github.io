
function notifications_setup(that)
{
	sketch_width = document.getElementById('notification_box').offsetWidth;
	sketch_height = document.getElementById('notification_box').offsetHeight;

	that.createCanvas(sketch_width, sketch_height);
}

function notifications_draw(that)
{
	that.background(0, 200, 0)

	for(var i = 0; i < notification_msg.length; i++)
	{
		var _x = 10;
		var _y = i * 121 + 10;

		that.fill(200);
		if(mouseY > _y-252 && mouseY < _y-141 && notification_msg.length >= 1 && mouseX > 10 && mouseX < 246) {
			that.fill(180);
		}
		that.rect(_x, _y, 236, 111, 4);

		that.fill(0);
		that.textSize(16);
		that.text(notification_msg[i], _x + 5, _y + 20);
	}
}


function notifications_mousePressed()
{
	if(mouseX > 10 && mouseX < 246)
	{
		if(mouseY > -121 && mouseY < -10 && notification_msg.length >= 2) {
			notification_msg.splice(1, 1);
		}
		if(mouseY > -242 && mouseY < -131 && notification_msg.length >= 1) {
			notification_msg.splice(0, 1);
		}
	}
}
