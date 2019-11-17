// Renderer code here

var globalCost =  {
   "lb":{
      "cost":"100",
      "tasks":[
	      {"name":"//Create an IP Address\n  az network public-ip create --resource-group MyResourceGroup --name #nameIP","cost":"10"},
	      {"name":"//Create Load Balancer\n  az network lb create     --resource-group myResourceGroupLB     --name #name     --public-ip-address #nameIP     --frontend-ip-name myFrontEndPool     --backend-pool-name myBackEndPool","cost":"10"},
	      {"name":"//Create the health probe \naz network lb probe create --resource-group myResourceGroupLB      --lb-name #name --name #nameHealthProbe      --protocol tcp      --port 80","cost":"10"},
	      {"name":"//Create the load balancer rule \naz network lb rule create --resource-group MyResourceGroup --lb-name #name --name #nameHTTPRule --protocol tcp --frontend-port 80 --backend-port 80 --frontend-ip-name myFrontEndPool --backend-pool-name myBackEndPool --probe-name #nameHealthProbe","cost":"10"}
      ]
   },
   "vm":{
      "cost":"152",
      "tasks":[
	      {"name":"//Provision a Virtual Machine\n// https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az-vm-create \naz vm create -n #name -g MyResourceGroup --image UbuntuLTS","cost":"100"}
      ]
   },
   "storage":{
      "cost":"21",
      "tasks":[
	      {"name":"//Create Storage thing","cost":"21"}
      ]
   },
   "db":{
      "cost":"1472",
      "tasks":[
         {"name":"//Write SQL Scripts","cost":"100"},
         {"name":"//Load Dump from SQL onto server","cost":"50"},
         {"name":"//Verify the Script loaded correctly","cost":"50"},
         {"name":"//Connect SQL SERVER Management Studio to Azure Instance","cost":"100"}
      ]
   },
   "rg":{
      "cost":"0",
      "tasks":[
         {"name":"//Create Resource Group \naz network public-ip create --resource-group #name","cost":"0"}
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
			tasks.push("\n"+task.name.replace(new RegExp("#name","gi"),node.name));
		}

	}

	alert("Cost Estimate:" + totalCost+ "\nTask Count:"+tasks.length+"\n"+tasks.join("\n"));
	
}
