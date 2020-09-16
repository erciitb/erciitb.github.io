/*
==========================================
for animating the navbar
==========================================
*/
(function($) {
	"use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});

	//Animation

	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover

	$('body').on('mouseenter mouseleave', '.nav-item', function(e) {
		if ($(window).width() > 750) {
			var _d = $(e.target).closest('.nav-item');
			_d.addClass('show');
			setTimeout(function() {
				_d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
			}, 1);
		}
	});

	//Switch light/dark

	$("#switch").on('click', function() {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		} else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});

})(jQuery);

/*
==========================================
for animating the logo
==========================================
*/

const ercLogo = document.getElementById("erc-logo")
VanillaTilt.init( ercLogo, {
	max: 30,
    speed: 300, 
    scale: 1.1,
    reverse: true, 
    easing: "cubic-bezier(.13,.59,.85,.36)",
    // glare: true,
    // maxGlare: 0.8,
});


// // for fixing the width of the erc-container - scrollbar coming in
const ercLogoContainer = document.getElementById("erc-logo-container")
logoWidth = ercLogo.clientWidth
logoHeight = ercLogo.clientHeight
ercLogoContainer.style.width = logoWidth + "px";
ercLogoContainer.style.height = logoHeight + "px";
console.log( ercLogoContainer.style.width, ercLogoContainer.style.height)


/*
==========================================
For animating scroll bot
==========================================
*/
const scrollBot = document.querySelector("#scroll-bot img");
const scrollBotContainer = document.querySelector("#scroll-bot");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let scrollBotOffset = -50;

const body = document.body;
const html = document.documentElement;
const fullBodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight );

// marking end of the body
const ender = document.getElementsByClassName("ender")[0];
let enderPos = ender.getBoundingClientRect()['top'];
let usingEnder = false;
let scrollEndPosition = 0;

if ( 0.9 * fullBodyHeight <= enderPos <= 1.1 * fullBodyHeight ) {
	console.log('can do by enderPos');
	usingEnder = true;
	scrollEndPosition = enderPos - windowHeight;
}

let pxScrolled = 0;
let percentScrolled = 0;
// window.scroll = adjustScollImage(); 
window.addEventListener( "scroll", adjustScollImage);

function adjustScollImage() {
	let scrollYPos = this.scrollY;
	// getMousePosition(window.event);

	if (usingEnder) {
		percentScrolled = scrollYPos / scrollEndPosition * 100;
		scrollBot.style.top = percentScrolled + "%";
	} 
	else {
		console.log('scroll is broken');
		pxScrolled = scrollYPos / fullBodyHeight * windowHeight;
		scrollBot.style.top = pxScrolled + "px";
		// let percentScrolled = pxScrolled * 100;
	}
}


// on holding the mouse button, the page should scroll
var timeoutId = 0;

$('#scroll-bot img').on('mousedown', function(e) {
    let timeoutId = setInterval(getMousePosition(e), 1);
}).on('mouseup mouseleave', function() {
    clearTimeout(timeoutId);
});

function getMousePosition() {
	let e = window.event;

	console.log("Mouse position: ", e.clientX, e.clientY);
}

// bringing back scroll bot for firefox - next 4 lines are check
// var userAg = navigator.userAgent;
// console.log(userAg);
// console.log( userAg.indexOf("Chrome"), userAg.indexOf("Firefox"));
// console.log( userAg.indexOf("Opera"), userAg.indexOf("MSIE"), userAg.indexOf("Safari"));

if ( navigator.userAgent.indexOf("Firefox") != -1) {
	console.log("Firefox detected");
	scrollBotContainer.style.display = "block";
}


