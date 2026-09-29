/**
 * main.js
 * Detalles generales del sitio que no justifican un módulo propio.
 * Cargar siempre al final, después del resto de los módulos.
 */
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Al tocar "Pedir turno" en una tarjeta, se preselecciona ese servicio en el formulario
  const OPCIONES = {
    masoterapia: 'Masoterapia',
    facial: 'Tratamiento facial',
    corporal: 'Tratamiento corporal',
    quiromasaje: 'Quiromasajes (reducción y levantamiento de glúteo)',
    aromaterapia: 'Masoterapia con aromaterapia y limpieza energética',
    depilacion: 'Depilación láser definitiva',
  };
  const select = document.getElementById('servicio');
  document.querySelectorAll('.service-card').forEach((card) => {
    const btn = card.querySelector('.service-card__cta');
    if (!btn || !select) return;
    btn.addEventListener('click', () => {
      const opcion = OPCIONES[card.dataset.category];
      if (opcion) select.value = opcion;
    });
  });
})();
