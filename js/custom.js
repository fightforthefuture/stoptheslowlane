(function(){
  "use strict";
//Banner height
$(document).ready(function() {

	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;

	$('.banner,.hero').height((viewport_height));
		$(window).resize(function() {
		  var viewport_width = window.innerWidth;
		  var viewport_height = window.innerHeight;
			$('.banner,.carousel .item').height((viewport_height));
		});
	});

	var initStreamOne = function() {

		var rset = "01";

		var width = 250;
		var height = 30;

		function setMetrics(){
		  var em = document.getElementById("stream-one");
		  var cw = em.clientWidth;
		  var ch = em.clientHeight;
		  var bw = document.body.clientWidth;
		  var bh = document.body.clientHeight;
		  width = Math.floor(bw/cw);
		  height = Math.floor(bh/ch);
		}

		setInterval(function(){
		  var buf = [];
		  for(var i = 0; i<width; i++){
		    buf[i]=rset[Math.floor(Math.random()*rset.length)]; 
		  }
		  
		  var cur = document.getElementById("cascade-one").textContent;
		  while((cur.match(/\n/g)||[]).length >= height)
		    cur = cur.replace(/[^\n]*\n/,'')
		document.getElementById("cascade-one").textContent =
		    cur + buf.join('');},
		  50);
	}

	var initStreamTwo = function() {

		var rset = "01";

		var width = 250;
		var height = 30;

		function setMetrics(){
		  var em = document.getElementById("stream-two");
		  var cw = em.clientWidth;
		  var ch = em.clientHeight;
		  var bw = document.body.clientWidth;
		  var bh = document.body.clientHeight;
		  width = Math.floor(bw/cw);
		  height = Math.floor(bh/ch);
		}

		setInterval(function(){
		  var buf = [];
		  for(var i = 0; i<width; i++){
		    buf[i]=rset[Math.floor(Math.random()*rset.length)]; 
		  }
		  
		  var cur = document.getElementById("cascade-two").textContent;
		  while((cur.match(/\n/g)||[]).length >= height)
		    cur = cur.replace(/[^\n]*\n/,'')
		document.getElementById("cascade-two").textContent =
		    cur + buf.join('');},
		  300);
	}

	var initStreamThree = function() {

		var rset = "01";

		var width = 250;
		var height = 30;

		function setMetrics(){
		  var em = document.getElementById("stream-three");
		  var cw = em.clientWidth;
		  var ch = em.clientHeight;
		  var bw = document.body.clientWidth;
		  var bh = document.body.clientHeight;
		  width = Math.floor(bw/cw);
		  height = Math.floor(bh/ch);
		}

		setInterval(function(){
		  var buf = [];
		  for(var i = 0; i<width; i++){
		    buf[i]=rset[Math.floor(Math.random()*rset.length)]; 
		  }
		  
		  var cur = document.getElementById("cascade-three").textContent;
		  while((cur.match(/\n/g)||[]).length >= height)
		    cur = cur.replace(/[^\n]*\n/,'')
		document.getElementById("cascade-three").textContent =
		    cur + buf.join('');},
		  900);
	}

	initStreamOne();
	initStreamTwo();
	initStreamThree();
	


})();

