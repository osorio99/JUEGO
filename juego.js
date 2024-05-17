  function elegir(eleccionUsuario) {
      var eleccionComputadora = Math.random();
      if (eleccionComputadora < 0.34) {
        eleccionComputadora = "piedra";
      } else if (eleccionComputadora <= 0.67) {
        eleccionComputadora = "papel";
      } else {
        eleccionComputadora = "tijera";
      }

      var resultado = "";
      
       if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
      ) {
        resultado = "¡Ganaste!";
      } else {
        resultado = "¡Perdiste!";
      }

      document.getElementById("resultado").innerText = "La computadora eligió: " + eleccionComputadora + ". " + resultado;
    }