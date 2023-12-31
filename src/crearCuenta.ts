let alertas: HTMLElement | null = document.getElementById("alertas")
let formulario: HTMLFormElement | null = document.querySelector("form")

if (formulario) {
  formulario.addEventListener("submit", e => {
    e.preventDefault()

    const user: HTMLInputElement | null = document.getElementById("r-user") as HTMLInputElement
    const email: HTMLInputElement | null = document.getElementById("r-email") as HTMLInputElement
    const password: HTMLInputElement | null = document.getElementById("r-password") as HTMLInputElement
    const confirmPassword: HTMLInputElement | null = document.getElementById("r-confirmPassword") as HTMLInputElement

    let alerta: string = ""

    if (user && password && confirmPassword) {
      alerta += validUser(user.value)
      alerta += validPassword(password.value, confirmPassword.value)
      // alerta += validEmail(email.value)
    } else {
      alerta = ""
    }

    if (alerta && alertas) {
      alertas.innerHTML = alerta
    }

  })
}

function validUser(userElement: string): string {
  if (userElement === "") {
    return `<p class="has-text-centered has-text-danger" id="alertas">Usuario vacio</p>`
  }
  return "";
}

function validPassword(passwordElement: string, confirmPasswordElement: string): string {
  if (passwordElement != confirmPasswordElement) {
    return `<p class="has-text-centered has-text-danger" id="alertas">Contraseñas no coinciden</p>`
  }
  if (passwordElement === "" && confirmPasswordElement === "") {
    return `<p class="has-text-centered has-text-danger" id="alertas">Input de password vacios</p>`
  }
  return ""
}