var main = function(){

	var height = prompt("What is the height?");
	var width = prompt("What is the width?");

	for(var i = 1; i <= width; i++)
	{
		$('<ul>').addClass('row' + i).appendTo("#container");
   		for(var j = 1; j <= height; j++)
   		{
   			$('<li>').attr('id', 'grid' + j).appendTo('.row' + i);
   			//$('<div>').attr('id', 'grid' + j).appendTo('.row' + i);
   		}
	}

	$('li').hover(function(){
		$('li').css({'background-color':'blue'});
	});
};

$(document).ready(main);