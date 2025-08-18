// Inject header
fetch('/site/injections/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
  });

// Inject footer
fetch('/site/injections/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });

// Unified dropdown handling
document.addEventListener('DOMContentLoaded', () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  document.body.addEventListener('mouseover', e => {
    if (isTouchDevice) return; // skip hover on touch devices

    const dropdown = e.target.closest('.dropdown');
    if (!dropdown) return;

    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) menu.classList.add('open');
  });

  document.body.addEventListener('mouseout', e => {
    if (isTouchDevice) return;

    const dropdown = e.target.closest('.dropdown');
    if (!dropdown) return;

    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) menu.classList.remove('open');
  });

  // Click-to-toggle (mobile & desktop fallback)
  document.body.addEventListener('click', e => {
    const toggle = e.target.closest('.dropdown-toggle');
    if (toggle) {
      e.preventDefault();
      const menu = toggle.parentElement.querySelector('.dropdown-menu');
      if (menu) menu.classList.toggle('open');
    } else {
      // Click outside: close all open dropdowns
      document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
        menu.classList.remove('open');
      });
    }
  });
});
