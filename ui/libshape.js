/** The purpose of ths file is to match shapes to drawings */

var globalNetworkName="sample";
var globalNetwork = {"nodes":[],"edges":[]};
var globalPaletteTool="vm";

function setTool(tool){
	globalPaletteTool = tool;
}

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
	redrawAll();
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
	redrawAll();
}

function getNetworkName(){
	return globalNetworkName;
}
function getNetwork(){
	return globalNetwork;
}



function getMenuOptions(){   
	return ("<div class=palette>"+
		"<a class='palette-item' href='#' onclick='loadFromAPI(prompt(\"Network Name:\"))' >  &#128194 Load</a>&nbsp;"+
		"<a class='palette-item' href='#' onclick='SaveToAPI(prompt(\"Network Name:\"))' > &#128190; Save</a>&nbsp;"+
		"<a class='palette-item' href='#' onclick='doRender()' >&#9655; Render</a>&nbsp;"+
		"<a class='palette-item node-vm'      href='#' onclick='setTool(\"vm\")' > VM</a>&nbsp;"+//&#55357;
		"<a class='palette-item node-lb'      href='#' onclick='setTool(\"lb\")' > LB</a>&nbsp;"+//&#55356;
		"<a class='palette-item node-storage' href='#' onclick='setTool(\"storage\")' > Storage</a>&nbsp;"+//boxbox//&#128189;
		"<a class='palette-item node-db'      href='#' onclick='setTool(\"db\")' > DB</a>&nbsp;"+//&#9921;
		"</div>")
}
function showButtonPalette(){
	document.getElementById("toolbar").innerHTML = getMenuOptions();
}
