var dataCountry = [
{name: 'USA', models: ['Ford','Dodge-Viper','Saleen','Chevrolet']} //,'Barracuda','Vector','SSC Aero','Plymouth','Pontiac GTO','Mustang','Mosler','Cizeta','Chevrolet Camaro'
, {name: 'Italy', models: ['Ferrari','Maserati','Lamborghini','Pagani','Alfa-Romeo','De-Tomaso']}
, {name: 'Germany', models: ['McLaren','Mercedes-Benz','BMW','Audi','Porsche']} //'Gumpert',,'Isdera
, {name: 'France', models: ['Bugatti']}
, {name: 'United Kingdom', models: ['Rolls-Royce','Jaguar','Bentley','Lotus','Aston-Martin']} //,'Lister','Panther','Stealth','TVR','Ascari','Cobra','Ultima'
, {name: 'Japan', models: ['Toyota','Acura','Lexus','Nissan']}
// , {name: 'Netherlands', models: ['Spyker']}
, {name: 'Sweden', models: ['Koenigsegg']}
// , {name: 'Spain', models: ['GTA']}
// , {name: 'Australia', models: ['Holden Monaro']}
];


$(document).ready(function(){

	// Script for loading startPage;
	$.ajax({
		"url": "data/startPage.html",
		"dataType": "html",
		"method" : "GET",
		"success": function(data){
			$(".main-content").html(data);
		}
	});

	var reuseData=[];
	$.ajax({
		"url" : "data/supercars.json",
		"method" : "GET",
		"dataType" : "json",
		"success" : function( data ){
      // var content;
      reuseData=data.countries;
      // console.log(reuseData);
  	  var content,imgContent;
  		// for(var k=0; k<reuseData.length; k++) {
  	 //  	for(var i=0; i<reuseData[k].brands.length; i++) {
  	 //      if (reuseData[k].brands[i].brand.toLowerCase() === "bmw") {
  	 //        content = "<div role='tabpanel'><ul id='tab-toggler' class='nav nav-pills' role='tablist'></ul><div class='tab-content'></div></div>";
  	 //        $(".main-content").html(content);
  	 //        for(var j=0; j<reuseData[k].brands[i].models.length; j++) {
  	 //        	if (j===0) {
  	 //        		content = "<li role='presentation' class='active'><a href='#car"+j+"' aria-controls='car"+j+"' role='tab' data-toggle='tab'>"+reuseData[k].brands[i].models[j].model.toUpperCase()+"</a></li>";
  	 //        		$("#tab-toggler").append(content);
  	 //        	} else { content = "<li role='presentation'><a href='#car"+j+"' aria-controls='car"+j+"' role='tab' data-toggle='tab'>"+reuseData[k].brands[i].models[j].model.toUpperCase()+"</a></li>";
  	 //          $("#tab-toggler").append(content);
  	 //          }
  	 //          if (j===0) {
  	 //          	content = "";
  	 //          	content += "<div role='tabpanel' class='tab-pane active' id='car"+j+"'><p>This is car №"+(j+1)+"\n\n\tProduction Year: "+reuseData[k].brands[i].models[j].productionYear+"\nEngine: "+reuseData[k].brands[i].models[j].engine+"\nHorse Power: "+reuseData[k].brands[i].models[j].horsepower+"</p><div id='containerThumbnail' class='row'>";
  	 //          	for(var p=0; p<6; p++){
  	 //          		content += "<div class='col-sm-6 col-lg-4'><a href='#' class='thumbnail'><img src='data/img/"+reuseData[k].brands[i].brand.toLowerCase()+"/"+reuseData[k].brands[i].models[j].model.toLowerCase()+"/0"+(p+1)+".jpg' alt='this is Ferrari'></a></div>";
  	 //          	}
  	 //          	content += "</div><p class='share'><a>Visit our official site"+j+"</a><i class='fa fa-facebook-square fa-2x facebook'></i><i class='fa fa-google-plus-square fa-2x google-plus'></i><i class='fa fa-twitter-square fa-2x twitter'></i></p></div>";
  	 //          	$(".tab-content").append(content);
  	 //          	var doroga = "data/img/"+reuseData[k].brands[i].brand.toLowerCase()+"/"+reuseData[k].brands[i].models[j].model.toLowerCase()+"/0"+(p+1)+".jpg";
  	 //          	console.log(doroga);
  	 //          } else {
  	 //          	content = "";
  	 //          	content += "<div role='tabpanel' class='tab-pane' id='car"+j+"'><p>This is car №"+(j+1)+"\n\n\tProduction Year: "+reuseData[k].brands[i].models[j].productionYear+"\nEngine: "+reuseData[k].brands[i].models[j].engine+"\nHorse Power: "+reuseData[k].brands[i].models[j].horsepower+"</p><div id='containerThumbnail' class='row'>";
  	 //          	for(var p=0; p<6; p++){
  	 //          		content += "<div class='col-sm-6 col-lg-4'><a href='#' class='thumbnail'><img src='data/img/"+reuseData[k].brands[i].brand.toLowerCase()+"/"+reuseData[k].brands[i].models[j].model.toLowerCase()+"/0"+(p+1)+".jpg' alt='this is Ferrari'></a></div>";
  	 //          	}
  	 //          	content += "</div><p class='share'><a>Visit our official site"+j+"</a><i class='fa fa-facebook-square fa-2x facebook'></i><i class='fa fa-google-plus-square fa-2x google-plus'></i><i class='fa fa-twitter-square fa-2x twitter'></i></p></div>";
  	 //          	$(".tab-content").append(content);
  	 //          	var doroga = "data/img/"+reuseData[k].brands[i].brand.toLowerCase()+"/"+reuseData[k].brands[i].models[j].model.toLowerCase()+"/0"+(p+1)+".jpg";
  	 //          	console.log(doroga);
  	 //          }
  	 //      	}
  	 //    	}
  	 //  	}
  		// }
  	}
	});

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

	// Script for change content
	// 
	$("[href=#about]").on('click', function(){
		$.ajax({
			"url": "data/about.html",
			"method" : "GET",
			"dataType": "html",
			"success": function(data){
				$(".main-content").html(data);
			}
		});
	});
	$("[href=#home]").on('click', function(){
		$.ajax({
			"url": "data/startPage.html",
			"method" : "GET",
			"dataType": "html",
			"success": function(data){
				$(".main-content").html(data);
			}
		});
	});
	$("[href=#contacts]").on('click', function(){
		$.ajax({
			"url": "data/myContacts.html",
			"method" : "GET",
			"dataType": "html",
			"success": function(data){
				$(".main-content").html(data);
			}
		});
	});
	$("[href=#listcars]").on('click', function(){
		$.ajax({
			"url": "data/listOfSuperCars.html",
			"method" : "GET",
			"dataType": "html",
			"success": function(data){
				$(".main-content").html(data);
				var content;
				for (var k=0; k<reuseData.length; k++) {
					for(var i=0; i<reuseData[k].brands.length; i++) {
		        for(var j=0; j<reuseData[k].brands[i].models.length; j++) {
		        	// content = "";
		        	// $("#table").append(content);
		        	// console.log(content);
		          // content += "<tr><td class=visible-lg>"+data.country+"</td><td>"+data.brands[i].brand+"</td><td>"+data.brands[i].models[j].model+"</td><td class=hidden-xs>"+data.brands[i].models[j].productionYear+"</td><td class=visible-lg>"+data.brands[i].models[j].engine+"</td><td class=\u0022visible-md visible-lg\u0022>"+data.brands[i].models[j].horsepower+"</td></tr>";
							content = "<tr id='table-id-"+i+""+j+"'><td class=visible-lg>"+reuseData[k].country+"</td><td>"+reuseData[k].brands[i].brand+"</td><td>"+reuseData[k].brands[i].models[j].model+"</td><td class=hidden-xs>"+reuseData[k].brands[i].models[j].productionYear+"</td><td class=visible-lg>"+reuseData[k].brands[i].models[j].engine+"</td><td class='visible-md visible-lg'>"+reuseData[k].brands[i].models[j].horsepower+"</td></tr>";
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
		// $('.main-content').html($('#ListSuperCars').html());
	});
	
	// Script for reacting on click over sideBar;
	// Used templates;
	$("#accordeon li").on('click', function(e) {
		var id = this.id;
		console.log(id);
    var content,imgContent;
  	for(var k=0; k<reuseData.length; k++) {
	  	for(var i=0; i<reuseData[k].brands.length; i++) {
	      if (reuseData[k].brands[i].brand.toLowerCase() === id) {
	        // content = "<div role='tabpanel'><ul id='tab-toggler' class='nav nav-pills' role='tablist'></ul><div class='tab-content'></div></div>";
	        $('.main-content').html($('#TabListfromSideBar').html());
	        // $(".main-content").html(content);
	        for(var j=0; j<reuseData[k].brands[i].models.length; j++) {
	        	if (j===0) {
	        		content = "<li role='presentation' class='active'><a href='#car"+j+"' aria-controls='car"+j+"' role='tab' data-toggle='tab'>"+reuseData[k].brands[i].models[j].model.toUpperCase()+"</a></li>";
	        		$("#tab-toggler").append(content);
	        	} else { content = "<li role='presentation'><a href='#car"+j+"' aria-controls='car"+j+"' role='tab' data-toggle='tab'>"+reuseData[k].brands[i].models[j].model.toUpperCase()+"</a></li>";
	          $("#tab-toggler").append(content);
	          }
	          if (j===0) {
	          	content = "";
	          	content += "<div role='tabpanel' class='tab-pane active' id='car"+j+"'><p>This is car №"+(j+1)+"\n\n\tProduction Year: "+reuseData[k].brands[i].models[j].productionYear+"\nEngine: "+reuseData[k].brands[i].models[j].engine+"\nHorse Power: "+reuseData[k].brands[i].models[j].horsepower+"</p><div id='containerThumbnail' class='row'>";
	          	for(var p=0; p<6; p++){
	          		content += "<div id='containerThumbnail_inner' class='col-sm-6 col-lg-4'><a href='#' class='thumbnail'><img src='data/img/"+reuseData[k].brands[i].brand.toLowerCase()+"/"+reuseData[k].brands[i].models[j].model.toLowerCase()+"/0"+(p+1)+".jpg' alt='this is Ferrari'></a></div>";
	          	}
	          	content += "</div><p class='share'><a>Visit our official site"+j+"</a><i class='fa fa-facebook-square fa-2x facebook'></i><i class='fa fa-google-plus-square fa-2x google-plus'></i><i class='fa fa-twitter-square fa-2x twitter'></i></p></div>";
	          	$(".tab-content").append(content);
	          	// var doroga = "data/img/"+reuseData[k].brands[i].brand.toLowerCase()+"/"+reuseData[k].brands[i].models[j].model.toLowerCase()+"/0"+(p+1)+".jpg";
	          	// console.log(doroga);
	          } else {
	          	content = "";
	          	content += "<div role='tabpanel' class='tab-pane' id='car"+j+"'><p>This is car №"+(j+1)+"\n\n\tProduction Year: "+reuseData[k].brands[i].models[j].productionYear+"\nEngine: "+reuseData[k].brands[i].models[j].engine+"\nHorse Power: "+reuseData[k].brands[i].models[j].horsepower+"</p><div id='containerThumbnail' class='row'>";
	          	for(var p=0; p<6; p++){
	          		content += "<div class='col-sm-6 col-lg-4'><a href='#' class='thumbnail'><img src='data/img/"+reuseData[k].brands[i].brand.toLowerCase()+"/"+reuseData[k].brands[i].models[j].model.toLowerCase()+"/0"+(p+1)+".jpg' alt='this is Ferrari'></a></div>";
	          	}
	          	content += "</div><p class='share'><a>Visit our official site"+j+"</a><i class='fa fa-facebook-square fa-2x facebook'></i><i class='fa fa-google-plus-square fa-2x google-plus'></i><i class='fa fa-twitter-square fa-2x twitter'></i></p></div>";
	          	$(".tab-content").append(content);
	          	// var doroga = "data/img/"+reuseData[k].brands[i].brand.toLowerCase()+"/"+reuseData[k].brands[i].models[j].model.toLowerCase()+"/0"+(p+1)+".jpg";
	          	// console.log(doroga);
	          }
	      	}
	    	}
	  	}
		}
	});
	// $("#tab-toggler li a").click(function(e){
	// 	var id = this.id, hrf = this.href;
	// 	console.log(id);
	// 	console.log(hrf);
	// 	console.log(e);
	// });

}); // -> ready_end;