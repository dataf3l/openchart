 
// TODO: drag, connect, delete
function renderNodes(){
	var dx = "";
	for(var n=0;n<globalNetwork.nodes.length;n++){
		var node = globalNetwork.nodes[n];
		dx += "<div onmouseup=\"updateNodePosition("+n+",this);\" id=\"node"+n+"\" class='node node-"+node.type+"' style='position:absolute;left:"+node.x+"px;top:"+node.y+"px;width:"+Math.round(node.width)+"px;height:"+Math.round(node.height)+"px' onclick='nodeClicked("+n+")'>"+node.name+"<br/>("+node.type+")"+"</div>";
	}
	document.getElementById("mainDrawingArea").innerHTML = dx;

	var liveNodes = document.querySelectorAll(".node");
	for(var i=0;i<liveNodes.length;i++){
		var theHandle = liveNodes[i];//.querySelector(".handle");
		var theRoot   = liveNodes[i];

		Drag.init(theHandle, theRoot);
	}

}
function draw_rect(ctx,px1,py1,width,height){
	ctx.fillStyle = "rgb(230,230,230)";
	ctx.clearRect(px1, py1,width,height);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.setLineDash([10, 3]);
	ctx.strokeRect(px1, py1,width,height);

}
function draw_rect2(ctx,px1,py1,width,height,color){
	ctx.fillStyle = color;
	ctx.clearRect(px1, py1,width,height);
	ctx.strokeStyle = color;
	ctx.setLineDash([10, 3]);
	ctx.strokeRect(px1, py1,width,height);

}
function renderNodeShadowBoxes(){
        var canvas = document.getElementById('edges');
        var ctx = canvas.getContext("2d");
	
	var dx = "";
	for(var n=0;n<globalNetwork.nodes.length;n++){
		var node = globalNetwork.nodes[n];
		draw_rect(ctx,node.x,node.y,node.width,node.height)
	}
	
}
