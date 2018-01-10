$( document ).ready(function() {
    console.log( "ready!" );
	$('nav a').on("click",function(){
		$('nav a').each(function(i,selector){
			$(selector).removeClass('active')
		})
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