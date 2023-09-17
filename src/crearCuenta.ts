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

    if (user) {
      alerta += validUser(user.value)
    } else {
      alerta = ""
    }

    if (alerta && alertas) {
      alertas.innerHTML = alerta
    }

  })
}

let validUser = (userElement: string): string => {
  if (userElement === "") {
    return `<p class="has-text-centered has-text-danger" id="alertas">NO VALGO MONDA</p>`
  }
  return "";
};