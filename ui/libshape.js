/** The purpose of ths file is to match shapes to drawings */


// points: [{x:10,y:10},{x:10,y:10},{x:10,y:10}]
// output: 
// 	"vm": Circle, 
// 	"lb": Triangle, 
// 	"db": DB Shaped thing
// 	""
function getShape(points){

}

// API Request: stores data from network onto local variable net
function loadFromAPI(networkName){
	//fetch api
}

//call API to render
function saveToAPI(networkName, net){
	// Save
	
}
//Do Render 
function doRender(networkName, net){
	alert("Rendering:" + networkName+"::" + JSON.Stringify(net));
}
var globalNetworkName="sample";
function getNetworkName(){
	return globalNetworkName;
}
var globalNetwork;
function getNetwork(){
	return globalNetwork;
}
function getMenuOptions(){
	return ("<div>"+
		"<a href='#' onclick='loadFromAPI(prompt(\"Network Name:\"))' > Load</a>&nbsp;"+
		"<a href='#' onclick='loadFromAPI(prompt(\"Network Name:\"))' > Save</a>&nbsp;"+
		"<a href='#' onclick='SaveToAPI(prompt(\"Network Name:\"))' > Render</a>&nbsp;"+
		"<a href='#' onclick='doRender(getNetworkName(),getNetwork())' > Load</a>&nbsp;"+
		"</div>")
}
