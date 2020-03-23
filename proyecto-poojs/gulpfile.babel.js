import gulp from 'gulp';
import babel from 'gulp-babel';
// gulp.task();//define una tarea
// gulp.src();//indica un directorio en el cual va atrabajar= prigen
// gulp.dest();//define un directorio en el cual gulp va a dejar los archivos procesados= destino
// gulp.watch();//mira los cambios en un directorio o archivo y automaticamente realiza la tarea que le indiques por medio de plugins
gulp.task('es6', () => {
    gulp.src('./es6/*.js')//ruta donde vaa buscar los archivos js el * significa todos los archivos js
        .pipe(babel())//le pasamos la direccion anterior via pipe a babel
        .pipe(gulp.dest('./es5'))
});
gulp.task('default', () => {
    gulp.watch('./es6/*.js', gulp.series('es6'))
});