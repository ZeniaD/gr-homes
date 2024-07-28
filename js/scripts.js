window.addEventListener('DOMContentLoaded', event => {
  const navbarShrink = () =>{
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    }

    if (window.scrollY > 0) {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  };

  navbarShrink();
  document.addEventListener('scroll', navbarShrink);

  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    const scrollValue = window.scrollY;

    if (scrollValue < 40) {
      navbar.style.top = (40 - scrollValue) + 'px';
    } else {
      navbar.style.top = '0px';
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn[data-service]');
  const serviceDivs = document.querySelectorAll('.service-row');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const service = button.getAttribute('data-service');
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      serviceDivs.forEach(div => {
        if (div.id === service) {
          div.classList.add('active');
        } else {
          div.classList.remove('active');
        }
      });
    });
  });

  // Optional: Activate the first service by default
  if (buttons.length > 0) {
    buttons[0].click();
  }
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});