// This is the main function
function init(){
	document.getElementById("body").addEventListener('mousemove', function(e) {
		mouseMoved(e)
	}, false);

	showButtonPalette();
	renderNodes();
	//TEST:
	showPropertyEditor("propertyEditor",0,{"type":"vm","x":"10","y":"10","width":"100","height":"100","name":"webserver","id":"0"});
}
