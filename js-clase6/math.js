/*
*OBJETO MATH
*solo tiene propiedades y metodos estaticos  es decir no se necesita instanciar
*
*METODOS
* .max(a,b,c,d...n) -> devuelve numero mayor de una lista de numeos
* .min(a,b,c,d...n) -> devuelve numero menor de una lista de numeos
* .random() -> numero aleatorio entre cero y uno
* .floor() -> redondea decimal hacia abajo
* .ceil() -> redondea decimal hacia arriba
* .round() -> redondea decimal a su entero mas cercano
* .pow(x,n) -> eleva x al exponente n
* .sqrt(n) -> devuelve la raiz cuadrada de n
 */

//MATH
//console.log(Math.max(1,5,2,8,97,5,6,3,2,1));
// let arr = [-1,1,5,2,8,97,5,6,3,2,1];
// console.log(Math.max(arr));//no funciona ya que no recibe arrays
// console.log(Math.max(...arr));//con el spread operator expandimos el array
// console.log(Math.min(...arr));

/*
*obtener un entero aleatorio
 */
// let randomNumber = Math.random() *10;//es multiplica por que los valores de random siempre son 0.01 a 0.99
// console.log(randomNumber);

//toma un rango de numeros entre min y max y da un numero aleatorio
let getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max -min ) + min);
};
// console.log(getRandomNumber(20,30));

let arr = ['patricia','simon','vicky','migue','diego'];
console.log(arr[getRandomNumber(0,arr.length)]);

let guestNumber = (min, max) => {
    let numMachine = getRandomNumber( min, max);
  let numPlayer;
  let count = 0;
  do {
      //numPlayer = prompt('Adivina el numero de la maquina');
      //numPlayer = Number(prompt('Adivina el numero de la maquina'));//number() tambien convierte un string en numero
      numPlayer = parseInt(prompt(`Adivina el numero de la maquina entre ${min} y ${max}`),10);//parseint convierte string a numero en este caso base 10
        count++;
      if (numPlayer > numMachine){
          alert(`tu numero es mayor que el de la maquina
          vas ${count} ${count == 1 ? 'intento' : 'intentos'}`);
      }else if (numPlayer < numMachine){
          alert(`tu numero es menor que el de la maquina
          vas ${count} ${count == 1 ? 'intento' : 'intentos'}`);
      }else{
          alert(`adivinaste el numero en ${count} ${count == 1 ? 'intento!' : 'intentos!'} `);
      }


  }while ( numPlayer !== numMachine);
};
guestNumber(10,20);