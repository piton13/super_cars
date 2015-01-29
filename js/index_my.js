$( document ).ready( function(){
  $.ajax({
    "url" : "data/supercars.json", 
    "dataType": "json",
    "success" : function( data ){
    		var content = "";
    		for(var i=0; i<data.models.length; i++) {
    			content += "<tr id="+i+"><td>"+data.brand+"</td><td>"+data.models[i].model+"</td><td>"+data.models[i].productionYear+"</td><td>"+data.models[i].engine+"</td><td>"+data.models[i].horsepower+"</td></tr>";
    		}
      	$("#table").html(content);
      	console.log(data.brand);
      	console.log(content);
      }
  });
  $("tr").on("click", function(e){
  	var id = this.id;
  	console.log(data.models[id], this);
  	alert("Brand: "+data[id].brand+"\nModel: "+data.models[id].model+"\nProduction Year: "+data[id].productionYear+"\nInfo: "+data[id].info+"\nEngine: "+data[id].engine+"\nHorse Power: "+data[id].horsepower);
  });
  $("table").dataTable();
  $("#example").dataTable();
});