var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ["Early participants", "Bounty", "Advisors", "Team", "Development funds", "Participants"],
		datasets: [{
			label: '# of Votes',
			data: [10, 2, 3, 20, 10, 55],
			backgroundColor: [
				'#3f9bfe',
				'#72b5fe',
				'#98c9fe',
				'#cbe3fe',
				'#e4f0fe',
				'#007aff'
			],
		}]
	},
});

$(window).scroll(function() {
	if($(this).scrollTop()>800) {
		$( ".navbar" ).addClass("sticky-top");

	} else {
		$( ".navbar" ).removeClass("sticky-top");
	}
});

$(document).ready(function() {
	var carousel = $("#carousel");
	carousel.owlCarousel({
		items: 1,
		loop: true,
		pagination: true,
		itemsCustom : false,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	});
	$('#js-prev').click(function () {
		carousel.trigger('owl.prev');
		return false;
		});

	$('#js-next').click(function () {
		carousel.trigger('owl.next');

		return false;
	});
} );

$(document).ready(function() {

	$("#product").mouseenter(function(){
		$(this).addClass('hover-state');
	}).mouseleave(function(){
		$(this).removeClass('hover-state');
	});

	$("#play-video.video").click(function(e){
		e.preventDefault();

		$('#product').addClass('is-transparent');

		player = new YT.Player('player', {
			width : '100%',
			height : '100%',
			videoId : 'hdn2pFOKK8o',
			playerVars: { 'autoplay': 1 },
			events : {
				'onReady' : onPlayerReady,
				'onStateChange' : onPlayerStateChange
			}
		});
	});

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	function onPlayerReady(event) {
		//event.target.playVideo();
	}
	function onPlayerStateChange(event) {
		if(event.data == YT.PlayerState.ENDED) {
			player.destroy();
			$('#product').removeClass('is-transparent');
		}
	}

	$(".js-timer").countdown('2017/12/01 00:00:00', function(event) {
		$('.js-timer-days').text(event.strftime('%D'));
		$('.js-timer-hour').text(event.strftime('%H'));
		$('.js-timer-min').text(event.strftime('%M'));
		$('.js-timer-sec').text(event.strftime('%S'));
	});



 $('.js-timer-day')

   var count = 146; // произвольное число
   function tick() {

	   count += 1;
	   document.cookie = count;

	   $('.js-timer-day').text(count);
	   $('.js-timer-sum').text(count);

	   setTimeout(tick, 86400000); // рандом по времени обновления

   }
   tick();


	// //Попап менеджер FancyBox
	// //Документация: http://fancybox.net/howto
	// //<a class="fancybox"><img src="image.jpg" /></a>
	// //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	// //Плавный скролл до блока .div по клику на .scroll
	// //Документация: https://github.com/flesler/jquery.scrollTo
	// $("a.scroll").click(function() {
	// 	$.scrollTo($(".div"), 800, {
	// 		offset: -90
	// 	});
	// });
	// //Скролл до id, указанного в hash URL
	// var elem = window.location.hash;
	// if(elem) {
	// 	$.scrollTo(elem, 800, {
	// 		offset: -90
	// 	});
	// };


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

// // Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// // Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
// (function($, document, window, viewport) {
// 	function resizeWindow() {
// 		// $("a").click(function() {
// 		// 	if (viewport.is("lg")) {
// 		// 		return false;
// 		// 	};
// 		// });
// };
// $(document).ready(function() {
// 	resizeWindow();
// });
// $(window).bind("resize", function() {
// 	viewport.changed(function(){
// 		resizeWindow();
// 	});
// });
// })(jQuery, document, window, ResponsiveBootstrapToolkit);