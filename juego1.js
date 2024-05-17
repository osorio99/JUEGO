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
    do{
        if (eleccionUsuario === eleccionComputadora) {
            resultado = "Es un empate!";
          } else if (
            (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
            (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
          ) {
             usuario++
            //resultado = "¡Ganaste!";
            
          } else {
              compu++
            //resultado = "¡Perdiste!";
          }
          
    }while(usuario == 3 && compu == 3);
        if(compu >= 3){
        console.log("Gano la maquina");
    }else{
        console.log("Gano el jugador")
    }
}