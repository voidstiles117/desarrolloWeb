// capturamos los datos 
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e => {
  e.preventDefault()

  const usuario = document.getElementById("input-usuario").value
  const contrasena = document.getElementById("input-contrasena").value

  let errores = ""

  errores += validaUsuario(usuario);
  errores += validaContrasena(contrasena);

  if (errores) {
    parrafo.innerHTML = errores;
  }
})

const validaUsuario = (usuarioElemento) => {
  if (usuarioElemento === "") {
    return `<p class="has-text-centered has-text-danger" id="warning">Nombre esta vacio</p>`;
  }
  return ""
}

const validaContrasena = (contrasenaElemento) => {
  if (contrasenaElemento === "") {
    return `<p class="has-text-centered has-text-danger" id="warning">Esta vacio</p>`;
  }
  return ""
}
