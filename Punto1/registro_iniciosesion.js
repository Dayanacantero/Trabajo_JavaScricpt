// Selección de elementos
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const registerError = document.getElementById('registerError');
const loginError = document.getElementById('loginError');

// Validación del formulario de registro
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password.length < 6) {
        registerError.textContent = "La contraseña debe tener al menos 6 caracteres.";
    } else if (!validateEmail(email)) {
        registerError.textContent = "Formato de correo no válido.";
    } else {
        registerError.textContent = "Registro exitoso!";
       
        registerForm.reset(); 
    }
});

// Validación del formulario de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!validateEmail(email)) {
        loginError.textContent = "Formato de correo no válido.";
    } else if (password.length < 6) {
        loginError.textContent = "La contraseña debe tener al menos 6 caracteres.";
    } else {
        loginError.textContent = "Login exitoso!";
       
        loginForm.reset();
    }
});

// Función para validar el formato del correo
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
