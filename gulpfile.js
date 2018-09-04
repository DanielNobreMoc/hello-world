//Essa parte comentada é um padrão que foi usado na aula 2 e que na aula 03 foi alterado:
/*var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});*/

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default',['sass']);

gulp.task('sass', function () {
    return gulp.src('assets/src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});