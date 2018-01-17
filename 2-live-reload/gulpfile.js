var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

// scripts 

gulp.task('script', () => {
    console.log('Starting Script Task');
    gulp.src('public/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/script/minified'))
});

// live reload

gulp.task('webserver', () => {
    console.log('Starting Webserver for live reload');
    gulp.src('public')
        .pipe(webserver({
            livereload: true,
            directorylisten: true,
            open: true
        }));
});

// watching file changing
gulp.task('watch', () => {
    gulp.watch('public/script/**/*.js', ['script']);
});


// default task combines all task

gulp.task('default', ['script','webserver', 'watch']);
