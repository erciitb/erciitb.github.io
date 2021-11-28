const scrollBot = document.querySelector("#scroll-bot img");
const scrollBotContainer = document.querySelector("#scroll-bot");

const body = document.body;
const html = document.documentElement;
let bodyScrollHeight = body.scrollHeight;
let bodyOffset = body.offsetHeight; // actually windowHeight but that is already declared somewhere
// let bodyOffset = bodyOffset;

// scroll = 100% => scrollY = bodyOffset
// scroll = 0 => scrollY = bodyScrollHeight
// converting this to linear function
let scrollFuncSlope = 1 / (bodyScrollHeight - bodyOffset);
let scrollFuncIntercept = -bodyOffset * scrollFuncSlope;

window.addEventListener("scroll", adjustScollImage);

function adjustScollImage() {
  let scrollPosition = this.scrollY + bodyOffset;
  percentScrolled =
    1 - (scrollFuncSlope * scrollPosition + scrollFuncIntercept);
  scrollBot.style.top = percentScrolled * bodyOffset - 50 + "px";
  // console.log(
  //   this.scrollY + bodyOffset,
  //   percentScrolled,
  //   scrollFuncSlope,
  //   scrollFuncIntercept,
  //   bodyOffset,
  //   bodyScrollHeight
  // );
}

// refresh scroll values after each 3 seconds
let initTime = 2000;
// refreshing values
const refreshScrollValues = () => {
  // console.log("refreshing scroll values");
  bodyScrollHeight = body.scrollHeight;
  bodyOffset = body.offsetHeight;
  scrollFuncSlope = 1 / (bodyOffset - bodyScrollHeight);
  scrollFuncIntercept = -bodyScrollHeight * scrollFuncSlope;
  // exponentially increasing the time for checking
  initTime *= 2;
};

// false means that the person is scrolling
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

// still not complete - randomly goes up and down - my guess problem in clientY, rest is going smoothly
function handleScrollBot(e) {
  return;
  if (scrollActivated) {
    // getting y position of mouse
    // console.log("scrollBot pressed!", mouseY)

    scrollBot.style.top = e.clientY - 50 + "px";
    let windowScroll = (e.clientY / bodyOffset) * bodyScrollHeight;
    window.scrollTo(0, windowScroll);

    console.log("Scrolling to: ", windowScroll, " scroll bot at: ", e.clientY);
  } else {
    // console.log("scroll not activated!");
  }
}
// checking the platform
// handled with scrollbar for others - bringing back scroll bot for firefox - next 4 lines are check
// var userAg = navigator.userAgent;
// console.log(userAg);
// console.log( userAg.indexOf("Chrome"), userAg.indexOf("Firefox"));
// console.log( userAg.indexOf("Opera"), userAg.indexOf("MSIE"), userAg.indexOf("Safari"));
if (navigator.userAgent.indexOf("Firefox") != -1 && windowWidth > 768) {
  // console.log("Firefox detected");

  scrollBotContainer.style.display = "block";
  setInterval(refreshScrollValues, initTime);

  // vanishing and reappearing on window resize
  window.addEventListener("resize", function () {
    initTime = 1000; // resetting scroll time
    refreshScrollValues();
    if (windowWidth < 768) {
      scrollBotContainer.style.display = "none";
    } else {
      scrollBotContainer.style.display = "block";
    }
  });
}
