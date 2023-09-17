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
        if (user) {
            alerta += validUser(user.value);
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
        return `<p class="has-text-centered has-text-danger" id="alertas">NO VALGO MONDA</p>`;
    }
    return "";
};
