/*
* Timers
*
* setTimeout(cb,t)-> espera un tiempo y despues de ese tiempo ejecuta la funcion que le pases como parametro
* setInterval(cb,t) -> ejecuta la funcion repetidas veces en cierta cantidad de tiempo
* callback funcion que se ejecuta dentro de otra
 */
//let counter = num => console.log(++num);
//setTimeout(counter(2), 10000);//not found
// setTimeout(function () {
//     counter(1);
// }, 3000);
// let count = 0;
// let myInterval = setInterval(function () {
//     console.log(++count);
//     if (count == 5){
//         clearInterval(myInterval);
//     }
// },2000);

/*
* ejercicio reloj
 */
// let countDown = ms => {
//     let myCountDown = setInterval(function () {
//         ms -= 1000;
//         let minutes = Math.floor(ms/(1000*60)),
//             seconds = Math.floor((ms%(1000*60)) / 1000);
//             document.body.innerHTML = `Quedan ${minutes} minutos y ${seconds} segundos`;
//             if (ms == 0){
//                 clearInterval(myCountDown);
//                 document.body.innerHTML = `tiempo cumplido`;
//             }
//     },1000)
// };
// countDown(10000);

/*
*efecto como si estuvieras escribiendo
 */

// let writing = str => {
//     let arrFromStr = str.split('');
//     let i = 0;
//     let printStr = setInterval(function () {
//     document.body.innerHTML += arrFromStr[i];
//     i++;
//     if (i === arrFromStr.length){
//         clearInterval(printStr);
//         document.body.style.color = 'steelblue';
//     }
//     },200);
// };

/*
*efecto como si estuvieras escribiendo sin tomar espacios
 */

let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function () {
        if (arrFromStr[i] === ' '){
            document.body.innerHTML += arrFromStr[i];
            document.body.innerHTML += arrFromStr[ i + 1 ];
            i += 2;
        }else{
            document.body.innerHTML += arrFromStr[i];
            i++;
        }
        if (i === arrFromStr.length){
            clearInterval(printStr);
            document.body.style.color = 'steelblue';
        }
    },200);
};
writing('bienvenidos a Escuela Digital');