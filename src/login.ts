const parrafo: HTMLElement | null = document.getElementById("warning")

const form: HTMLFormElement | null = document.querySelector("form")

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault()

    const usuarioElement: HTMLInputElement | null = document.getElementById("input-usuario") as HTMLInputElement
    const contrasenaElement: HTMLInputElement | null = document.getElementById("input-contrasena") as HTMLInputElement

    let errores: string = ""

    if (usuarioElement && contrasenaElement) {
      errores += validaUsuario(usuarioElement.value)
      errores += validaContrasena(contrasenaElement.value)
    } else {
      errores = ""
    }

    if (errores && parrafo) {
      parrafo.innerHTML = errores
    }
  });
}

const validaUsuario = (usuarioElemento: string): string => {
  if (usuarioElemento === "") {
    return `<p class="has-text-centered has-text-danger" id="warning">Nombre esta vacio</p>`
  }

  return ""
}

const validaContrasena = (contrasenaElemento: string): string => {
  if (contrasenaElemento === "") {
    return `<p class="has-text-centered has-text-danger" id="warning">Contraseña vacia</p>`
  }
  return ""
}

