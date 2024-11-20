// Overlay
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// Front Page typed JS
var options = {
    strings: ["Software Engineer", "Web Developer"],
    typeSpeed: 100,  // speed of typing
    backSpeed: 50,   // speed of backspacing
    backDelay: 1000, // delay before backspacing
    loop: true       // loop the animation
};

var typed = new Typed(".typed", options);



