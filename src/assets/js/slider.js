let sidebars = document.getElementById("sidebar");
let carrousel = document.getElementById("carrousel");
let changeSize = document.getElementById("changeSizeCarrousel");
changeSize.addEventListener("click", changeSizeCarousel);
window.onresize = changeWindows;

window.addEventListener('load', changeWindows);


//este metodo se encarga de adaptar el tamaño del carrousel ni bien se carga la web o se cambia de ventana
function changeWindows() {
  let widthSidebar = sidebars.clientWidth;
  if (screen.width > 400) {

    if (widthSidebar == 260) {
      carrousel.style.width = screen.width - 300 + "px";
    } else {
      carrousel.style.width = screen.width - 300 + "px";
    }
  } else {
    if (widthSidebar == 260) {
      carrousel.style.width = screen.width - 100 + "px";
    } else if (widthSidebar == 78) {
      carrousel.style.width = screen.width - 300 + "px";

    }

  }

}



function changeSizeCarousel() {
  // obtengo el tamaño del sidebar cuando se clikea el boton del menu

  //como lo obtengo cuando lo apreto, me da el tamaño antes de que se achique
  //es decir si el sidebar esta abierto y apreto el boton del menu y se achica me sigue dando el tamaño 260 porque me lo da antes de que se achique
  // y si esta achicado y apreto el boton del menu se agranda y antes de que se agrande me da el tamaño que en este caso es 78
  //teniendo esto en cuenta puedo modificar el tamaño del carrousel dependiendo si esta abierrto y cerrado,
  //si el tamaño es igual a 260 quiere decir que apreto el boton y se achico a 78 entonces para calcular el tamaño del carousel es la diferencia de la pantalla del cliente
  //menos el sidebar
  let widthSidebar = sidebars.clientWidth;
  if (widthSidebar == 260) {
    carrousel.style.width = screen.width - 100 + "px";
  } else if (widthSidebar == 78) {
    carrousel.style.width = screen.width - 300 + "px";

  }

  console.log("Tamanio de carrusel " + carrousel.clientWidth);
  console.log("tamanio pantalla " + screen.width);
}




