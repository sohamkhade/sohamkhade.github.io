// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-bs-toggle="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add the 'active' class to the clicked button
            button.classList.add('active');
        });
    });
});

var options = {
    strings: ["Software Engineer", "Web Developer"],
    typeSpeed: 100,  // speed of typing
    backSpeed: 50,   // speed of backspacing
    backDelay: 1000, // delay before backspacing
    loop: true       // loop the animation
  };

  var typed = new Typed(".typed", options);