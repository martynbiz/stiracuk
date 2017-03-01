var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');

// task for compiling sass, and minifying
gulp.task('sass', function () {

    var sassPaths = [
        // 'bower_components/normalize.scss/sass',
        'bower_components/foundation-sites/scss',
        'bower_components/motion-ui/src',
        'scss'
    ];

    // complile frontend less
    return gulp.src('scss/app.scss')
        .pipe(sass({
            includePaths: sassPaths,
            outputStyle: 'compressed' // if css compressed **file size**
        }))
        .pipe(gulp.dest('dist/css'));
});

// task for compiling scripts, and minifying
gulp.task('scripts', function() {

    // combine all files
    return gulp.src([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/what-input/dist/what-input.js',
            'bower_components/foundation-sites/dist/js/foundation.js',
            'js/app.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify()) // minify
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', function() {
    gulp.start('sass');
    gulp.start('scripts');
});

gulp.task('watch', function () {
    watch(['scss/**/*.scss', 'js/**/*.js'], function (event) {
        gulp.start('sass');
        gulp.start('scripts');
    });
});
