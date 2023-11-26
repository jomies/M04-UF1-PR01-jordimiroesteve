$(document).on('ready', function() {

	/* Responisve menu */
	$('.menu_reponsive-button').on('click', function () {
		$('.animated-icon').toggleClass('open');
	});
	if ( $('.carousel').length )
	{
		//var myCarousel = document.querySelector('#myCarousel')
		var myCarousel = $('.carousel');
		var carousel = new bootstrap.Carousel(myCarousel, {
			interval: 10000,
			ride: true,
			wrap: false
		})
		/*
		$('.carousel').carousel({
			interval: 10000,
			ride: true,
		});
		*/
	}
	
	if ( $('.sticky-top').length )
	{
		//$('.sticky-top').css('top', $('header').height() + 'px');
	}

	if ( $('.toggle-text').length )
	{
		$('.toggle-text').on('click', function(e) {
			e.preventDefault();
			var $container = $(this).parents('.card-text-toggable').find('.card-text');

			if ( $(this).hasClass('open') )
			{
				$(this).removeClass('open');
				$container.removeClass('open');
			}
			else
			{
				$(this).addClass('open');
				$container.addClass('open');
			}
		});
	}

	var hash = window.location.hash;
	if ( ! $.isEmptyObject(hash) )
	{
		var offset_top = 0; //$('header').height();
		goTo(hash, 500, offset_top);
	}

	if ( $('.menu-anchor').length )
	{
		$('.menu-anchor').on('click', function(e) {
			e.preventDefault();

			var anchor = $(this).attr('href');
			//$('.menu_reponsive-button').click();
			$('#menu-responsive').removeClass('show');
			$('.animated-icon').toggleClass('open');
			
			var offset_top = $('header').height();

			goTo(anchor, 500, offset_top);
		});
	}

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	$(window).on('activate.bs.scrollspy', function(e) {
		var hash, $node;

		hash = e.relatedTarget;

		history.replaceState({}, "", hash);
	
	//	$hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
	//	$node = $('#' + $hash);
	//	if ( $node.length ) {
	//		$node.attr('id', '');
	//	}
	//	document.location.hash = $hash;
	//	if ( $node.length ) {
	//		return $node.attr('id', $hash);
	//	}
		
	});

	checkHeader();
	checkToggables();

});

$(window).on('resize', function() {
	
	/* Responsive */
	resizeImages();
	
	checkHeader();
	checkToggables();
});


var position = $(window).scrollTop();
var down = true;

$(window).on('scroll', function() {
	
	var scroll = $(window).scrollTop();
	if ( scroll > position ) {
		down = true;
	} else {
		down = false;
	}
	position = scroll;

	//if ( $('.category-background').length )
	//{
	//	if ( ! scrolling && down && position < 10 ) {
	//		var cor = ($('header.fixed-top').height() * (-1));
	//		goTo('#breadcrumbs', cor);
	//	}
	//}
	
	var header_h = parseFloat( $('header.sticky-top').height() );

	if ( header_h < position && down ) {
		$('header.sticky-top').addClass('minified');
	} else if ( ! position ) {
		$('header.sticky-top').removeClass('minified');
	}

});

var resized_min = false;
var resized_max = false;
function resizeImages()
{
	if ( ! resized_min && $(window).width() <= 767 )
	{
		$('.card-img img').each(function() {
			var src = $(this).attr('src');
			if ( src && src.includes('w800_h800') ) {
				src.replace('w800_h800', 'w400_h255');
			}
			$(this).attr('src', src);
		});
		resized_min = true;
		resized_max = false;
	}
	else if ( ! resized_max && $(window).width() > 767 )
	{
		$('.card-img img').each(function() {
			var src = $(this).attr('src');
			if ( src && src.includes('w400_h255') ) {
				src.replace('w400_h255', 'w800_h800');
			}
			$(this).attr('src', src);
		});
		resized_max = true;
		resized_min = false;
	}
}

function checkHeader()
{
	if ( $('.header-init').length )
	{
		//$('.header-init').height( $('header').height() );
	}
}

function checkToggables()
{
	if ( $('.card-text-toggable').length )
	{
		$('.card-text-toggable').each(function(key, value) {
			
			var $container = $(this).find('.card-text');
			var $buttons = $(this).find('.toggable-buttons');

			$buttons.removeAttr('style');

			var container_h = $container.height();
			
			var childs_p = $container.children();
			var content_h = 0;
			$.each(childs_p, function(k,v) {
				content_h += $(v).height();
			});

			if ( content_h <= container_h ) {
				$buttons.hide();
			}
		});
	}
}
