var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    coffee = require('gulp-coffee'),
    // sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

// task for compiling less, combining css, and minifying
gulp.task('sass', function () {

    var sassPaths = [
        'bower_components/normalize.scss/sass',
        'bower_components/foundation-sites/scss',
        'bower_components/motion-ui/src',
        'scss'
    ];

    // complile frontend less
    return gulp.src('scss/app.scss')
        // .pipe(sourcemaps.init())  // Process the original sources
        .pipe(sass({
            includePaths: sassPaths,
            outputStyle: 'compressed' // if css compressed **file size**
        }))
        // .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {

    // combine all files
    return gulp.src([
            'js/app.js'
        ])
        .pipe(concat('app.js'))
        // //only uglify if gulp is ran with '--type production'
        // .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', function() {
    gulp.start('sass');
    gulp.start('scripts');
});

gulp.task('watch', function () {
    watch(['scss/**/*.less', 'js/**/*.js'], function (event) {
        gulp.start('sass');
        gulp.start('scripts');
    });
});
