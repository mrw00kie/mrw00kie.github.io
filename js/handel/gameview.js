
function gameview_setup(that)
{
	sketch_width = document.getElementById('game_view').offsetWidth;
	sketch_height = document.getElementById('game_view').offsetHeight;

	that.createCanvas(sketch_width, sketch_height);
}


function gameview_draw(that)
{
	that.background(200, 0, 0);
}

function gameview_mousePressed()
{

}
