// Obtener los elementos del DOM
const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const numPeople = document.getElementById('numPeople');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson');

// Función para calcular la propina
function calculateTip() {
    // Obtener los valores ingresados
    const bill = parseFloat(billAmount.value);
    const tipPercent = parseFloat(tipPercentage.value);
    const people = parseInt(numPeople.value);

    // Validar que los valores no estén vacíos o no sean negativos
    if (isNaN(bill) || bill <= 0 || isNaN(tipPercent) || tipPercent < 0 || isNaN(people) || people <= 0) {
        tipPerPerson.textContent = "0.00";
        totalPerPerson.textContent = "0.00";
        return;
    }

    // Calcular la propina total y por persona
    const totalTip = (bill * (tipPercent / 100));
    const totalBill = bill + totalTip;
    const tipEach = totalTip / people;
    const totalEach = totalBill / people;

    // Actualizar el DOM con los resultados
    tipPerPerson.textContent = tipEach.toFixed(2);
    totalPerPerson.textContent = totalEach.toFixed(2);
}

// Escuchar cambios en los inputs
billAmount.addEventListener('input', calculateTip);
tipPercentage.addEventListener('input', calculateTip);
numPeople.addEventListener('input', calculateTip);
