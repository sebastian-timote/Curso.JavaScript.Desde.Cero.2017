//el nombre de las propiedades no deben tener - ni numeros iniciales si son asi toca ponerles ''
let miSer = {//esto es un objeto
    nombre: 'sebastian',
    apellido: 'timote',
    edad: 22,
    pais:'colombia',
    esPadre:false,
    gustos:['basketball','aprender','mujeres']
}
miSer.ciudad = 'cali';//añado otra propiedad al objeto
console.log(miSer.gustos[0]);
console.log(miSer);
console.log(miSer.nombre);