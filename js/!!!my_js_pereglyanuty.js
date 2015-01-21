var dataCountry = [
{name: 'USA', models: ['Ford','Dodge Viper','SSC Aero','Cizeta','Mosler','Saleen','Chevrolet Corvette','Chevrolet Camaro','Vector','Plymouth','Barracuda','Pontiac GTO','Mustang']},
{name: 'Italia', models: ['Ferrari','Maserati','Lamborghini','Pagani','Alfa Romeo','De Tomaso']},
{name: 'Germany', models: ['Mercedes','BMW','Audi','Porsche','Gumpert','Isdera']},
{name: 'France', models: ['Bugatti']},
{name: 'United Kingdom', models: ['Jaguar','Cobra','TVR','Lotus','Bentley','Aston Martin','Ascari','Lister','Stealth','Panther','Ultima']},
{name: 'Japan', models: ['Acura','Lexus','Nissan']},
{name: 'Netherlands', models: ['Spyker']},
{name: 'Sweden', models: ['Koenigsegg']},
{name: 'Spain', models: ['GTA']},
{name: 'Australia', models: ['Holden Monaro']}
];

$(document).ready(function(){

	// Script for Back_to_top click
	//for Chrome; 
	$("#BackToTop").on('click', function(e){
		$('body').scrollTop(0);
	});
	// for Firefox;
	$("#BackToTop").on('click', function(e){
		$('html').scrollTop(0);
	});

	// Script for Bootstrap-tooltips
	
	

	// Script for change content
	// 
	$("[href=#about]").on('click', function(e){
		$('.main-content').html($('#SuperCarsHistory').html());
	});
	$("[href=#home]").on('click', function(e){
		$('.main-content').html($('#StartPage').html());
	});
	$("[href=#contacts]").on('click', function(e){
		$('.main-content').html($('#MyContacts').html());
	});

	// Script for on-click by Contacts;
	
	// $('#contact').on('click', function(e){
	// 	alert('"Life": 093-74-83-972;\n"Kyivstar": 096-987-0-687;\n\nemail: igor13luk@gmail.com;\n\nskype: piton131313;');
	// });

	// Script for Taby;

	$('.tabs-control-link').on('click', function(e){
		e.preventDefault();

		var item = $(this).closest('.tabs-control-item'),
			contentItem = $('.tabs-item'),
			itemPosition = item.data('class');

		contentItem.filter('.tabs-item-'+ itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');
	});

	// Script for creating SideBar Navigation;
	// 
	// Sort by Country;
	// _.sortBy(dataCountry, function (country) { return country.name;});
	// 
	// Sort by Models;
	// _.sortBy(dataCountry[i].models);
	// 
	dataCountry = _.sortBy(dataCountry, function (country) { return country.name;});
	for(var i=0; i<dataCountry.length; i++) {
		dataCountry[i].models.sort();
		// dataCountry[i].models = _.sortBy(dataCountry[i].models);
		document.getElementById('accordeon').innerHTML += '<li class="panel panel-default"><a href="#collapse-'+i+'" data-toggle="collapse" data-parent="#accordeon">'+dataCountry[i].name+'<span class="sr-only">'+dataCountry[i].name+' country</span></a><ul id="collapse-'+i+'" class="panel-collapse collapse list-unstyled"></ul></li>';
		
		for(var j=0; j<dataCountry[i].models.length; j++) {
			document.getElementById('collapse-'+i).innerHTML += '<li><a href="#">'+dataCountry[i].models[j]+'</a></li>';
		}
	}
}); // -> ready_end;

// Accordeon;

// $(document).ready(function(){
// 	$('.accordeon_trigger').on('click', function(e){
// 		e.preventDefault();

// 		var $this = $(this),
// 				item = $this.closest('.accordeon_item'),
// 				list = $this.closest('.accordeon_list'),
// 				items = list.find('.accordeon_item'),
// 				content = item.find('.accordeon_inner'),
// 				otherContent = list.find('.accordeon_inner'),
// 				duration = 300;

// 			if (!item.hasClass('active'))	{
// 				item.addClass('active');
// 				items.removeClass('active');
// 				otherContent.stop(true, true).slideUp(duration);
// 				content.stop(true, true).slideDown(duration);
// 			} else {
// 				content.stop(true, true).slideUp(duration);
// 				item.stop(true, true).removeClass('active');
// 			}
// 	});
// });