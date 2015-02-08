$(document).ready(function(){
	$("img").on('mouseover', function(){
		var x = (Math.random() * (400))+ 500; 
		var y = (Math.random() * (800))+ 500;
		$(this).attr("src", "http://placekitten.com/g/" + Math.floor(x) + "/" + Math.floor(y));
	});
});
