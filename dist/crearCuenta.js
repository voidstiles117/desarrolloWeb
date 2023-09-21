"use strict";
let alertas = document.getElementById("alertas");
let formulario = document.querySelector("form");

if (formulario) {
    formulario.addEventListener("submit", e => {
        e.preventDefault();
        const user = document.getElementById("r-user");
        const email = document.getElementById("r-email");
        const password = document.getElementById("r-password");
        const confirmPassword = document.getElementById("r-confirmPassword");
        let alerta = "";
        if (user && password && confirmPassword && email) {
            alerta += validUser(user.value);
            alerta += validPassword(password.value, confirmPassword.value);
            alerta += validEmail(email.value);
        }
        else {
            alerta = "";
        }
        if (alerta && alertas) {
            alertas.innerHTML = alerta;
        }
    });
}
function validUser(userElement) {
    if (userElement === "") {
        return `<p class="has-text-centered has-text-danger" id="alertas">Usuario vacio</p>`;
    }
    return "";
}
;
function validPassword(passwordElement, confirmPasswordElement) {
    if (passwordElement != confirmPasswordElement) {
        return `<p class="has-text-centered has-text-danger" id="alertas">Contraseñas no coinciden</p>`;
    }
    if (passwordElement === "" && confirmPasswordElement === "") {
        return `<p class="has-text-centered has-text-danger" id="alertas">Input de password vacios</p>`;
    }
    return "";
}
function validEmail(emailElement) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex) {
    }
    return regex.test(emailElement);
}
