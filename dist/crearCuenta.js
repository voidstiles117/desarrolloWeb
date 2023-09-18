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
        if (user && password && confirmPassword) {
            alerta += validUser(user.value);
            alerta += validPassword(password.value, confirmPassword.value);
        }
        else {
            alerta = "";
        }
        if (alerta && alertas) {
            alertas.innerHTML = alerta;
        }
    });
}
let validUser = (userElement) => {
    if (userElement === "") {
        return `<p class="has-text-centered has-text-danger" id="alertas">Usuario vacio</p>`;
    }
    return "";
};
let validPassword = (passwordElement, confirmPasswordElement) => {
    if (passwordElement != confirmPasswordElement) {
        return `<p class="has-text-centered has-text-danger" id="alertas">Contraseñas no coinciden</p>`;
    }
    if (passwordElement === null && confirmPasswordElement === null) {
        return `<p class="has-text-centered has-text-danger" id="alertas">Input de password vacios</p>`;
    }
    return "";
};
