const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const headlineSection = document.querySelector('.headlineSection');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  headlineSection.classList.toggle('active');
});
document.querySelectorAll('.nav-item').forEach((e) => e.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  headlineSection.classList.remove('active');
}));