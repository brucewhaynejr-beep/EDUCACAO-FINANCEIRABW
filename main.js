document.addEventListener('DOMContentLoaded', function () {
      const navToggle = document.querySelector('.nav-toggle');
      const navMenu = document.querySelector('.nav-menu');

      if (navToggle && navMenu) {
          navToggle.addEventListener('click', function () {
              navToggle.classList.toggle('active');
              navMenu.classList.toggle('open');
          });
      }

      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              if (navMenu) {
                  navMenu.classList.remove('open');
              }
          });
      });

      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
          contactForm.addEventListener('submit', function (e) {
              e.preventDefault();
              const name = document.getElementById('name').value.trim();
              const email = document.getElementById('email').value.trim();
              const message = document.getElementById('message').value.trim();

              if (!name || !email || !message) {
                  alert('Por favor, preencha todos os campos.');
                  return;
              }

              if (!email.includes('@') || !email.includes('.')) {
                  alert('Por favor, insira um e-mail válido.');
                  return;
              }

              alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
              contactForm.reset();
          });
      }
  });
