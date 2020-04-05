import gulp from 'gulp';
import babel from 'gulp-babel';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';//utilizamos un localhost rapido sin necesidad de usar un xampp o appserv
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
// gulp.task();//define una tarea
// gulp.src();//indica un directorio en el cual va atrabajar= prigen
// gulp.dest();//define un directorio en el cual gulp va a dejar los archivos procesados= destino
// gulp.watch();//mira los cambios en un directorio o archivo y automaticamente realiza la tarea que le indiques por medio de plugins

const server = browserSync.create();
//plugins de postcss
//el unico que tenemos o usamos es cssnano
const postCSSPlugins = [
  cssnano({
      autoprefixer: {
          add: true
      }
  })
];
gulp.task('es6', () =>
    gulp.src('./dev/js/*.js')//ruta donde vaa buscar los archivos js el * significa todos los archivos js
        .pipe(babel())//le pasamos la direccion anterior via pipe a babel
        .pipe(gulp.dest('./public/js'))
);
gulp.task('sass', () =>
    gulp.src('./dev/scss/styles.scss')
        .pipe(sass())//lo transforma a css
        .pipe(postcss(postCSSPlugins))//lo minifica
        .pipe(gulp.dest('./public/css'))//lo manda a public
        .pipe(server.stream({match: '**/*.css'}))//atravez de stream se lo manda al server y no hay necesidad de refrescar
);
gulp.task('pug', () =>
    gulp.src('./dev/pug/*.pug')
        .pipe(pug())//con pipe paso los datos
        .pipe(gulp.dest('./public'))
);
gulp.task('default', () => {
    server.init({
        server: {
            baseDir: './public'
        }
    });
    gulp.watch('./dev/js/*.js', gulp.series('es6'));
    gulp.watch('./dev/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('./dev/scss/**/*.scss', gulp.series('sass'));
});



