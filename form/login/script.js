function validarUsuario(event){
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const contrasenia = document.getElementById("contrasenia").value;
    if(usuario === "Victor" && contrasenia === "1234567890"){
        alert("Inicio de sesion exitoso");
        window.location.href = "home.html"
    }else{
        alert("Usuario o contraseña incorrectas");
    }
}