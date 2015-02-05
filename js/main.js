var dataCountry = [
{name: 'USA', models: ['Ford','Dodge Viper','Saleen','Chevrolet']} //,'Barracuda','Vector','SSC Aero','Plymouth','Pontiac GTO','Mustang','Mosler','Cizeta','Chevrolet Camaro'
, {name: 'Italia', models: ['Ferrari','Maserati','Lamborghini','Pagani','Alfa Romeo','De Tomaso']}
, {name: 'Germany', models: ['McLaren','Mercedes-Benz','BMW','Audi','Porsche']} //'Gumpert',,'Isdera
, {name: 'France', models: ['Bugatti']}
, {name: 'United Kingdom', models: ['Rolls-Royce','Jaguar','Bentley','Lotus','Aston Martin']} //,'Lister','Panther','Stealth','TVR','Ascari','Cobra','Ultima'
, {name: 'Japan', models: ['Toyota','Acura','Lexus','Nissan']}
// , {name: 'Netherlands', models: ['Spyker']}
, {name: 'Sweden', models: ['Koenigsegg']}
// , {name: 'Spain', models: ['GTA']}
// , {name: 'Australia', models: ['Holden Monaro']}
];


$(document).ready(function(){

	//Script for creating SideBar;
	dataCountry = _.sortBy(dataCountry, function (country) { return country.name;});
	for(var i=0; i<dataCountry.length; i++) {
		dataCountry[i].models.sort();
		// dataCountry[i].models = _.sortBy(dataCountry[i].models);
		document.getElementById('accordeon').innerHTML += '<li class="panel panel-default"><a href="#collapse-'+i+'" data-toggle="collapse" data-parent="#accordeon">'+dataCountry[i].name+'<span class="sr-only">'+dataCountry[i].name+' country</span></a><ul id="collapse-'+i+'" class="panel-collapse collapse list-unstyled"></ul></li>';
		
		for(var j=0; j<dataCountry[i].models.length; j++) {
			document.getElementById('collapse-'+i).innerHTML += '<li id="'+dataCountry[i].models[j].toLowerCase()+'"><a>'+dataCountry[i].models[j]+'</a></li>';
		}
	}

	// Script for Back_to_top click
	//for Chrome; 
	$("#BackToTop").on('click', function(e){
		$('body').scrollTop(0);
	});
	// for Firefox;
	$("#BackToTop").on('click', function(e){
		$('html').scrollTop(0);
	});

	// Script for loading startPage;
	$.ajax({
		"url": "data/startPage.txt",
		"dataType": "text",
		"method" : "GET",
		"success": function(data){
			$(".main-content").html(data);
		}
	});

	// Script for change content
	// 
	$("[href=#about]").on('click', function(){
		$.ajax({
			"url": "data/about.txt",
			"method" : "GET",
			"dataType": "text",
			"success": function(data){
				$(".main-content").html(data);
			}
		});
	});
	$("[href=#home]").on('click', function(){
		$.ajax({
			"url": "data/startPage.txt",
			"method" : "GET",
			"dataType": "text",
			"success": function(data){
				$(".main-content").html(data);
			}
		});
	});
	$("[href=#contacts]").on('click', function(){
		$.ajax({
			"url": "data/myContacts.txt",
			"method" : "GET",
			"dataType": "text",
			"success": function(data){
				$(".main-content").html(data);
			}
		});
	});
	$("[href=#listcars]").on('click', function(){
		$('.main-content').html($('#ListSuperCars').html());
		// Test AJAX
		$.ajax({
			"url" : "data/supercars.json",
			"method" : "GET",
			"dataType" : "json",
			"success" : function( data ){
	  		var content;
	  		for (var k=0; k<data.countries.length; k++) {
	  			for(var i=0; i<data.countries[k].brands.length; i++) {
		        for(var j=0; j<data.countries[k].brands[i].models.length; j++) {
		        	// content = "";
		        	// $("#table").append(content);
		        	// console.log(content);
		          // content += "<tr><td class=visible-lg>"+data.country+"</td><td>"+data.brands[i].brand+"</td><td>"+data.brands[i].models[j].model+"</td><td class=hidden-xs>"+data.brands[i].models[j].productionYear+"</td><td class=visible-lg>"+data.brands[i].models[j].engine+"</td><td class=\u0022visible-md visible-lg\u0022>"+data.brands[i].models[j].horsepower+"</td></tr>";
							content = "<tr id='table-id-"+i+""+j+"'><td class=visible-lg>"+data.countries[k].country+"</td><td>"+data.countries[k].brands[i].brand+"</td><td>"+data.countries[k].brands[i].models[j].model+"</td><td class=hidden-xs>"+data.countries[k].brands[i].models[j].productionYear+"</td><td class=visible-lg>"+data.countries[k].brands[i].models[j].engine+"</td><td class='visible-md visible-lg'>"+data.countries[k].brands[i].models[j].horsepower+"</td></tr>";
		          $("#table").append(content);
		          // $("#table-id-"+i+""+j).append(content);
		          // console.log(content);
		        }
		  		}
		  	}
	  	$('table').dataTable();
	  	$('#example').dataTable();
	    }
		});
	});

	// Script for toggle main-content Tabs;
	/*$.ajax({
		"url" : "data/supercars.json",
		"dataType" : "json",
		"method" : "GET",
		"success" : function( data ){
      var content;
      for(var i=0; i<data.brands.length; i++) {
        if (data.brands[i].brand === "BMW") {
          content = "<div role='tabpanel'><ul id='tab-toggler' class='nav nav-tabs' role='tablist'></ul><div class='tab-content'></div></div>";
          $("#tabulyatory").html(content);
          for(var j=0; j<data.brands[i].models.length; j++) {
          	if (j===0) {
          		content = "<li role='presentation' class='active'><a href='#car"+j+"' aria-controls='car"+j+"' role='tab' data-toggle='tab'>"+data.brands[i].models[j].model.toUpperCase()+"</a></li>";
          		$("#tab-toggler").append(content);
          	} else { content = "<li role='presentation'><a href='#car"+j+"' aria-controls='car"+j+"' role='tab' data-toggle='tab'>"+data.brands[i].models[j].model.toUpperCase()+"</a></li>";
            $("#tab-toggler").append(content);
            }
            if (j===0) {
            	content = "<div role='tabpanel' class='tab-pane active' id='car"+j+"'>This is car №"+(j+1)+"\n\n\tProduction Year: "+data.brands[i].models[j].productionYear+"\nEngine: "+data.brands[i].models[j].engine+"\nHorse Power: "+data.brands[i].models[j].horsepower+"</div>";
            	$(".tab-content").append(content);
            } else {
            	content = "<div role='tabpanel' class='tab-pane' id='car"+j+"'>This is car №"+(j+1)+"\n\n\tProduction Year: "+data.brands[i].models[j].productionYear+"\nEngine: "+data.brands[i].models[j].engine+"\nHorse Power: "+data.brands[i].models[j].horsepower+"</div>";
            	$(".tab-content").append(content);
            }
        	}
      	}
    	}
  	}
	});*/

	// Script for reacting on click over sideBar;
	$("#accordeon li").on('click', function(e) {
		var id = this.id;
		console.log(id);
		$.ajax({
			"url" : "data/supercars.json",
			"method" : "GET",
			"dataType" : "json",
			"success" : function( data ){
        var content;
      	for(var k=0; k<data.countries.length; k++) {
        	for(var i=0; i<data.countries[k].brands.length; i++) {
            if (data.countries[k].brands[i].brand.toLowerCase() === id) {
              content = "<div role='tabpanel'><ul id='tab-toggler' class='nav nav-tabs' role='tablist'></ul><div class='tab-content'></div></div>";
              $(".main-content").html(content);
              for(var j=0; j<data.countries[k].brands[i].models.length; j++) {
              	if (j===0) {
              		content = "<li role='presentation' class='active'><a href='#car"+j+"' aria-controls='car"+j+"' role='tab' data-toggle='tab'>"+data.countries[k].brands[i].models[j].model.toUpperCase()+"</a></li>";
              		$("#tab-toggler").append(content);
              	} else { content = "<li role='presentation'><a href='#car"+j+"' aria-controls='car"+j+"' role='tab' data-toggle='tab'>"+data.countries[k].brands[i].models[j].model.toUpperCase()+"</a></li>";
                $("#tab-toggler").append(content);
                }
                if (j===0) {
                	content = "<div role='tabpanel' class='tab-pane active' id='car"+j+"'>This is car №"+(j+1)+"\n\n\tProduction Year: "+data.countries[k].brands[i].models[j].productionYear+"\nEngine: "+data.countries[k].brands[i].models[j].engine+"\nHorse Power: "+data.countries[k].brands[i].models[j].horsepower+"</div>";
                	$(".tab-content").append(content);
                } else {
                	content = "<div role='tabpanel' class='tab-pane' id='car"+j+"'>This is car №"+(j+1)+"\n\n\tProduction Year: "+data.countries[k].brands[i].models[j].productionYear+"\nEngine: "+data.countries[k].brands[i].models[j].engine+"\nHorse Power: "+data.countries[k].brands[i].models[j].horsepower+"</div>";
                	$(".tab-content").append(content);
                }
            	}
          	}
        	}
      	}
	  	}
		});
	});

}); // -> ready_end;