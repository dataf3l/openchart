
//var globalNetwork
//


function addEdgeToNetwork(from,to){
	
	var edge = {"type":"edge","from":from,"to":to};
	globalNetwork.edges.push(edge);
	renderNodes();
}

