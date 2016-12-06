// Menu Fucntionality
function bind_mnu(){
	var body = $('.mnu');
	$('#mnu_toggle').bind('click', function(){
		body.toggleClass('mnu_open');
	});
}

function include_space(num){
	$('#space'+num).addClass('mouseover');
}

function exclude_space(num){
	$('#space'+num).removeClass('mouseover');
}
