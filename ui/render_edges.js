function renderEdges(){
        var canvas = document.getElementById('edges');
        var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if(!canvas){
		console.log("Canvas failed.");
		return;
	}


	for(var i=0;i<globalNetwork.edges.length;i++){
		var edge = globalNetwork.edges[i];
		var from = globalNetwork.nodes[edge.from];
		var to = globalNetwork.nodes[edge.to];
		if(edge.from == edge.to){
			console.log("How did this happen?");
		}
		var fx = from.x + from.width/2;
		var fy = from.y + from.height/2;

		var tx = to.x + to.width/2;
		var ty = to.y + to.height/2;

		line(ctx,fx,fy,tx,ty);
	}
}
