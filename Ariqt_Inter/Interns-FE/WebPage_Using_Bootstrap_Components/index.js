const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.querySelector('#offcanvasNavbar');
navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    $("button.navbar-toggler").click();
  });
});