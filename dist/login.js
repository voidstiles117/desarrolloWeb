"use strict";
const parrafo = document.getElementById("warning");
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const usuarioElement = document.getElementById("input-usuario");
        const contrasenaElement = document.getElementById("input-contrasena");
        let errores = "";
        if (usuarioElement && contrasenaElement) {
            errores += validaUsuario(usuarioElement.value);
            errores += validaContrasena(contrasenaElement.value);
        }
        else {
            errores = "";
        }
        if (errores && parrafo) {
            parrafo.innerHTML = errores;
        }
    });
}
const validaUsuario = (usuarioElemento) => {
    if (usuarioElemento === "") {
        return `<p class="has-text-centered has-text-danger" id="warning">Nombre esta vacio</p>`;
    }
    return "";
};
const validaContrasena = (contrasenaElemento) => {
    if (contrasenaElemento === "") {
        return `<p class="has-text-centered has-text-danger" id="warning">Contraseña vacia</p>`;
    }
    return "";
};
