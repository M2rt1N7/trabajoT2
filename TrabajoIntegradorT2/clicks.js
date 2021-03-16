function onClick() {
  //Realizamos la compatibilidad del navegador con el uso de sessionStorage
  if(typeof(Storage) !== "undefined") {
    //Si es afirmativo
    if (sessionStorage.clickcount) {
      //Cuando se ejecuta un click, se suma uno al contador
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      //si es la primera vez que iniciamos sesion en nuestro navegador
      sessionStorage.clickcount = 1;
    }
    //Se muestra por pantalla el contador de clikeos
    document.getElementById("contador").innerHTML = "Has visitado " + sessionStorage.clickcount + " pagina(s).";
  } else {
    //Si por el contrario es negativo
    alert("Disculpe las molestias, su navegador no soporta el amacenamiento de la web");
  }
}
