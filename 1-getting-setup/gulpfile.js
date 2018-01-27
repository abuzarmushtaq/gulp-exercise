var gulp = require('gulp');
var uglify = require('gulp-uglify');


// styles
gulp.task('styles', () => {
    console.log('Starting Styles Task');
});

// scripts 

gulp.task('script', () => {
    console.log('Starting Script Task');
    gulp.src('public/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/script/minified'))
});

gulp.watch('public/script/*.js', ['script']);

// images 

gulp.task('images', () => {
    console.log('Starting Images Task');
});

// <default>s task contain all task

gulp.task('default', () => {
    console.log('Running Default Task');
});