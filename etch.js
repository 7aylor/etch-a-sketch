const MAX = 48;

var main = function(){

	drawGrid(16);

	randomColors();

	resizeGrid();

	resetGrid();

};

var randomColors = function(){
	$('li').hover(function(){
		var color1 = (Math.floor(Math.random()*256));
		var color2 = (Math.floor(Math.random()*256));
		var color3 = (Math.floor(Math.random()*256));
		$(this).css({'background-color':'rgb(' + color1 + ', ' + color2 + ', ' + color3 + ')'});
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
	$('<div>').attr('id', 'header').insertAfter('H1');
	$('<button>').text("Resize Grid").attr('id', 'resize').prependTo('#header').click(function(){
		width = prompt("What is the width?");
		if(width > MAX){
			alert("Too big! Setting max width to " + MAX);
			width = MAX;
		}
		eraseGrid();
		drawGrid(width);
		randomColors();
	});
};

var resetGrid = function(){
	$('<button>').text("Reset Grid").attr('id', 'reset').prependTo('#header').click(function(){
		$('li').css({'background-color': 'white'})
	});
};

var eraseGrid = function(){
	$('ul').remove();
	$('li').remove();
};



$(document).ready(main);