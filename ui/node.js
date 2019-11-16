

//var globalNetwork
//


function addNodeToNetwork(x,y,w,h,type){
	type="vm";
	var net = {"x":x,"y":y,"width":w,"height":h,"type":type};
	globalNetwork.nodes.push(net);
	renderNodes();
}
