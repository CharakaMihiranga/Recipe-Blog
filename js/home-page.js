document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');

  menuButton.addEventListener('click', function () {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
});
