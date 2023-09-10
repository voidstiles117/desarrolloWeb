var parrafo = document.getElementById("warning");
var form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var usuarioElement = document.getElementById("input-usuario");
        var contrasenaElement = document.getElementById("input-contrasena");
        var errores = "";
        if (usuarioElement && contrasenaElement) {
            errores += validaUsuario(usuarioElement.value);
            errores += validaContrasena(contrasenaElement.value);
        }
        if (errores && parrafo) {
            parrafo.innerHTML = errores;
        }
    });
}
var validaUsuario = function (usuarioElemento) {
    if (usuarioElemento === "") {
        return "<p class=\"has-text-centered has-text-danger\" id=\"warning\">Nombre esta vacio</p>";
    }
    return "";
};
var validaContrasena = function (contrasenaElemento) {
    if (contrasenaElemento === "") {
        return "<p class=\"has-text-centered has-text-danger\" id=\"warning\">Esta vacio</p>";
    }
    return "";
};
