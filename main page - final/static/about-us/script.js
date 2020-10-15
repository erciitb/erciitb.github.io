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
            if ($(window).scrollTop() > 100) {
                document.getElementById("scrollBtn").style.display = "block";
            } else {
                $("#scrollBtn").fadeOut(200)
            }
        });

        $("#scrollBtn").click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            $("#scrollBtn").fadeOut(1200)
        });
    });
    //Animation
    //Animation

    $(document).ready(function() {
        $('body.hero-anime').removeClass('hero-anime');
        $(document).scroll(function() {
            if ($(window).scrollTop() > 20) {
                $(".navdark").css({
                    "background": "rgba(1,1,1,1)"
                })
            } else if ($(window).scrollTop() < 20) {
                $(".navdark").css({
                    "background": "rgba(0,0,0,0)"
                })
            }
            // else {
            //     $(".nav").css({
            //         "background": "#20c9c3",
            //         "position": "static"
            //     })
            // }

        });
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
After this part is added by Shubham Ojha
==========================================
*/
// some global variables
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

window.addEventListener( "resize", function() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
})

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

/*
==========================================
For animating scroll bot = this is only available for firefox till now
==========================================
*/

// handled with scrollbar for others - bringing back scroll bot for firefox - next 4 lines are check
// var userAg = navigator.userAgent;
// console.log(userAg);
// console.log( userAg.indexOf("Chrome"), userAg.indexOf("Firefox"));
// console.log( userAg.indexOf("Opera"), userAg.indexOf("MSIE"), userAg.indexOf("Safari"));

if ( navigator.userAgent.indexOf("Firefox") != -1 && windowWidth > 768) {
	console.log("Firefox detected");
	const scrollBot = document.querySelector("#scroll-bot img");
	const scrollBotContainer = document.querySelector("#scroll-bot");
	
	const body = document.body;
	const html = document.documentElement;
	const fullBodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight );
	
	// marking end of the body
	const ender = document.getElementsByClassName("ender")[0];
	let enderPos = ender.getBoundingClientRect()['top'];
	let usingEnder = false;
	let scrollEndPosition = 0;
	
	if ( 0.9 * fullBodyHeight <= enderPos <= 1.1 * fullBodyHeight ) {
		// console.log('can do by enderPos');
		usingEnder = true;
		scrollEndPosition = enderPos + windowHeight/4;  // this factor of 4 was selected based on trial and error
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
			alert("Scroll is broken! Please refresh the page! continue with the browsing if the error persists")
			pxScrolled = scrollYPos / fullBodyHeight * windowHeight;
			scrollBot.style.top = pxScrolled + "px";
			// let percentScrolled = pxScrolled * 100;
		}
	}
	
	// this means that the person is scrolling
	let scrollActivated = false;
	
	// adding event listeners 
	scrollBotContainer.addEventListener("mousedown", pressingDown, false);
	scrollBotContainer.addEventListener("mouseup", notPressingDown, false);
	scrollBotContainer.addEventListener("mousemove", handleScrollBot, false);
	window.addEventListener("mouseup", notPressingDown, false);
	
	function pressingDown(e) {
		scrollActivated = true;
		e.preventDefault();
		handleScrollBot(e);
	}
	
	function notPressingDown(e) {
		scrollActivated = false;
		e.preventDefault();
	}
	
	function handleScrollBot(e) {
		if (scrollActivated) {
			// getting y position of mouse
			let mouseY = e.clientY;
			// console.log("scrollBot pressed!", mouseY)
			
			let percentScrolled = mouseY/windowHeight * 100;
			window.scrollTo( 0, percentScrolled * scrollEndPosition / 100);
			// scrollBot.style.top = percentScrolled + "%";
			scrollBot.style.top = mouseY + "px";
			
			// console.log("Scrolling to: ", percentScrolled * scrollEndPosition / 100, " scroll bot at: ", mouseY, "scroll width is: ", scrollEndPosition);
		}
		else {
			// console.log("scroll not activated!");
		}
	}
	scrollBotContainer.style.display = "block";

	// vanishing and reappearing on window resize
	window.addEventListener( "resize", function() {
		if ( windowWidth < 768) {
			// console.log("run");
			scrollBotContainer.style.display = "none";
		}
		else {
			scrollBotContainer.style.display = "block";
		}
	})
}


