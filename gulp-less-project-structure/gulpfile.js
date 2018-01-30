const gulp = require('gulp');
const less = require('gulp-less');
const sourceMaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('less', () => {
    return gulp.src('public/assets/less/main.less')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(sourceMaps.init())
        .pipe(sourceMaps.write('/'))
        .pipe(gulp.dest('public/assets/css/'));
});

gulp.task('browser-sync', ['less'], () => {
    browserSync.init({
        server: './public'
    });

    gulp.watch('public/assets/less/**/*.less', ['less']);
    gulp.watch('public/**/**/**/**').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);