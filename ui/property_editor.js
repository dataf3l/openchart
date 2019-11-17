function propertyChanged(nodeId,propertyName,newValue){
	globalNetwork.nodes[nodeId][propertyName] = newValue;
	redrawAll();
}
function ucwords(x){
	return x[0].toUpperCase()+x.replace("_"," ").slice(1);
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

function showPropertyEditor(targetDivId, nodeId) {
	var node = globalNetwork.nodes[nodeId];
	var dx = "<div class='property-editor'><label class=\"property-label\">Node ID:" + nodeId+"</label><br/>";
	for(var p in node){
		var value = node[p];
		if(p == 'id'||p=='type'){// can't change type.
			continue;
		}
		dx += "<label class=\"property-label\">"+ucwords(p)+":   </label> <input onblur='propertyChanged("+nodeId+",\""+p+"\",this.value)' type='text' value='" + (""+value).replace("'","") +"'> <br/>\n";
	}
	dx += "</div>";
	document.getElementById(targetDivId).innerHTML = dx;

}





