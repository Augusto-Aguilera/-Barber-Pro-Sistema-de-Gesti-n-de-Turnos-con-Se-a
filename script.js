const services = [
    { name: "Corte Clásico", price: 3500, icon: "fa-cut" },
    { name: "Barba Real", price: 2000, icon: "fa-user-tie" },
    { name: "Corte + Barba", price: 5000, icon: "fa-mustache" },
    { name: "Color / Platinado", price: 8000, icon: "fa-paint-brush" }
];

let selectedService = null;
let selectedHour = null;
let isPaid = false;

// Cargar servicios originales
const grid = document.getElementById('services-grid');
services.forEach(s => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `<i class="fas ${s.icon}"></i> <strong>${s.name}</strong><br>$${s.price}`;
    card.onclick = () => {
        document.querySelectorAll('.service-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedService = s;
    };
    grid.appendChild(card);
});

function generateHours() {
    const container = document.getElementById('hours-container');
    container.innerHTML = "";
    const slots = ["10:00", "11:00", "12:00", "16:00", "17:00", "18:00", "19:00"];
    slots.forEach(h => {
        const btn = document.createElement('button');
        btn.className = 'hour-btn';
        btn.innerText = h;
        btn.onclick = (e) => {
            e.preventDefault();
            document.querySelectorAll('.hour-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedHour = h;
        };
        container.appendChild(btn);
    });
}

function simulatePayment(e) {
    e.preventDefault();
    alert("Simulando Mercado Pago... Pago Aprobado ✅");
    isPaid = true;
    document.getElementById('payment-status').innerText = "✅ SEÑA PAGADA CORRECTAMENTE";
    document.getElementById('payment-status').className = "status-success";
    const btn = document.getElementById('btn-confirm');
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
}

function confirmBooking() {
    const name = document.getElementById('client-name').value;
    const date = document.getElementById('booking-date').value;

    if (!selectedService || !name || !date || !selectedHour) {
        alert("Completá todos los campos.");
        return;
    }

    const turno = { cliente: name, servicio: selectedService.name, fecha: date, hora: selectedHour, pago: "SÍ ($1500)" };
    
    // USAMOS sessionStorage PARA QUE SE BORRE AL CERRAR
    let agenda = JSON.parse(sessionStorage.getItem('turnos_barberia')) || [];
    agenda.push(turno);
    sessionStorage.setItem('turnos_barberia', JSON.stringify(agenda));

    const msg = `💈 *NUEVA RESERVA*\n\n👤 Cliente: ${name}\n💇‍♂️ Servicio: ${selectedService.name}\n📅 Fecha: ${date}\n⏰ Hora: ${selectedHour}\n💰 SEÑA: PAGADA`;
    window.open(`https://wa.me/5492657521775?text=${encodeURIComponent(msg)}`);
}
