
function sidebar_setup(that)
{
	sketch_width = document.getElementById('sidebar_right').offsetWidth;
	sketch_height = document.getElementById('sidebar_right').offsetHeight;

	that.createCanvas(sketch_width, sketch_height);
}


function sidebar_draw(that)
{
	that.background(0, 200, 200);
}

function sidebar_mousePressed()
{

}
