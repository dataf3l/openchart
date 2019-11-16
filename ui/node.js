

function updateNodePosition(id,target){
	globalNetwork.nodes[id].x = parseInt((""+target.style.left).replace("px",""),10);
	globalNetwork.nodes[id].y = parseInt((""+target.style.top).replace("px",""),10);
	redrawAll();
}
//var globalNetwork
//


function addNodeToNetwork(x,y,w,h,type,name){
	type="vm";
	var net = {"x":x,"y":y,"width":w,"height":h,"type":type,"name":name};
	globalNetwork.nodes.push(net);
}
