/**
 * Handles user input
 * */


var globalDrawing = 0;
var globalConnecting = 0;
var coords = [];
function mouseMoved(e){
	// CONNECT MODE:
	if(e.altKey == true){
		if(globalConnecting == 0){
			coords.push([e.clientX,e.clientY]);
			globalConnecting = 1;
		}
	}else{
		if(globalConnecting == 1){
			// Drawing is over
			//console.log(coords);
			var from = 0;
			var to = 1;
			addEdgeToNetwork(from,to);
			coords = [];
			globalConnecting = 0;

		}
	}

	// CREATE MODE:
	if(e.shiftKey == true){
		coords.push([e.clientX,e.clientY]);
		if(globalDrawing == 0){
			globalDrawing = 1;
		}
	}else{
		if(globalDrawing == 1){
			// Drawing is over
			//console.log(coords);

			// todo: interpret coordinates.
			shape = "square";
			var minx = 9999;
			var miny = 9999;
			var maxx = -9999;
			var maxy = -9999;

			for(var x=0;x<coords.length;x++){
				var c = {"x":coords[x][0],"y":coords[x][1]};

				if(c.x<=minx){minx = c.x;}
				if(c.y<=miny){miny = c.y;}
				if(c.x>=maxx){maxx = c.x;}
				if(c.y>=maxy){maxy = c.y;}
			}

			var w = (maxx - minx);
			var h = (maxy - miny);

			addNodeToNetwork(minx,miny,w,h,"vm");

			globalDrawing = 0;
			coords = [];
		}
	}
}
