$(document).ready(function(){
    var id = $(location).attr('pathname');
    var urlRegex = /[^\/][a-zA-Z]*[.]html/;

    var result = id.match(urlRegex);

    if (id.length>0) {
    	if (result=='research.html') {
    	    $('#research').addClass('active');
    	} else {
    	    $('#home').addClass('active');
    	}
    } else {
    	$('#home').addClass('active');
    }
//    $('.jumbotron').html(result[0]);	
});
