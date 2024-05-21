document.addEventListener("DOMContentLoaded", function () {
  const inputUsername = document.getElementById("newUsername");
  const inputEmail = document.getElementById("newEmail");
  const inputPassword = document.getElementById("newPassword");
  const inputConfirmPassword = document.getElementById("confirmPassword");

  // Capturar el evento blur en el campo de nombre de usuario
  inputUsername.addEventListener("blur", function () {
    // Validar el nombre de usuario cuando el usuario abandona el campo
    const username = inputUsername.value.trim();
    validarUsuario(username.toLowerCase());
  });

  // Capturar el evento blur en el campo de email
  inputEmail.addEventListener("blur", function () {
    // Validar el email cuando el usuario abandona el campo
    validarEmail(inputEmail.value.trim());
  });

  // Capturar el evento blur en el campo de contraseña
  inputPassword.addEventListener("blur", function () {
    // Validar la contraseña cuando el usuario abandona el campo
    validarPassword(inputPassword.value.trim());
  });

  // Capturar el evento blur en el campo de confirmar contraseña
  inputConfirmPassword.addEventListener("blur", function () {
    // Validar la contraseña cuando el usuario abandona el campo
    validarConfirmPassword(inputConfirmPassword.value.trim());
  });

  // Función para validar el formato de email
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const validarUsuario = (usrName) => {
    let usrMsg = document.getElementById("usrMsg");
    let arr = JSON.parse(localStorage.getItem("usuario"));
    if (usrName === "") {
      usrMsg.innerText = "Por favor ingresa un nombre de usuario.";
      usrMsg.style.color = "red";
      inputUsername.focus();
    } else {
      if (usrName.length < 4) {
        usrMsg.innerText =
          "El nombre de usuario debe tener al menos 4 caracteres.";
        usrMsg.style.color = "red";
        inputUsername.focus();
      } else {
        if (arr.find((usr) => usr.username === usrName)) {
          usrMsg.innerText = "El nombre de usuario ya está en uso.";
          usrMsg.style.color = "red";
          inputUsername.focus();
        } else {
          usrMsg.innerText = "";
        }
      }
    }
  };

  const validarEmail = (password) => {
    let mailMsg = document.getElementById("mailMsg");
    let arr = JSON.parse(localStorage.getItem("usuario"));
    if (password === "") {
      mailMsg.innerText = "Ingresar una dirección de correo.";
      mailMsg.style.color = "red";
      inputEmail.focus();
    } else if (!isValidEmail(password)) {
      mailMsg.innerText = "ingresar un email válido.";
      mailMsg.style.color = "red";
      inputEmail.focus();
    } else {
      if (arr.find((usr) => usr.email === password)) {
        mailMsg.innerText = "El email ya está en uso.";
        mailMsg.style.color = "red";
        inputEmail.focus();
      } else {
        mailMsg.innerText = "";
      }
    }
  };

  const validarPassword = (pass) => {
    let passMsg = document.getElementById("pswMsg");
    if (pass === "") {
      passMsg.innerText = "Por favor ingresa una contraseña.";
      passMsg.style.color = "red";
      inputPassword.focus();
    } else {
      if (pass.length < 6) {
        passMsg.innerText = "La contraseña debe tener al menos 6 caracteres.";
        passMsg.style.color = "red";
        inputPassword.focus();
      } else {
        passMsg.innerText = "";
      }
    }
  };

  const validarConfirmPassword = (pass) => {
    let confirmPassMsg = document.getElementById("confirmPswMsg");
    if (pass === "") {
      confirmPassMsg.innerText = "Por favor confirma tu contraseña.";
      confirmPassMsg.style.color = "red";
      inputConfirmPassword.focus();
    } else {
      if (pass !== inputPassword.value) {
        confirmPassMsg.innerText = "Las contraseñas no coinciden.";
        confirmPassMsg.style.color = "red";
        inputConfirmPassword.focus();
      } else {
        confirmPassMsg.innerText = "";
      }
    }
  };
});


document.getElementById("crearCuenta").addEventListener("click", (event) => {
  event.preventDefault();

  const inputUsername = document.getElementById("newEmail").value.trim();
  const inputPassword = document.getElementById("newPassword").value.trim();
  const inputEmail = document.getElementById("newEmail").value.trim();
  const inputConfirmPassword = document.getElementById("confirmPassword").value.trim();


  const usr = {
    email: inputEmail.toLowerCase(),
    password: inputPassword,
    username: inputUsername.toLowerCase(),
  };

  if (usr.email === "" || usr.password === "" || usr.username === "" || inputConfirmPassword === "") {
    //tengo que elimiar el alert y poner un mensaje en el HTML
    // alert("Por favor, complete todos los campos.");
    return;
  }


  let arr = JSON.parse(localStorage.getItem("usuario"));
  if (!arr) {
    arr = [];
  }

  arr.push(usr);
  localStorage.setItem("usuario", JSON.stringify(arr));

  window.location.href = "./login.html";
})


document.getElementById("btn_cancel").addEventListener("click", function () {
  window.location.href = "./login.html";
});