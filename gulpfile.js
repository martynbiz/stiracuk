var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');

// Task for compiling sass, and minifying. Run with 'gulp sass'
gulp.task('sass', function () {

    // include paths for sass compiler
    var sassPaths = [
        'bower_components/foundation-sites/scss',
        'bower_components/motion-ui/src',
        'scss'
    ];

    return gulp.src('scss/app.scss')
        .pipe(sass({
            includePaths: sassPaths,
            outputStyle: 'compressed' // if css compressed **file size**
        }))
        .pipe(gulp.dest('dist/css'));
});

// Task for compiling scripts, and minifying. Run with 'gulp scripts'
gulp.task('scripts', function() {

    // Will compile all scripts into a single script. Add files to the array,
    // scripts will be compiled in that order.
    var scripts = [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/what-input/dist/what-input.js',
        'bower_components/foundation-sites/dist/js/foundation.js',
        'js/app.js'
    ];

    return gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(uglify()) // minify
        .pipe(gulp.dest('dist/js'));
});

// Gulp default task, will compile styles and scripts. Run with 'gulp'
gulp.task('default', function() {
    gulp.start('sass');
    gulp.start('scripts');
});

// Run with 'gulp watch'
gulp.task('watch', function () {
    watch(['scss/**/*.scss', 'js/**/*.js'], function (event) {
        gulp.start('sass');
        gulp.start('scripts');
    });
});
