// Renderer code here

var globalCost =  {
   "lb":{
      "cost":"40",
      "tasks":[
	      {"name":"Define which hosts to use for Load Balancer","cost":"20"},
	      {"name":"Create Load Balancer","cost":"10"},
	      {"name":"test configuration works OK by taking some sites down","cost":"10"}
      ]
   },
   "vm":{
      "cost":"100",
      "tasks":[
	      {"name":"Provision a Virtual Machine","cost":"100"}
      ]
   },
   "webapp":{
      "cost":"250",
      "tasks":[
	      {"name":"Create AzureWebsites App and deploy app to the web","cost":"250"}
      ]
   },
   "db":{
      "cost":"300",
      "tasks":[
         {"name":"Write SQL Scripts","cost":"100"},
         {"name":"Load Dump from SQL onto server","cost":"50"},
         {"name":"Verify the Script loaded correctly","cost":"50"},
         {"name":"Connect SQL SERVER Management Studio to Azure Instance","cost":"100"}
      ]
   }
};


//Do Render 
function doRender(){

	// TODO: Include neeraj's code
	var totalCost = 0;
	var tasks = [];
	for(var x=0;x<globalNetwork.nodes.length;x++){
		var node = globalNetwork.nodes[x];
		var type = node.type;
		if(!(type in globalCost)){
			console.log("Unkown type:"+type);
			continue;
		}
		totalCost = totalCost + parseInt(globalCost[type].cost,10);
		for(var t=0;t<globalCost[type].tasks.length;t++){
			var task = globalCost[type].tasks[t];
			tasks.push(task.name);
		}

	}

	alert("Cost Estimate:" + totalCost+ "\nTask Count:"+tasks.length+"\n"+tasks.join("\n"));
}
