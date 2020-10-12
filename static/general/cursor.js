const cursor = document.getElementsByClassName("cursor")[0];

document.addEventListener('mousemove', e => {
	cursor.style.top = e.clientY - 10 + "px";
	cursor.style.left = e.clientX - 10 + "px";
})

const enlargeCursor = function(e) {
	cursor.style.scale = 2.5;
	if (e.type == 'mouseleave') cursor.style.scale = 1;
}

const applyDifferenceFilterCursor = function(e) {
	cursor.style.mixBlendMode = "difference";
	if (e.type == 'mouseleave') cursor.style.mixBlendMode = "normal";
}

const enlargeHovers = document.querySelectorAll(".hover-enlarge");
enlargeHovers.forEach(b => b.addEventListener('mousemove', enlargeCursor));
enlargeHovers.forEach(b => b.addEventListener('mouseleave', enlargeCursor));

const differenceHovers = document.querySelectorAll(".hover-difference");
differenceHovers.forEach(b => b.addEventListener('mousemove', applyDifferenceFilterCursor));
differenceHovers.forEach(b => b.addEventListener('mouseleave', applyDifferenceFilterCursor));
