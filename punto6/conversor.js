// Seleccionar elementos del DOM
const form = document.getElementById('currency-form');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const resultDiv = document.getElementById('result');

// Simulación de tipos de cambio
const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110, MXN: 20, COP: 4000 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 129, MXN: 23.5, COP: 4700 },
    GBP: { USD: 1.33, EUR: 1.14, JPY: 147, MXN: 27, COP: 6000 },
    JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, MXN: 5.5, COP: 36 },
    MXN: { USD: 0.05, EUR: 0.042, GBP: 0.037, JPY: 0.18, COP: 200 },
    COP: { USD: 0.00025, EUR: 0.00021, GBP: 0.00017, JPY: 0.028, MXN: 0.005 },
};

// Manejar la conversión de monedas
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (fromCurrency !== toCurrency) {
        const rate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        resultDiv.textContent = "Por favor elige monedas diferentes.";
    }
});
