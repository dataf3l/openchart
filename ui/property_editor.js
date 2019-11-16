function propertyChanged(nodeId,propertyName,newValue){

}

// node: an object, i.e.
// brew update && brew install azure-cli
// {"type":"vm","x":"10","y":"10","width":"100","height":"100","name":"webserver","id":"0"}
// if node has no properties, add an empty array.
// for each property, show a text box
// when the textboxcontent changes, call: propertyChanged()
function showPropertyEditor(targetDivId, nodeId, node) {
	return (
		"<div><label>Name:   </label> <input type='text' value=' " + node.type +" '> <br>"+
		      <label>x:      </label> <input type='text' value=' " + node.x +" '> <br>"+
		      <label>y:      </label> <input type='text' value=' " + node.y + " '> <br>"+
		      <label>width:  </label> <input type='text' value=' " + node.width + " '> <br>"+ 
		      <label>height: </label> <input type='text' value=' " + node.height + " '> <br>"+ 
		      <label>name:   </label> <input type='text' value=' " + node.name + " '> <br>"+ 
		      <label>id:     </label> <input type='text' value=' " + node.id + " '> <br>"+ 
		</div>"
		)
}
