const ED = {//no importa que sea const se le puede agregar propiedades
    nombre: 'escuela digital',
    sedes: ['bogota','lima'],
    profesores:['alexis','daniel','rafa','jon','francisco','jose','alvaro'],
    fundacion:2010,
    mejorPlataforma:true,
    esLogan:'aprende desde cero',
    usp:'somos el primer sitioen español de educacion ',
    saludar(){
        return 'Bienvenidos a escuela digital good vibes '
    }
}
//operadores
//delete--elimina propiedad
//in --devuelve true si existe la propiedad en el objeto
//delete ED.fundacion;
Object.prototype.numeroMagico = 27;//creacion de un objecto en el prototipo
console.log('numeroMagico' in ED);//in me muestra los objetos creados tanto en el prototipo como en el documento
//console.log(ED.numeroMagico);
console.log(ED.hasOwnProperty('numeroMagico'));//esta funcion me dice si la propiedad existe en el objeto de este documento
//copiar un objeto
let ED2 = Object.assign({},ED);
//console.log(ED);
//console.log(ED2);
let a = 'hola', b = 'mundo';
let myObj = {
    a:a,//me toma el valor string de la otra a 'hola'
    b:b
}
console.log(myObj);
let myObj2 = {
    [a + b] : 'concateno'//concateno el valor de a y b fuera de este objeto
}
console.log(myObj2);