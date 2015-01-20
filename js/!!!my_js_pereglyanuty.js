

$(document).ready(function(){

	

	// Script for Bootstrap-tooltips
	
	

	

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