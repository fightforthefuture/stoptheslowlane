(function(){
  	//Banner height
	$(document).ready(function() {

		// JL NOTE ~ disabled because it was resizing to max height on my 30"
		/*
		var viewport_width = window.innerWidth;
		var viewport_height = window.innerHeight;

		if (viewport_height > 800) viewport_height =800;

		$('.banner,.hero').height((viewport_height));
		$(window).resize(function() {
		  var viewport_width = window.innerWidth;
		  var viewport_height = window.innerHeight;
			$('.banner,.carousel .item').css('min-height', viewport_height);
		});
		*/

		var initStream = function(elem, delay) {

			var rset = "01";
			var width = 250;
			var iterations = 0;
			var MAX_ITERATIONS = 30; // should be adjusted to fill 27" cinema
			var intervalId = setInterval(function() {
				if (iterations > MAX_ITERATIONS)
					return clearInterval(intervalId);
				else				
					iterations++;

				var buf = [];

				for(var i = 0; i < width; i++)
					buf[i]=rset[Math.floor(Math.random()*rset.length)]; 
				
			  	$("#"+elem).text($("#"+elem).text() + buf.join(''));
			}, delay);
		}

		initStream('cascade-one', 50);
		initStream('cascade-two', 300);
		initStream('cascade-three', 900);

	});

	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length?target:$('[name='+this.hash.slice(1)+']');
			if (target.length) {
				$('html,body').animate({scrollTop: target.offset().top}, 1000);
				return false;
			}
		}
	});

})();

