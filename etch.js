const MAX = 36;

var main = function(){

	drawGrid(16);

	colors();

	resizeGrid();

	resetGrid();

};

var colors = function(){

	var bgcolorlist = new Array("#FF0000", "#0040FF", "#00FF00", "#F7FE2E", "#190707", "#BF00FF", "#585858", "#FF8000");

	$('li').hover(function(){
		var color = bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]
		$(this).css({'background-color':color});
	});
};

var drawGrid = function(width){

	for(var i = 1; i <= width; i++)
	{
		$('<ul>').addClass('row' + i).appendTo("#container");
   		for(var j = 1; j <= width; j++)
   		{
   			$('<li>').attr('id', 'grid' + j).appendTo('.row' + i);
   		}
	}

};

var resizeGrid = function(){
	$('<button>').text("Resize Grid").attr('id', 'resize').prependTo('#container').click(function(){
		width = prompt("What is the width?");
		if(width > MAX){
			alert("Too big! Setting max width to 36");
			width = MAX;
		}
		eraseGrid();
		drawGrid(width);
		colors();
	});
};

var resetGrid = function(){
	$('<button>').text("Reset Grid").attr('id', 'reset').prependTo('#container').click(function(){
		$('li').css({'background-color': 'white'})
	});
};

var eraseGrid = function(){
	$('ul').remove();
	$('li').remove();
};

$(document).ready(main);