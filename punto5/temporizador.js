// Seleccionar elementos del DOM
const form = document.getElementById('countdown-form');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const messageElement = document.getElementById('message');

let countdownInterval;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // pide fecha y hora
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;

    if (eventDate && eventTime) {
        // Combinar fecha y hora
        const eventDateTime = new Date(`${eventDate}T${eventTime}`).getTime();

        // Inicia la cuenta regresiva
        startCountdown(eventDateTime);
    } else {
        alert("Por favor selecciona una fecha y hora válidas.");
    }
});

function startCountdown(eventDateTime) {
    // Limpiar cualquier temporizador previo
    if (countdownInterval) clearInterval(countdownInterval);

    // Actualizar el temporizador cada segundo
    countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = eventDateTime - now;

        // Calcular días, horas, minutos y segundos restantes
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Mostrar el resultado
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        // Mostrar mensaje cuando el tiempo se acabe
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            messageElement.textContent = "¡Inicio de evento!";
            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
        }
    }, 1000);
}
