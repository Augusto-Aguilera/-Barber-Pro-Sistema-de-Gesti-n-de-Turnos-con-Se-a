# 💈 Barber Pro | Sistema de Gestión de Turnos con Seña

Desarrollado por **PATRIC SOFT ®** - Soluciones Digitales para Villa Mercedes.

Este proyecto es una aplicación web profesional diseñada específicamente para barberías y centros de estética que buscan automatizar su agenda, evitar inasistencias (No-Shows) y profesionalizar la atención al cliente mediante tecnología de punta.

## 🚀 Características Principales

* **Interfaz Premium:** Diseño *Black & Gold* de alto impacto visual, optimizado para una experiencia móvil fluida.
* **Selección de Servicios:** Catálogo visual de cortes y estilos con precios actualizados.
* **Gestión de Horarios Inteligente:** Sistema dinámico de selección de turnos por fecha y hora.
* **Garantía de Turno (Seña):** Integración visual para el cobro de señas (ej. $1.500) para asegurar el compromiso del cliente y proteger el tiempo del profesional.
* **Confirmación por WhatsApp:** Envío automático de la comanda detallada de reserva directamente al celular del barbero.
* **Panel de Control Administrativo:** Sección privada (`admin.html`) para que el barbero visualice su agenda, clientes confirmados y estados de pago.

## 🛠️ Tecnologías y Escalabilidad (Versión Demo)

Este proyecto funciona actualmente en **Modo Demostración Técnica**, lo que permite evaluar su potencial antes de la puesta en producción:

* **Frontend:** HTML5, CSS3 (Custom Variables, Grid, Flexbox) y JavaScript Vanilla (ES6+).
* **Persistencia Local:** En esta demo, los turnos se almacenan mediante `LocalStorage`. Esto permite mostrar la funcionalidad de la agenda y el panel administrativo sin dependencias externas inmediatas.
* **Arquitectura Escalable:** El sistema está 100% preparado para ser conectado a una base de datos en la nube (**Supabase** o **Firebase**) para sincronización multidispositivo en tiempo real.
* **Pasarela de Pagos:** El botón de seña simula el flujo de **Mercado Pago**, listo para integrar la API oficial y procesar pagos reales.

## 📂 Estructura del Proyecto

* `index.html`: Interfaz principal para el cliente y proceso de reserva.
* `admin.html`: Panel privado de gestión y visualización de turnos para el dueño.
* `style.css`: Estilos visuales premium, animaciones y diseño responsivo.
* `script.js`: Lógica de negocio, gestión de memoria local y validaciones de pago.

## 📱 Cómo utilizar la Demo

1.  **Reserva:** El cliente accede a la URL, elige un servicio, ingresa sus datos y selecciona un horario disponible.
2.  **Garantía:** Realiza el pago simbólico de la seña para habilitar la confirmación.
3.  **WhatsApp:** Al confirmar, se genera un mensaje pre-armado para el barbero.
4.  **Gestión:** El administrador accede a `/admin.html` (desde el mismo dispositivo en esta demo) para ver la lista de turnos actualizada.

---
### 💡 Sobre PATRIC SOFT ®
Somos una empresa dedicada a transformar el comercio local de **Villa Mercedes** mediante software a medida. No solo creamos páginas, construimos herramientas que hacen crecer tu negocio.

**Desarrollador:** Augusto - *Founder & Lead Developer*