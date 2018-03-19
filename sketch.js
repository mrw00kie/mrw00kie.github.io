
window.onload = function(){

	var contextSketch = function(that){
		var sketch_width;
		var sketch_height;

		that.setup = function(){
			context_setup(that);
		}

		that.draw = function(){
			context_draw(that);
		}

		that.mousePressed = function() {
			context_mousePressed();
		}
	};

	var notificationSketch = function(that){
		var sketch_width;
		var sketch_height;

		that.setup = function(){
			notifications_setup(that);
		}

		that.draw = function(){
			notifications_draw(that);
		}

		that.mousePressed = function() {
			notifications_mousePressed();
		}
	};

	var gameviewSketch = function(that){
		var sketch_width;
		var sketch_height;

		that.setup = function(){
			gameview_setup(that);
		}

		that.draw = function(){
			gameview_draw(that);
		}

		that.mousePressed = function() {
			gameview_mousePressed();
		}
	};

	var sidebarSketch = function(that){
		var sketch_width;
		var sketch_height;

		that.setup = function(){
			sidebar_setup(that);
		}

		that.draw = function(){
			sidebar_draw(that);
		}
		that.mousePressed = function() {
			sidebar_mousePressed();
		}
	};

	var first_sketch = new p5(contextSketch, 'context_menu');
	var second_sketch = new p5(notificationSketch, 'notification_box');
	var third_sketch = new p5(gameviewSketch, 'game_view');
	var fourth_sketch = new p5(sidebarSketch, 'sidebar_right');
}
