const btn_login = document.getElementById("btn_login");
const mensaje = document.getElementById("mensaje");

btn_login.addEventListener("click", function (event) {
  // event.preventDefault();
  const user = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  mensaje.style.display = "none";
  if (user === "" || password === "") {
    return;
  } else {
    let arr = JSON.parse(localStorage.getItem("usuario"));
    if (!arr) {
      arr = [];
    }
    let userFound = {};
    userFound = arr.find(
      (usr) => usr.username === user && usr.password === password
    );
    if (userFound) {
        console.log(`Bienvenido ${userFound.username}`);
      //Redireccionar a la pagina que corresponda
      window.location.href = "https://www.google.com.ar/";
    } else {
      mensaje.style.display = "block";
    }
  }
});
