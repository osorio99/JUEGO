// Este es el original

function elegir(eleccionUsuario) {
    var eleccionComputadora = Math.random();
    if (eleccionComputadora < 0.34) {
      eleccionComputadora = "piedra";
    } else if (eleccionComputadora <= 0.67) {
      eleccionComputadora = "papel";
    } else {
      eleccionComputadora = "tijera";
    }
    let usuario=0
    let compu=0
    var resultado = "";
    do{
        if (
            (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
            (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
          ) {
            usuario+=
            resultado = "¡Ganaste!";
          } else {
            compu+= 
            resultado = "¡Perdiste!";
          }
    }while(usuario <3 && compu <3)
    document.getElementById("resultado").innerText = "La computadora eligió: " + eleccionComputadora + ". " ;
    document.getElementById("resultado2").innerText = "El usuario eligió: " + eleccionUsuario + ". " + resultado;
  }