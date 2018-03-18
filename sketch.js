var notification_msg;

function setup() {
	notification_msg = new Array();

	notification_msg.push("Notification 1");
	notification_msg.push("Notification 2");
	notification_msg.push("Notification 3");
	notification_msg.push("Notification 4");
}

function draw() {

}

window.onload = function(){

	var contextSketch = function(that){
		var sketch_width;
		var sketch_height;

		that.setup = function(){
			sketch_width = document.getElementById('context_menu').offsetWidth;
			sketch_height = document.getElementById('context_menu').offsetHeight;

			that.createCanvas(sketch_width, sketch_height);
		}

		that.draw = function(){
			that.background(0, 0, 200);
		}
	};

	var notificationSketch = function(that){
		var sketch_width;
		var sketch_height;

		that.setup = function(){
			sketch_width = document.getElementById('notification_box').offsetWidth;
			sketch_height = document.getElementById('notification_box').offsetHeight;

			that.createCanvas(sketch_width, sketch_height);
		}

		that.draw = function(){
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

		that.mousePressed = function() {
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
	};

	var gameviewSketch = function(that){
		var sketch_width;
		var sketch_height;

		that.setup = function(){
			sketch_width = document.getElementById('game_view').offsetWidth;
			sketch_height = document.getElementById('game_view').offsetHeight;

			that.createCanvas(sketch_width, sketch_height);
		}

		that.draw = function(){
			that.background(200, 0, 0);
		}
	};

	var sidebarSketch = function(that){
		var sketch_width;
		var sketch_height;

		that.setup = function(){
			sketch_width = document.getElementById('sidebar_right').offsetWidth;
			sketch_height = document.getElementById('sidebar_right').offsetHeight;

			that.createCanvas(sketch_width, sketch_height);
		}

		that.draw = function(){
			that.background(0, 200, 200);
		}
	};

	var first_sketch = new p5(contextSketch, 'context_menu');
	var second_sketch = new p5(notificationSketch, 'notification_box');
	var third_sketch = new p5(gameviewSketch, 'game_view');
	var fourth_sketch = new p5(sidebarSketch, 'sidebar_right');
}
