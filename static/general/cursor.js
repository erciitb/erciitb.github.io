const cursor = document.getElementsByClassName("cursor")[0];

document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY - 10 + "px";
    cursor.style.left = e.clientX - 10 + "px";
})

const enlargeCursor = function(e) {
    cursor.classList.add("enlarged-cursor");
    if (e.type == 'mouseleave') cursor.classList.remove("enlarged-cursor");
}

const applyDifferenceFilterCursor = function(e) {
    cursor.classList.add("cursor-difference-filter");
    if (e.type == 'mouseleave') cursor.classList.remove("cursor-difference-filter");
}

const enlargeHovers = document.querySelectorAll(".hover-enlarge");
enlargeHovers.forEach(b => b.addEventListener('mousemove', enlargeCursor));
enlargeHovers.forEach(b => b.addEventListener('mouseleave', enlargeCursor));

const differenceHovers = document.querySelectorAll(".hover-difference");
differenceHovers.forEach(b => b.addEventListener('mousemove', applyDifferenceFilterCursor));
differenceHovers.forEach(b => b.addEventListener('mouseleave', applyDifferenceFilterCursor));