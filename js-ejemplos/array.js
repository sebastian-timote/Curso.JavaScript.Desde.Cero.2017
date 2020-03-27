let arr = [1,2,3,4,5];
let num = arr.find(el => el >3);//esto reemplaza un condicional
let numIndex = arr.findIndex(el => el > 3);
console.log(num);//imprime solo un elemnto del array que cumpla la condicion
console.log(numIndex);//imprime index del array 
//iterador es un object con metodo next()
//este metodo devuelve un objeto con dos propiedades value,done=boolean
//funciones del iterador .keys() .next() .entries()
let iterador = arr.keys();//accedo a los indices del array
//let iterador = arr.entries();
console.log(iterador.next());//recorre posicion del array
console.log(iterador.next());//recorre posicion del array
console.log(iterador.next());//recorre posicion del array
console.log(iterador.next());//recorre posicion del array
console.log(iterador.next());//recorre posicion del array
console.log(iterador.next());//recorre posicion del array