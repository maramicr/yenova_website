const Name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const movil = document.getElementById("movil");
const message = document.getElementById("message");

const form = document.getElementById("form");

const paraph = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let enter = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  // let regexMovil  = /^\(\d{3})?[\s-]?\d{8}$/;
  let regexMovil  = /\d{8}$/;

  if (Name.value.length < 4) {
    warnings += `El nombre no es válido <br>`;
    enter = true;
  }
  if (lastName.value.length < 4) {
    warnings += `El apellido no es válido <br>`;
    enter = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es válido <br>`;
    enter = true;
  }
  if (!regexMovil.test(movil.value)) {
    warnings += `El número de teléfono no es válido <br>`;
    enter = true;
  }
  if (message.value.length < 10) {
    warnings += `El mensaje es muy corto <br>`;
    enter = true;
  }
  if (enter) {
    paraph.innerHTML = warnings;
  } else {
    // paraph.innerHTML = "Mensaje enviado!";
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El mensaje ha sido enviado.',
      showConfirmButton: false,
      timer: 1800
    })
  }
});

