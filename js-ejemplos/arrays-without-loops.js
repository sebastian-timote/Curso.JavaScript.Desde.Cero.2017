//.map()
//.filter()
//.reduce()
let estudiantes =[//esto es un array de objetos INCREIBLE!!
    {
        nombre: 'carlos',
        calificacion: 20
    },
    {
        nombre: 'juan',
        calificacion: 12
    },
    {
        nombre: 'maria',
        calificacion: 9
    },
    {
        nombre: 'pepe',
        calificacion: 7
    },
    {
        nombre:'arturo',
        calificacion:17
    }
];

//el siguiente loop es al que reemplaza map()
//let estudiantesNombres = [];
//for (let index = 0; index < estudiantes.length; index++) {
//    estudiantesNombres.push(estudiantes[index].nombre);
//}
//console.log(estudiantesNombres);
let estudiantesNombres = estudiantes.map(student => student.nombre);//hace lo mismo que el loop for de arriba
console.log(estudiantesNombres);
