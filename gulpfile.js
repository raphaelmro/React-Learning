var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({keepSpecialComments : 0}))
        .pipe(gulp.dest('src/css'))
});

gulp.task('default', function (){
    gulp.watch('src/scss/**/*.scss', ['sass'], ['minify-css']);
    gulp.src('app')
      .pipe(webserver({
        livereload: true,
        open: true,
        port: 1313,
        directoryListing: {
          enable: true,
        }
      }));
});
