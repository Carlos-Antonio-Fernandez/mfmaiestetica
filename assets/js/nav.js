/**
 * nav.js
 * Maneja el menú móvil (hamburguesa) y el efecto de sombra
 * en el header cuando el usuario hace scroll.
 */
(function () {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (!header || !navToggle || !nav) return;

  // Menú móvil
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cierra el menú al elegir una sección (mejor UX en mobile)
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Cierra el menú si se toca fuera del header
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      header.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Sombra del header al scrollear
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
