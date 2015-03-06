var main = function(){

	var height = 10;
	var width = 10;

	$('<button>').text("New Grid").attr('id', 'newGrid').prependTo('#container').click(function(){
		height = prompt("What is the height?");
		width = prompt("What is the width?");
	});

	for(var i = 1; i <= width; i++)
	{
		$('<ul>').addClass('row' + i).appendTo("#container");
   		for(var j = 1; j <= height; j++)
   		{
   			$('<li>').attr('id', 'grid' + j).appendTo('.row' + i);
   		}
	}

	$('li').hover(function(){
		$(this).css({'background-color':'blue'});
	});

	
};

$(document).ready(main);