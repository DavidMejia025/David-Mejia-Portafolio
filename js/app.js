$( document ).ready(function() {
    console.log( "ready!" );
	$('nav a').on("click",function(){
		console.log("nav bar")
		$(this).addClass('active');
	})
});