/*
date requiere ser instanciado para usarse
 */
//let date = new Date();
//console.log(date.getTime());
// let date = new Date();
// date2 = new Date();
// date.setFullYear(2020);
// date.setMinutes(30);
// date.setHours(23);
// date.setDate(23);
// date.setMonth(3);


/*
metodos get
.getFullYear()
.getMonth() devuelve numero y es un array del cero al 11 0=enero
.getDate() fecha del mes el dia del mes
.getday() dia de la semana domingo = 0
.getTime() milisegundos desde el 1 de enero del 1970
 */

/*
ejercicio 1 : imprimir la fecha y hora en nuestro formato personalizado
 */

let date = new Date();

let getStringDay = day => {
    let days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    return days[day];
}

let dateformated = `${getStringDay(date.getDay())} ${date.getDate()} de marzo de ${date.getFullYear()}, 11:00pm`;
console.log(dateformated);