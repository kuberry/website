$(document).ready(function(){
	$(".jumbotron").html(about);

	// reselects the home list
	$(".navbar-brand").click(function() {
		$(".navbar-nav li").removeClass("active");
		$("#home").addClass("active");
	});

	$(".navbar-nav li").click(function() {
		$(".navbar-nav li").removeClass("active");
		$(this).addClass('active');
	});

	$("a").click(function() {
	var id = $(this).attr('href').substring(1);
	if (id.length>0) {
		$(".jumbotron").html(window[id]);
		window.scrollTo(0,0);
	} else {
		$(".jumbotron").html(about);
		window.scrollTo(0,0);
	}
});
	
});
