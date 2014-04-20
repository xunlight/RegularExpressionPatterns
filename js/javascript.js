var patterns = {
	//*numbers
	//integer
	'integer': {
		'regex'    : /^?\d+$/,
		'errorMsg' : '* Not a valid integer'
	},
	'integer-': {
		'regex'    : /^[-]?\d+$/,
		'errorMsg' : '* Not a valid integer'
	},
	'integer+-': {
		'regex'    : /^[+-]?\d+$/,
		'errorMsg' : '* Not a valid integer'
	},
	//float
	'float':{
		'regex'    : /[0-9]*\.?[0-9]+/,
		'errorMsg' : '* Not a valid float'
	},
	'float-':{
		'regex'    : /[-]?[0-9]*\.?[0-9]+/,
		'errorMsg' : '* Not a valid float'
	},
	'float+-':{
		'regex'    : /[-+]?[0-9]*\.?[0-9]+/,
		'errorMsg' : '* Not a valid float'
	},
	'float,':{
		'regex'    : /[0-9]*\,?[0-9]+/,
		'errorMsg' : '* Not a valid float'
	},
	'float,-':{
		'regex'    : /[-]?[0-9]*\,?[0-9]+/,
		'errorMsg' : '* Not a valid float'
	},
	'float,+-':{
		'regex'    : /[-+]?[0-9]*\,?[0-9]+/,
		'errorMsg' : '* Not a valid float'
	},
	'float.,':{
		'regex'    : /[0-9]*[\.\,]?[0-9]+/,
		'errorMsg' : '* Not a valid float'
	},
	'float.,-':{
		'regex'    : /[-]?[0-9]*[\.\,]?[0-9]+/,
		'errorMsg' : '* Not a valid float'
	},
	'float.,+-':{
		'regex'    : /[-+]?[0-9]*[\.\,]?[0-9]+/,
		'errorMsg' : '* Not a valid float'
	},
	'number': {
		// Number, including positive, negative, and floating decimal. credit: orefalo
		'regex'    : /^[-+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
		'errorMsg' : '* Invalid floating decimal number'
	},
	'onlyNumberSp': {
		'regex'    : /^[0-9\ ]+$/,
		'errorMsg' : '* Numbers only'
	},
	//*web
	'email': {
		// HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
		'regex'    : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		'errorMsg' : '* Invalid email address'
	},
	'url': {
		'regex'    : /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
		'errorMsg' : '* Invalid URL'
	},	
	'ipv4': {	
		'regex'    : /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
		'errorMsg' : '* Invalid IP address'
	},
	//*database
	'onlyLetNumSpec': {	
		// Good for database fields
		'regex'    : /^[0-9a-zA-Z_-]+$/,
		'errorMsg' : '* Only Letters, Numbers, hyphen(-) and underscore(_) allowed'
	},
	//*special
	'onlyLetterSp': {
		'regex'    : /^[a-zA-Z\ \']+$/,
		'errorMsg' : '* Letters only'
	},
	'onlyLetterNumber': {
		'regex'    : /^[0-9a-zA-Z]+$/,
		'errorMsg' : '* No special characters allowed'
	},	

	'phone': {
		// credit: jquery.h5validate.js / orefalo
		'regex'    : /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
		'errorMsg' : '* Invalid phone number'
	}	
}
