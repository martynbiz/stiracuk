var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var minimist = require('minimist');

// get parameters from cli
// @see http://gulpjs.org/recipes/pass-arguments-from-cli.html
var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production' }
};
var options = minimist(process.argv.slice(2), knownOptions);


// Task for compiling sass. Run with 'gulp sass'
gulp.task('sass', function () {

    // include paths for sass compiler
    var sassPaths = [
        'bower_components/foundation-sites/scss',
        'bower_components/motion-ui/src',
        'src/scss'
    ];

    return gulp.src('src/scss/app.scss')
        .pipe(gulpif(options.env !== 'production', sourcemaps.init()))
        .pipe(sass({includePaths: sassPaths}))
        .pipe(gulpif(options.env !== 'production', sourcemaps.write()))
        .pipe(gulp.dest('src/css'));
});

// Task for compiling styles. Run with 'gulp css'. as we cannot
// guarantee all style libraries will provide sass files, this task will
// allow us to bring in css files too.
gulp.task('css', function() {

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
        .pipe(gulpif(options.env === 'production', cleanCSS({compatibility: 'ie8'})))
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
        .pipe(gulpif(options.env === 'production', uglify()))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch(['src/scss/**/*.scss'], ['sass']);
    gulp.watch(['src/css/**/*.css'], ['css']);
    gulp.watch(['src/js/**/*.js'], ['js']);
});
