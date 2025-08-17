// Inject header
fetch('site/injections/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
  });

// Inject footer
fetch('site/injections/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });

// Event delegation for click-to-open dropdowns
document.addEventListener('click', function (e) {
  const toggle = e.target.closest('.dropdown-toggle');

  if (toggle) {
    e.preventDefault(); // Prevent default link behavior
    const menu = toggle.parentElement.querySelector('.dropdown-menu');
    if (menu) {
      menu.classList.toggle('open'); // Toggle open class
    }
  } else {
    // Click outside: close all open dropdowns
    document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
      menu.classList.remove('open');
    });
  }
});
