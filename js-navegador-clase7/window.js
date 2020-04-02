 /*
 *  API application programming interfaces son implementaciones del navegador
 * conjunto de metodos, propiedades y objetos que podemos utilizar para crear soluciones
 *
 * objeto window -> es el padre de todos los objetos en el navegador
 * alert('holamundo') === window.alert('holamundo')
 * console.log('holamundo') === window.console.log('holamundo')
 * en node el objeto padre de todos se llama GLOBAL
  */

 /*
 * PROPIEDADES
 *  DIMENSIONES
 *  .innerWidth
 *  .innerHeight
 *  .outerWidth
 *  .outerHeight
 *
 *
 *
 * COORDENADAS DE LA VENTANA
 * .screenX
 * .screenY
 *
 * Scrooll
 * .scrollX
 * .scrollY
 *
 * Storage -. con esto puedo guardar informacion en el navegador
 * localStorage    -> no se borra nunca solo lo eliminamos manualmente
 * sessionStorage -> se borra cuando cierras el navegador
 *
  */

 /*
 * METODOS
 * alert()
 * prompt()
 * confirm()
 *
 * MANIPULAR VENTANAS
 * .open('url') -> abro ventanas le paso de parametro la url que yo quiero abrir(pop up)
 * .close() -> cerramos las ventanas abiertas por el open() o que haya abierto con javascript
 * .getSelection().toString() -> es un objeto que toma el texto que seleccionemos en el navegador
 * .getComputedStyle(element) -> objeto con todas las propiedades css pero computadas es decir lo que el navegador
 *                        implemento en la vista si hay dos propiedades en conflicto el navegador escoge una
 *                        propiedad, la propiedad que escoja es la computada la otra no la muestra
 * hacemos que el scroll se mueva a determinado lugar
 * .scrollTo(x,y) -> nos envia a la posicion x,y
 * .scrollBy(x,y) -> suma a la posicion actual x,y
  */


 /*
 * history -> solamente tiene acceso a la session actual, es historial de la pestana actual
 *  .back() -> moverse atras
 *  .forward() -> moverse adelante
 *  .go(n) -> resibe un numero se mueve (n + (se mueve adelante) n - (se mueve atras))
 *
  */