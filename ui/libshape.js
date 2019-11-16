/** The purpose of ths file is to match shapes to drawings */


// points: [{x:10,y:10},{x:10,y:10},{x:10,y:10}]
// output: 
// 	"vm": Circle, 
// 	"lb": Triangle, 
// 	"db": DB Shaped thing
// 	""
function getShape(points){
	
	// determine square:
	// minpoints x,y
	// maxpoints x,y
	// draw square
}

// API Request: stores data from network onto local variable net
function loadFromAPI(networkName){
	//fetch api
	if(!localStorage){
		alert("Unsupported browser");
		return {};
	}
	var net = localStorage.getItem(networkName) ? JSON.parse(localStorage.getItem(networkName)) : {};
	return net;
}

//call API to render
function saveToAPI(networkName, net){
	if(!localStorage){
		prompt("Unsupported browser, copy and paste please:",JSON.Stringify(net));
		return;
	}
	// Save
	localStorage.setItem(networkName, JSON.Stringify(net));
}
//Do Render 
function doRender(networkName, net){
	// TODO: Include neeraj's code
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
	return ("<div class=palette>"+
		"<a class='palette-item' href='#' onclick='loadFromAPI(prompt(\"Network Name:\"))' > Load</a>&nbsp;"+
		"<a class='palette-item' href='#' onclick='loadFromAPI(prompt(\"Network Name:\"))' > Save</a>&nbsp;"+
		"<a class='palette-item' href='#' onclick='SaveToAPI(prompt(\"Network Name:\"))' > Render</a>&nbsp;"+
		"<a class='palette-item' href='#' onclick='doRender(getNetworkName(),getNetwork())' > Load</a>&nbsp;"+
		"</div>")
}
function showButtonPalette(){
	document.getElementById("toolbar").innerHTML = getMenuOptions();
}
