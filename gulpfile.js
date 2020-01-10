const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require('browser-sync').create();
//compile scss into css
function style(){
    //css file
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}
//watch function to browser sync
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
//exports functions
exports.style = style;
exports.watch = watch;