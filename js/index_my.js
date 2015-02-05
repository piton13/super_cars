$( document ).ready( function(){
  $.get("data/supercars.json", function( data ){
    		var content="";
    		for(var i=0; i<data.brands.length; i++) {
          for(var j=0; j<data.brands[i].models.length; j++) {
            content += "<tr><td class=visible-lg>"+data.country+"</td><td>"+data.brands[i].brand+"</td><td>"+data.brands[i].models[j].model+"</td><td class=hidden-xs>"+data.brands[i].models[j].productionYear+"</td><td class=visible-lg>"+data.brands[i].models[j].engine+"</td><td class=\u0022visible-md visible-lg\u0022>"+data.brands[i].models[j].horsepower+"</td></tr>";
          }
        $("#table").append(content);
        content = "";
    		}
      	
      	// console.log(data.brand);
      	// console.log(content);
      }
  );
  // Script for generating Tabs-content;
  
$("href=#BMW").on("click", function() {  $.get("data/supercars.json", function( data ){
        var content="";
        for(var i=0; i<data.brands.length; i++) {
          if (data.brands[i].brand === "BMW") {
            content += "<div role='tabpanel'><ul class='nav nav-tabs' role='tablist'></ul><div class='tab-content'></div></div>";
            $(".main-content").html(content);
//             for(var j=0; j<data.brands[i].models.length; j++) {
//               content += "<li role='presentation' class='active'><a href='#car"+j+"' aria-controls='home' role='tab' data-toggle='tab'>"+data.brands[i].models[j].model+"</a></li>
//               <li role='presentation'><a href='#profile' aria-controls='profile' role='tab' data-toggle='tab'>Profile</a></li>
// <li role='presentation'><a href='#messages' aria-controls='messages' role='tab' data-toggle='tab'>Messages</a></li>
// <li role='presentation'><a href='#settings' aria-controls='settings' role='tab' data-toggle='tab'>Settings</a></li>

// <div role='tabpanel' class='tab-pane active' id='home'></div>
// <div role='tabpanel' class='tab-pane' id='profile'></div>
// <div role='tabpanel' class='tab-pane' id='messages'></div>
// <div role='tabpanel' class='tab-pane' id='settings'></div>";
//             }
          }
          // for(var j=0; j<data.brands[i].models.length; j++) {
          //   content += "<tr><td class=visible-lg>"+data.country+"</td><td>"+data.brands[i].brand+"</td><td>"+data.brands[i].models[j].model+"</td><td class=hidden-xs>"+data.brands[i].models[j].productionYear+"</td><td class=visible-lg>"+data.brands[i].models[j].engine+"</td><td class=\u0022visible-md visible-lg\u0022>"+data.brands[i].models[j].horsepower+"</td></tr>";
          // }
        }
      }
  );
});


  // $("tr").on("click", function(e){
  //   var id = this.id;
  //   console.log(data.models[id], this);
  //   alert("Brand: "+data[id].brand+"\nModel: "+data.models[id].model+"\nProduction Year: "+data[id].productionYear+"\nInfo: "+data[id].info+"\nEngine: "+data[id].engine+"\nHorse Power: "+data[id].horsepower);
  // });
  $("td").on("click", function(e){
    var id = this.id;
    console.log(e, id, data.models[id], this);
  });

  $("table").dataTable();
  $("#example").dataTable();
  
  // $("#tabs").tabs();
});