/*
* DOM -> DOCUMENT OBJECT MODEL
*
*   lo mas importantes
*
*   .body               -> body element
*   .documentElement    -> root (html)
*   .links              -> enlaces
*   .scripts            -> scripts
*   .images             -> images
*   .head               -> head element
*   .styleSheets        -> todos los css
 */

/*
* OBTENER ELEMENTOS DEL DOM
*
* los mas importantes hay muchos otros
*
*   document.getElementById('id') -> me devuelve el elemento del dom que tenga este id
*   document.querySelector('selector de css') -> obtiene el primer elemento que coincida con el selector css
*   document.querySelectorAll('selector de css') ->obtengo todos los elementos que coincidan
*   si no encuentran los elementos se devuelve null
*
*   querySelector() y querySelectorAll()
*   se pueden ejecutar desde el documento o desde un elemento
*   querySelectorAll() no devuelve array devuelve un node list, es necesario expandirlo
*   [...document.querySelectorAll(selector)]
*
 */

/*
* ejemplo para comprobar si existe un id y que no casque
 */
// let title = document.getElementById('title');
// if (title){
//     title.textContent = 'Bienvenidos';
// }
// console.log('sigo funcionando');
//
// let menu = document.getElementById('menu'),
//     menuLinks = [...menu.querySelectorAll('a')];//es mejor buscar en un elemento que en el document
//                                                         // pa los recursos y la deuda tecnica
//     //menuLinks = [...document.querySelectorAll('#menu li a')];//
// console.log(menuLinks);

/*
* MOVERSE EN EL DOM
* DOM traversing
*
* cuando leemos objetos en javascript hay que tener en cuenta
* por ejemplo las diferencias entre:
* firstElementChild -> este hace referencia a etiquetas html
* firstChild        -> a textos o etiquetas o nodos
*   <div>
    holamundo ->este seria el contenido de firstChild
    <a href='#'>ED</a> -> y este seria el contenido de firstElementChild
    </div>
*
* PARTE DE UN ELEMENTO
* hermanos
    *   element.nextElementSibling          -> hermano siguiente(elemento)
    *   element.nextSibling                 -> hermano siguiente(nodo)
    *   element.previousElementSibling      -> hermano anterior (elemento)
    *   element.previousSibling             -> hermano anterior (nodo)

* Padres
    *   element.parentElement               -> padre (elemento)
    *   element.parentNode                  -> padre (nodo)
* Hijos
    *   element.children                    -> lista de hijos (elemento)
    *   element.childNodes                  -> todos los nodos hijos (nodos)
    *   element.firstElementChild           -> primer hijo (elemento)
    *   element.firstChild                  -> primer hijo (nodos)
    *   element.lastElementChild            -> ultimo hijo (elemento)
    *   element.lastChild                   -> ultimo hijo (nodos)


 */
let menu = document.getElementById('menu'),
    menuLinks = [...menu.querySelectorAll('a')],
    menuItems = [...menu.querySelectorAll('li')];
console.dir(menuItems[1]);
/*
* PROPIEDADES DE LOS ELEMENTOS
* como accedo al contenido
*  contenido:
*   .textContent -> texto plano del elemento (lectura y escritura)
*   .innerHTML -> HTML interno de un elemento
*
*  Atributos
*   .attributes -> trae todos los atributos de un elemento
*   .getAttribute('atributo') -> consigue solo el atribute indicado
*   .setAttribute('atri', 'value')
*   ejemplo: checkbox.setAttribute('checked', 'true')
*   .removeAttribute('atri') -> removerlo
*
* clases
*   .classList -> es un objeto devuelve un node list con todas las clases
*       .add('className') -> anade clase
*       .remove('className') -> quitar clase
*       .toggle('className') -> cambia la clase la quita o la pone
*       .contains('className') -> devuelve true si el elemento contiene esa clase
*
* estilos css
* esto se deberia de usar para estilos dinamicos y no estaticos
* dinamico es que mantenga haciendo calculos
*   .style -> no es para leer es para escribir propiedades css
*       .cssProperty (usar camelCase en lugar de guiones EJ background-color a backgroundColor )
 */
let item = menuItems[1];

/*
* transformar el DOM
*
* crear elementos
*   document.createElement('tagName')
* let element = '<div>hola</div>' -> no es un elemento DOM si no un string
*
* insertar elementos
*   .appendChild() -> inserta un elemento al final del padre
*       EJ:   parent.appendChild(element)
*   .insertBefore() -> insertar un elemento antes de otro
*       EJ:   parent.insertBefore(newElement, nextElement)
*             parent -> elemento padre
*             newElement -> elemento a insertar
*             nextElement   -> elemento ya existente antes del cual se insertara
*
* eliminar y mover elementos
*   parent.removeChild(element) -> eliminamos respecto al padre y me devuelve el elemento eliminado
*       elimina element de parent
*   element.remove() -> eliminamos por si solo devuelve undefine
*       elimina element
 */
// let el = document.createElement('li');
// el.textContent = 'soy un nuevo elemento';
//menu.appendChild(el);
//menu.insertBefore(el, menuItems[1]);

/*
cambio un elemento del inicio al final
 */
let el = menu.removeChild(menuItems[0]);
menu.appendChild(el);



