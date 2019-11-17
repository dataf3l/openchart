
function redrawAll(){
	renderEdges();
	renderNodes();
	renderNodeShadowBoxes();
}
// This is the main function
function init(){
	document.getElementById("body").addEventListener('mousemove', function(e) {
		mouseMoved(e)
	}, false);

	showButtonPalette();
	redrawAll();
	var peContainer = document.getElementById("propertyEditor");
	var handle = document.getElementById("peTitle");
	Drag.init(handle, peContainer);
	

        var canvas = document.getElementById('preview');
        var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);


	//TEST:
	//showPropertyEditor("propertyEditor",0,{"type":"vm","x":"10","y":"10","width":"100","height":"100","name":"webserver","id":"0"});
}
