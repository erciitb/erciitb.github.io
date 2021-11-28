/*
==========================================
for animating the navbar
==========================================
*/
(function ($) {
  "use strict";
  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 5000);
  }

  function showPage() {
    document.getElementById("loadpack").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
      if ($(window).scrollTop() > 100) {
        document.getElementById("scrollBtn").style.display = "block";
      } else {
        $("#scrollBtn").fadeOut(200);
      }
    });

    $("#scrollBtn").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      $("#scrollBtn").fadeOut(1200);
    });
  });
  //Animation
  //Animation

  $(document).ready(function () {
    $("body.hero-anime").removeClass("hero-anime");
    $(document).scroll(function () {
      if ($(window).scrollTop() > 20) {
        $(".navdark").css({
          background: "rgba(28,29,33,1)",
        });
      } else if ($(window).scrollTop() < 20) {
        $(".navdark").css({
          background: "rgba(0,0,0,0)",
        });
        $(".mobilenav").css({
          background: "rgba(0,0,0,0)",
        });
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

  $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest(".nav-item");
      _d.addClass("show");
      setTimeout(function () {
        _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 1);
    }
  });

  //Switch light/dark

  $("#switch").on("click", function () {
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

window.addEventListener("resize", function () {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
});

/*
==========================================
for animating the logo
==========================================
*/

const ercLogo = document.getElementById("erc-logo");
VanillaTilt.init(ercLogo, {
  max: 30,
  speed: 300,
  scale: 1.1,
  reverse: true,
  easing: "cubic-bezier(.13,.59,.85,.36)",
  reset: true,
  // "glare-prerender": true,
  // glare: true,
  // maxGlare: 0.8,
});

/*
==========================================
For the particles on the starting background
==========================================
*/

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

  // console.log('callback - particles.js config loaded');

/*
==========================================
For current section highlighting
==========================================
*/

// Add active class to the current button (highlight it)
var header = document.getElementById("navbarSupportedContent");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}
