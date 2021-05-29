	$(window).ready(function() {
		/* TypeIt */
		var instance = new TypeIt('.head .type', {
			speed: 40,
			autoStart: false
		});
	});

	$(document).ready(function() {
		$.extend({
			'goAnchor': function(to, time) {
				$obj = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$($obj).animate({
					scrollTop: to
				}, time);
			}
		});
		$('#button').click(function() {
			$.goAnchor($('#target').offset().top, 1000);
		});
	});
	$(window).scroll(function() {
		var $window = $(window).scrollTop();
		if ($window > 300) {
			$('a.totop').fadeIn(300);
		} else {
			$('a.totop').fadeOut(300);
		}
	})
	$(function() {
		//To top effect   
		$('a.totop').on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		})
	})