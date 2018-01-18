const gulp = require('gulp');
const less = require('gulp-less');
const webserver = require('gulp-webserver');
const sourceMaps = require('gulp-sourcemaps');


gulp.task('webserver', () => {
    gulp.src('public')
        .pipe(webserver({
            livereload: true,
            directorylisten: true,
            open: true
        }));
});

gulp.task('less', () => {
    return gulp.src('public/assets/less/main.less')
        .pipe(sourceMaps.init('./'))
        .pipe(less())
        .pipe(gulp.dest('public/assets/css/'));
});

gulp.task('watch', () => {
    gulp.watch('public/assets/less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'webserver', 'watch']);