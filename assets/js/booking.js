/**
 * booking.js
 * Toma los datos del formulario de turnos y arma un mensaje
 * prolijo para WhatsApp, ya que hoy no hay una agenda online
 * conectada. El día de mañana esto se puede reemplazar por una
 * integración real (Booksy, Calendly, sistema propio, etc.)
 * sin tocar el resto del sitio: solo esta función.
 */
(function () {
  // Número de WhatsApp del negocio, en formato internacional sin '+' ni espacios.
  
  const WHATSAPP_NUMBER = '5492644587125';

  const form = document.getElementById('bookingForm');
  if (!form) return;

  function formatFecha(valor) {
    if (!valor) return 'A coordinar';
    const [anio, mes, dia] = valor.split('-');
    return `${dia}/${mes}/${anio}`;
  }

  function buildMessage(data) {
    const lineas = [
      `Hola! Quiero reservar un turno en MF Maiestetica.`,
      `Nombre: ${data.nombre}`,
      `Teléfono: ${data.telefono}`,
      `Servicio: ${data.servicio}`,
      `Día preferido: ${formatFecha(data.dia)}`,
      `Horario preferido: ${data.horario || 'Indistinto'}`,
    ];
    if (data.comentario) {
      lineas.push(`Comentario: ${data.comentario}`);
    }
    return lineas.join('\n');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    const mensaje = buildMessage(data);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank', 'noopener');
  });
})();
