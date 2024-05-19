document.getElementById(`btn_send`).addEventListener(`click`, function (event) {
    event.preventDefault();
    let name = document.getElementById(`name`).value;
    let email = document.getElementById(`email`).value;
    let message = document.getElementById(`message`).value;
    let msgEnviado = document.getElementById(`msgEnviado`);
    
    if (name === `` || email === `` || message === ``) {
        alert(`Por favor, complete todos los campos`);
        return;
    } else {
        msgEnviado.style.display = `block`;
        event.target.form.reset();
        setTimeout(() => {
          msgEnviado.style.display = `none`;
    }, 3000);
    const mensaje = {
      name: name,
      email: email,
      message: message,
    };
    let arr = JSON.parse(localStorage.getItem("mensaje"));
    if (!arr) {
      arr = [];
    }

    arr.push(mensaje);
    localStorage.setItem("mensaje", JSON.stringify(arr));
  }
});
