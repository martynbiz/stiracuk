var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
// var watch = require('gulp-watch');


// Task for compiling sass, and minifying. Run with 'gulp sass'
gulp.task('sass', function () {

    // include paths for sass compiler
    var sassPaths = [
        'bower_components/foundation-sites/scss',
        'bower_components/motion-ui/src',
        'src/scss'
    ];

    return gulp.src('src/scss/app.scss')
        .pipe(sass({
            // outputStyle: 'compressed', // if css compressed **file size**
            includePaths: sassPaths
        }))
        .pipe(gulp.dest('src/css'));
});

// Task for compiling styles. Run with 'gulp css'. as we cannot
// guarantee all style libraries will provide sass files, this task will
// allow us to bring in css files too.
gulp.task('css', function() {

    // // do any sass compilation prior to concating css files.
    // gulp.start('sass');

    // Will compile all styles into a single file. Add files to the array,
    // styles will be compiled in that order.
    var scripts = [
        'bower_components/slick-carousel/slick/slick.css',
        'bower_components/slick-carousel/slick/slick-theme.css',
        //...
        'src/css/app.css' // compiled app.sass (includes foundation css)
    ];

    return gulp.src(scripts)
        .pipe(concatCss('app.css'))
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

// Task for compiling scripts, and minifying. Run with 'gulp js'
gulp.task('js', function() {

    // Will compile all scripts into a single script. Add files to the array,
    // scripts will be compiled in that order.
    var scripts = [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/what-input/dist/what-input.js',
        'bower_components/foundation-sites/dist/js/foundation.js',
        'bower_components/slick-carousel/slick/slick.js',
        //...
        'src/js/app.js',
        'src/js/courses.js'
    ];

    return gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(uglify()) // minify
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch(['src/scss/**/*.scss'], ['sass']);
    gulp.watch(['src/css/**/*.css'], ['css']);
    gulp.watch(['src/js/**/*.js'], ['js']);
});

// // Gulp default task, will compile styles and scripts. Run with 'gulp'
// gulp.task('default', function() {
//     gulp.start('sass');
//     gulp.start('js');
// });
//
// // Run with 'gulp watch'
// gulp.task('watch', function () {
//     // watch(['src/scss/**/*.scss', 'src/js/**/*.js'], function (event) {
//     //     gulp.start('css');
//     //     gulp.start('js');
//     // });
//
//     gulp.watch(['src/scss/**/*.scss'], ['sass']);
//     // gulp.watch(['src/scss/**/*.scss'], ['sass']);
// });
