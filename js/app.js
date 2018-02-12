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
	
	var sections = $('section')
	  , nav = $('nav')
	  , nav_height = nav.outerHeight();
	 
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	 
	  sections.each(function() {
	    var top = $(this).offset().top - nav_height,
	        bottom = top + $(this).outerHeight();
	 
	    if (cur_pos >= top && cur_pos <= bottom) {
	      nav.find('a').removeClass('active');
	      sections.removeClass('active');
	 
	      $(this).addClass('active');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    }
	  });
	});

	//Skills item appear disappear section.
    $( ".item1" ).hover(
  function() {
  	console.log(this)
    $(this).children("h5").css("color","#777777");
  }, function() {
    $(".item1 h5").css("color","white");
  		}
	);
	 $( ".item2" ).hover(
  function() {
  	console.log(this)
    $(this).children("h5").css("color","#777777");
  }, function() {
    $(".item2 h5").css("color","white");
  		}
	);
	  $( ".item3" ).hover(
  function() {
  	console.log(this)
    $(this).children("h5").css("color","#777777");
  }, function() {
    $(".item3 h5").css("color","white");
  		}
	);
});