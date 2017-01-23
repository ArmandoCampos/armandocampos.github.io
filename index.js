// ©2017 Armando Campos

// General ---------------------------------------------------------
/**
	* Replace an Element's Class.
	* @param {Object} elmnt
	* @param {Number} prev
	* @param {Number} next
*/
function class_change(elmnt, prev, next){
	elmnt.classList.remove(prev);
	elmnt.classList.add(next);
}

/**
	* Retrieve an Element by it's ID.
	* @param {String} str
*/
function getByID(str){
	return document.getElementById(str);
}

// Menu Fucntionality ----------------------------------------------
/**
	* Side Menu: Bind.
*/
function bind_mnu(){
	var body = $('.mnu');
	$('#mnu_toggle').bind('click', function(){
		body.toggleClass('mnu_open');
	});
}

/**
	* Side Menu: Include Space as buffer.
*/
function include_space(num){
	$('#space'+num).addClass('mouseover');
}

/**
	* Side Menu: Remove Space buffer.
*/
function exclude_space(num){
	$('#space'+num).removeClass('mouseover');
}

// Carousel Gallery Functionality -----------------------------------
/**
	* Gallery: Move Belt Up.
*/
function belt_moveup(belt, postmax){
	var cur_post = belt_getpost(belt, postmax);
	var bp = "beltPost";
	switch(cur_post){
		case 1: // 1 -> postmax	<<< Max Panels = postmax
			class_change(belt, bp+"1", bp+postmax);
			break;
		default: // i -> i-1
			class_change(belt, bp+cur_post, bp+(cur_post-1));
			break;
	}
}

/**
	* Gallery: Move Belt Down.
*/
function belt_movedown(belt, postmax){
	var cur_post = belt_getpost(belt, postmax);
	var bp = "beltPost";
	// Can't use a switch statement here
	// The maximum number of images is not constant
	if(cur_post == postmax){ // postmax -> 1	<<< Max Panels = postmax
		class_change(belt, bp+postmax, bp+"1");
	}else{ // i -> i+1
		class_change(belt, bp+cur_post, bp+(cur_post+1));
	}
}

/**
	* Gallery: Belt Get Position.
*/
function belt_getpost(belt, postmax){
	var post = 1;
	for(var i = 1; i < postmax+1; i++){ // <<< Max Panels = postmax
		var bclass = "beltPost"+i;
		if(belt.classList.contains(bclass)){
			post = i;
			break;
		}
	}
	return post;
}

// Slider Functionality -----------------------------------
/**
	* Slider: Slide react to Mouse Over.
*/
function slide_over(num){
	$('#slider_f'+num).addClass('slider_fhover');
	$('#slider_b'+num).addClass('slider_bhover');
}

/**
	* Slider: Slide react to Mouse Out.
*/
function slide_out(num){
	$('#slider_f'+num).removeClass('slider_fhover');
	$('#slider_b'+num).removeClass('slider_bhover');
}
