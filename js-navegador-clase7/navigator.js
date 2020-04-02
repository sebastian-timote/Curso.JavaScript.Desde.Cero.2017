/*
* GEOLOCATION es un objeto con tres metodos
* .clearWatch()
* .watchPosition()
* .getCurrentPosition(success[,error,options]) ->error y options son opcionales
*                           error -> si no encuentra una posicion
*
 */

navigator.geolocation.getCurrentPosition(function (geoPosition) {
    let coords = geoPosition.coords,
        lat    = coords.latitude,
        long   = coords.longitude;
    console.log(lat,long);
});

/*
* location -> tiene la informacion de la pagina actual
* .href         -> url
* .pathname     -> la ruta dentro del dominio
* .hash         -> el marcador #
* .origin       -> protocol + hostname
* .protocol     -> http o https
* .hostname     -> hostname (dominio o IP)
* .host         -> hostname y port
* .port         -> puerto
* .search       -> parametros de busqueda id = 1
 */

/*
* EJERCICIO: determinar item activo de un menu
* esto usualmente se hace en el backend
 */
function getCurrentMenuItem(containerElement) {
    let url = location.href,
        links = [...containerElement.querySelectorAll('a')];//busco todos los a dentro de ese element
    links.map(link => {
        if (link.href === url) return link.classList.add('active');//le anado una clase llamada active
    })
}
getCurrentMenuItem(document.getElementById('menu'));
