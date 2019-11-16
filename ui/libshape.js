/** The purpose of ths file is to match shapes to drawings */

var globalNetworkName="sample";
var globalNetwork = {"nodes":[],"edges":[]};



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
	var net = localStorage.getItem(networkName) ? JSON.parse(localStorage.getItem(networkName)) : {"nodes":[],"edges":[]};
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

function getNetworkName(){
	return globalNetworkName;
}
function getNetwork(){
	return globalNetwork;
}
function getMenuOptions(){
	return ("<div class=palette>"+
		"<a class='palette-item' href='#' onclick='loadFromAPI(prompt(\"Network Name:\"))' > Load</a>&nbsp;"+
		"<a class='palette-item' href='#' onclick='SaveToAPI(prompt(\"Network Name:\"))' > Save</a>&nbsp;"+
		"<a class='palette-item' href='#' onclick='doRender()' > Render</a>&nbsp;"+
		"</div>")
}
function showButtonPalette(){
	document.getElementById("toolbar").innerHTML = getMenuOptions();
}
