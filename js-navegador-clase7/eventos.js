/*
* un evento es cualquier cosa que sucede en la aplicacion
*
* como reconocer los eventos disponibles en un objeto?
*   console.dir(obj)
*       todos los que comiencen con on son eventos
*
* como aplico una funcion a un evento (no recomendable)
*   objeto.onEvent = function(){} -> si lo haces de esta forma no sele puede agregar ningun otro evento
*        onEvent = evento del objeto (onevent no existe referencia para decir que coloque un evento)
*
* se recomienda usar addEventListener
*   objeto.addEventListener('event', function(){})
*       event -> el nombre del evento (sin 'on')
 */

/*
*Eventos comunes
* De mouse:
*   'click' -> cuando el usuario hace click
*   'dblclick' -> cuando hace doble click
*   'mousedown' ->
*   'mouseenter' -> cuando el mouse entra al elemento
*   'mouseleave' -> cuando el mouse deja el elemento
*   'mousemove' -> cuando el  mouse lo mueves al elemento
*   'mouseout'  -> cuando el mouse sale de un elemento
*   'mouseover'-> cuando el mouse entra al elemento
*   'mouseup'
*   'mousewheel'
*
* De teclado:
*   'keydown'
*   'keyup'
*
* De formulario:
*   'submit' -> cuando se envuia el formulario
*   'change' -> cambio de valor de un input
*
*De window:
*   'resize' -> cuando se redimensiona la ventana
*   'scroll' -> cuando se hace scroll
*   'load' -> cuando se carga completamente toda la pagina web
*   'DOMContentLoaded' -> cuando se renderiza el DOM

 */
// menu.addEventListener('click', e => {
//     e.preventDefault();//le dice al navegador que no haga sus eventos predeterminados
//     e.target.style.color='red';
//    //console.log(e.target);//me da info de donde se disparo el evento
// });
/*
* Delegacion de eventos -> es asignar el evento al elemento padre al hacer esto
*                          tambien quedan asignados los hijos, no hay necesidad de asignar
*                          un evento a cada hijo
*
 */

let eventHaler = e => {
    e.preventDefault();
    if (e.target.tagName === 'A'){
      console.log(e.target.textContent);
  }
};
menu.addEventListener('click',eventHaler);