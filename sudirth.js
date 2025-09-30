// Tiny animation for the hero section headline and pride banner
document.addEventListener('DOMContentLoaded', () => {
  const heroHeadline = document.querySelector('.hero-section h2');
  if (heroHeadline) {
    heroHeadline.style.opacity = 0;
    setTimeout(() => {
      heroHeadline.style.transition = 'opacity 1.2s';
      heroHeadline.style.opacity = 1;
    }, 400);
  }
  // Animate the pride banner text
  const prideBanner = document.querySelector('.pride-banner span');
  if (prideBanner) {
    prideBanner.style.opacity = 0;
    setTimeout(() => {
      prideBanner.style.transition = 'opacity 1s';
      prideBanner.style.opacity = 1;
    }, 600);
  }
});