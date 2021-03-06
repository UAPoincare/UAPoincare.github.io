var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ["Early participants", "Bounty", "Advisors", "Team", "Development funds", "Participants","                                       ", "                                        ","                                       ", "                                        "],
		datasets: [{
			label: '# of Votes',
			data: [10, 2, 3, 20, 10, 55, 0, 0, 0, 0],
			backgroundColor: [
				'#062cef',
				'#161bfd',
				'#010490',
				'#0142ff',
				'#00299e',
				'#0c7bf1',
				'#fff',
				'#fff',
				'#fff',
				'#fff',
			],
		}]
	},
});

var ctx1 = document.getElementById("myChart1");
var myChart1 = new Chart(ctx1, {
	type: 'doughnut',
	data: {
		labels: ["Social Media campaign", "Translation campaign", "Blog and YouTube campaign", "Signature campaign", "Telegram campaign", "Reddit campaign", "Miscellaneous"],
		datasets: [{
			label: '# of Votes',
			data: [35, 10, 15, 15, 10, 5, 5],
			backgroundColor: [
				'#4cb0ec',
				'#72aed2',
				'#0dc1e0',
				'#4ccae0',
				'#4aaabb',
				'#40e6d1',
				'#7de4d7'
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

	var carousel1 = $("#carousel-product1");
	var carousel2 = $("#carousel-product2");

	carousel1.owlCarousel({
		items: 1,
		loop: true,
		navigation: true,
		autoPlay: true,
	});
	carousel2.owlCarousel({
		items: 1,
		loop: true,
		navigation: true,
		autoPlay: true,
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

	$('.navbar-collapse a[href^="#"]').on('click', function () {
	    $('.navbar-collapse').collapse('hide');
	    $a = $($(this).attr('href'));
	    $('html,body').animate({ scrollTop: $a.offset().top - 50}, 500);
	    return false;
	});

	

	/*
	$("#product").mouseenter(function(){
		$(this).addClass('hover-state');
	}).mouseleave(function(){
		$(this).removeClass('hover-state');
	});
	*/

	$("#play-video.video").click(function(e){
		e.preventDefault();

		//$('#product').addClass('is-transparent');

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

	$(".js-timer").countdown('2017/12/07 00:00:00', function(event) {
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



	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			$(this).find('input').val('');
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