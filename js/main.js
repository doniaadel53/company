
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar-example');
  const heroSection = document.getElementById('hero');
  const heroHeight = heroSection.offsetHeight;

  if (window.scrollY >= heroHeight) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});
// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block"; // Show button
  } else {
    mybutton.style.display = "none"; // Hide button
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
