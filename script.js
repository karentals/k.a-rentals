// Mobile menu toggle
const burger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (burger) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}
// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href && href.length > 1) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      mobileMenu?.classList.remove('open');
    }
  });
});
