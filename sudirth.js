function showSection(sectionId) {
  document.querySelectorAll('.dashboard-section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  // Highlight the right nav button
  const sectionNames = ["profile", "support", "resources", "testimonials"];
  const idx = sectionNames.indexOf(sectionId);
  if (idx !== -1) {
    document.querySelectorAll('.nav-btn')[idx].classList.add('active');
  }
}

// Show profile by default on load
document.addEventListener('DOMContentLoaded', () => {
  showSection('profile');
});
