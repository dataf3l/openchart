
// TODO: drag, connect, delete
function renderNodes(){
	var dx = "";
	for(var n=0;n<globalNetwork.nodes.length;n++){
		var node = globalNetwork.nodes[n];
		dx += "<div class=node style='position:absolute;left:"+node.x+"px;top:"+node.y+"px;width:"+Math.round(node.width)+"px;height:"+Math.round(node.height)+"px' onclick='alert(1)'>"+node.type+"</div>";
	}
	document.getElementById("mainDrawingArea").innerHTML = dx;
	renderEdges();
}
