function propertyChanged(nodeId,propertyName,newValue){

}

// node: an object, i.e.
// brew update && brew install azure-cli
// {"type":"vm","x":"10","y":"10","width":"100","height":"100","name":"webserver","id":"0"}
// if node has no properties, add an empty array.
// for each property, show a text box
// when the textboxcontent changes, call: propertyChanged()
function showPropertyEditor(targetDivId, nodeId, node) {
	if(node.length > 0){
		return (
			"<div>"+"Name:" +"<input type='text'>" + node.type +"<br>"+
		    	"x:" + "<input type='text'>" + node.x + "<br>"+
		    	"y:" + "<input type='text'>" + node.y + "<br>"+
		    	"width:" + "<input type='text'>" + node.width + "<br>"+ 
		    	"height:" + "<input type='text'>" + node.height + "<br>"+ 
		    	"name:" + "<input type="text">" + node.name + "<br>"+ 
		    	"id:" + "<input type="text">" + node.id + "<br>"+ 
			"</div>"
		)
	} else {
		return false;
	}
}
