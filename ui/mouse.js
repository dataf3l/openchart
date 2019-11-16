/**
 * Handles user input
 * */


var globalDrawing = 0;
var globalConnecting = 0;
var coords = [];

function inside(x,y,node){
	var minx = node.x;
	var miny = node.y;
	var maxx = node.x + node.width;
	var maxy = node.y + node.height;

	if(x >= minx && x <= maxx && y >= miny && y <= maxy){
		return true;
	}
	return false;
}

function mouseMoved(e){
	var canvas = document.getElementById('preview');
        var ctx = canvas.getContext("2d");
	//ctx.clearRect(0, 0, canvas.width, canvas.height);

	// CONNECT MODE:
	if(e.altKey == true){
		draw_rect2(ctx,e.clientX-1,e.clientY-1,3,3,'magenta');
		coords.push([e.clientX,e.clientY]);// todo make more efficient

		if(globalConnecting == 0){
			globalConnecting = 1;
		}
	}else{
		if(globalConnecting == 1){
			// Drawing is over
			console.log(coords);
			var from = -1;
			var to = -1;
			for(var x=0;x<globalNetwork.nodes.length;x++){
				var node = globalNetwork.nodes[x];
				if(inside(coords[0][0],coords[0][1],node)){
					from = x;
					break;
				}
			}
			
			for(var x=0;x<globalNetwork.nodes.length;x++){
				var node = globalNetwork.nodes[x];
				if(inside(coords[coords.length-1][0],coords[coords.length-1][1],node)){				
					to = x;
					break;
				}
			}
			if(from==to){
				console.log("same, ignoring");
			}
			if(from>-1 && to>-1 && (from != to)){
				addEdgeToNetwork(from,to);
				redrawAll();

			}
			coords = [];
			globalConnecting = 0;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

		}
	}

	// CREATE MODE:
	if(e.shiftKey == true){
		draw_rect2(ctx,e.clientX-1,e.clientY-1,3,3,'blue');

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
			//setTimeout(function(){
			var name = prompt("Enter VM Name:","");
			if(name!=null){
				
				addNodeToNetwork(minx,miny,w,h,"lb",name);
				redrawAll();
			}
			//}},50);

			globalDrawing = 0;
			coords = [];
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
}
