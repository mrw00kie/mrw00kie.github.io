



function context_setup(that)
{
	sketch_width = document.getElementById('context_menu').offsetWidth;
	sketch_height = document.getElementById('context_menu').offsetHeight;

	that.createCanvas(sketch_width, sketch_height);
}


function context_draw(that)
{
	that.background(0, 0, 200);

	
}

function context_mousePressed()
{

}
