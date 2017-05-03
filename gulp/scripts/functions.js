//RESIZE ACTIONS
//When you need to take action on resize. Uses debounce functionality
//leave commented out unless needed.
/*
var resizeTimer = null;
var resizeDelay = 200; //how long to wait before taking action
$(window).on('resize', function(e) {

	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		closeMobileMenu();
	}, resizeDelay);

});
*/

/**
 * Limit numeric inputs
 *
 * Accepts: 0-9, ".", ",", backspace, arrow keys, tab, and delete
 *
 */
$('body').on('keydown', '.number-input', function(e){
	//console.log('Number input testing: '+e.which);

	if (!((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || e.which == 110 || (e.which == 173 || e.which == 109) || e.which == 188 || e.which == 190 || e.which == 8 || e.which == 9 || e.which == 37 || e.which == 39 || e.which == 46 )) {
		return false;
	}

});

/**
 * Set a Cookie
 * @param string cname  Cookie Name
 * @param mixed cvalue  Cookie Value
 * @param int exdays How many days before expire
 */
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Get a cookie
 * @param  string cname  Cookie Name
 * @return string        Cookie Value
 */
function pkGetCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length,c.length);
		}
	}
	return "";
}

/**
 * Delete a Cookie
 * @param string cname  Cookie Name
 */
function deleteCookie(cname) {
	setCookie(cname, '', -1);
}

/**
 * Replace variables in a string / template
 *
 * @param string  tpl     This should be a string containing <%name%> variables that will be replaced by JS.
 * @param json    data    This is the data object
 *
 * @return string         The updated string with the variables replaced
 *
 * @usage
 * var newString = PKTemplateEngine(stringTpl, {
                    dataID: 1,
                    name: James
                })
 */
function M59TemplateEngine(tpl, data) {
	var re = /<%([^%>]+)?%>/g, match;
	while(match = re.exec(tpl)) {
		tpl = tpl.replace(match[0], data[match[1]])
	}
	return tpl;
}
