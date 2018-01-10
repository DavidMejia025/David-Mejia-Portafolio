$( document ).ready(function() {
    console.log( "ready!" );
	$('nav a').on("click",function(){
		console.log("nav bar")
		$(this).addClass('active');
	})

	$(".timeline-item a").on("click",function(e){
		var destiny = $(this).attr("href");
		$(".tabs-content > div").each(function(){
			$(this).removeClass('active')
			$(`.tabs-content ${destiny}`).addClass('active')
		})
	})

	
});