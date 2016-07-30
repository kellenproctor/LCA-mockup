var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync').create();



gulp.task('default', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('templates/**/*.html').on('change', browserSync.reload);

    browserSync.init({
        proxy: "http://0.0.0.0:8000/"
    });
});

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./static'))
        .pipe(browserSync.stream());
});

//Run Flask server
gulp.task('runserver', function() {
    var proc = exec('python __init__.py');
});
