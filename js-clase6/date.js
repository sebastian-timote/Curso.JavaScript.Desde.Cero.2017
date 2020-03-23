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

/* ejemplo1 hacer tu propio formato de fecha
let date = new Date();

let getStringDay = day => {
    let days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    return days[day];
};
let getStringMonth = date => {
    let months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    return months[date];
};
//la funcion putHourZeroInitial se hace con el objetivo de que la hora no se muestre asi:
//  5:45 Pm si no asi 05:45 Pm
let putHourZeroInitial = num => ('0' + num).slice(-2);//concatena cero y slice solo toma los dos ultimos numeros
let getAmPmHour = date =>{//formato am y pm
    let hours = date.getHours(),
        minutes = date.getMinutes(),
        amPm = hours >= 12 ? 'Pm' : 'Am';
    if ( hours > 12 ) hours -= 12;
    return `${putHourZeroInitial(hours)}:${putHourZeroInitial(minutes)} ${amPm}`;
};

let dateformated = `${getStringDay(date.getDay())} ${date.getDate()} de ${getStringMonth(date.getMonth())} de ${date.getFullYear()}, ${getAmPmHour(date)}`;
console.log(dateformated);
 fin ejemplo 1 */

/*
definir fechas
1. new Date(year, month, day, hours, minutes, seconds, miliseconds)
2. new Date(string)
 */
//console.log(new Date(1980,1,5,20,55,36,3600));//si nop le paso todos los valores me los setea en cero
//console.log(new Date('2/4/1980'));//otro formato
//console.log(new Date('Mon Feb 04 1980 12:00:00 GMT-0500'));//otro formato
/*
operaciones con fechas
se operan con milisagundos
de s a milisegundos
1s = s * 1000ms
1m = s * 1000ms * 60
1h = s * 1000ms * 60 * 60
1d = s * 1000ms * 60 * 60 * 24
1y = s * 1000ms * 60 * 60 * 24 * 365

de milisegundos a s
1s = ms / 1000ms
1m = ms / (1000ms * 60)
1h = ms / (1000ms * 60 * 60)
1d = ms / (1000ms * 60 * 60 * 24)
1m = ms / (1000ms * 60 * 60 * 24 * 30)
1y = 1000ms / (60 * 60 * 24 * 365)
todo cumple de la family
 cumple de mama = 9/13/1968
 cumple de papa = 9/19/1964
 */
// let msToDateObj = ms => {
//   let seconds =     Math.floor(ms/1000),
//       minutes =     Math.floor(ms / (1000 *60)),
//       hours =       Math.floor(ms / (1000 *60 *60)),
//       days =        Math.floor(ms / (1000 *60 *60 *24)),
//       months =      Math.floor(ms / (1000 *60 *60 *24 *30)),
//       years =       Math.floor(ms / (1000 *60 *60 *24 *365));
//   return { years, months, days, hours, minutes, seconds};
// };
// let msToExpandDateObj = data => {
//     let years = msToDateObj(data).years,
//         days = msToDateObj(data).days % 365,
//         hours = msToDateObj(data).hours % 24,
//         minutes = msToDateObj(data).minutes % 60,
//         seconds = msToDateObj(data).seconds % 60;
//     return {years,days,hours,minutes,seconds};
// };
// let date2 = new Date('3/5/1997'),//2/4/1980
//     date = new Date();
//console.log(msToExpandDateObj(date2-date));//se pueden restar dos fechas pero las da en milisegundos
//console.log(date.getFullYear()-date2.getFullYear());//se pueden restar dos fechas pero las da en milisegundos

/*
horarios y fechas internacionales
.getUTC... valor de hora internacional
.getTimeZoneOffset() -> devuelve la diferencia en minutos de la hora zero del meridiano de greenwitch a tu zona horaria
 */
let date = new Date();
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(date.getTimezoneOffset());