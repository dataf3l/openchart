function propertyChanged(nodeId,propertyName,newValue){

}

// node: an object, i.e.
// brew update && brew install azure-cli
// {"type":"vm","x":"10","y":"10","width":"100","height":"100","name":"webserver","id":"0"}
// if node has no properties, add an empty array.
// for each property, show a text box
// when the textboxcontent changes, call: propertyChanged()
//type is not editable 
//id is not editable
//onblur call propertyChanged

function showPropertyEditor(targetDivId, nodeId, node) {
	return (
		"<div>
		<label>Name:   </label> <input onblur='propertyChanged("+nodeId+",\"type\",this.value)' type='text' value=' " + node.type +" '> <br>"+
		<label>x:      </label> <input onblur='propertyChanged("+nodeId+",\"x\",this.value)' type='text' value=' " + node.x +" '> <br>"+
		<label>y:      </label> <input onblur='propertyChanged("+nodeId+",\"y\",this.value)' type='text' value=' " + node.y + " '> <br>"+
		<label>width:  </label> <input onblur='propertyChanged("+nodeId+",\"width\",this.value)' type='text' value=' " + node.width + " '> <br>"+ 
		<label>height: </label> <input onblur='propertyChanged("+nodeId+",\"height\",this.value)' type='text' value=' " + node.height + " '> <br>"+
		<label>name:   </label> <input onblur='propertyChanged("+nodeId+",\"name\",this.value)' type='text' value=' " + node.name + " '> <br>"+ 
		<label>id:     </label> <input onblur='propertyChanged("+nodeId+",\"id\",this.value)' type='text' value=' " + node.id + " '> <br>"+
		</div>"
		)
}
