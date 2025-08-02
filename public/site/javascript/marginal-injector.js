    fetch('site/injections/header.html')
      .then(res => res.text())
      .then(html => document.getElementById('header').innerHTML = html);

    fetch('site/injections/footer.html')
      .then(res => res.text())
      .then(html => document.getElementById('footer').innerHTML = html);