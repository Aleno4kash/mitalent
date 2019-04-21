$('#play-icon').click(function() {
	$('#play-icon').css("opacity","0");
	$('.news__rightbottom .video').css("opacity","10");
	$('.news__rightbottom').css("background-color","#fff");
   $('.news__rightbottom').carousel(0); 
}); 
