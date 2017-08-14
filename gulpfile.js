'use strict';

const gulp = require('gulp');
const bower = require('gulp-bower');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const gzip = require('gulp-gzip');
const sass = require('gulp-sass');
const scssLint = require('gulp-scss-lint');
const tar = require('gulp-tar');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const header = require('gulp-header');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const pkg = require('./package.json');

gulp.task('bower', () => {

    return bower();
});

gulp.task('css:application', ['bower'], () => {

    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/datatables/media/css/jquery.dataTables.min.css',
        'bower_components/flatpickr/dist/flatpickr.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'server/public/src/css/application.css'
    ])
    .pipe(concat('application.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('server/public/dist/css'));
});

gulp.task('js:application', ['bower'], () => {

    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/datatables.net/js/jquery.dataTables.min.js',
        'bower_components/flatpickr/dist/flatpickr.min.js',
        'server/public/src/js/application.js'
    ])
    .pipe(concat('application.js'))
    .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
    .pipe(gulp.dest('server/public/dist/js'));
});

gulp.task('images:default', ['bower'], () => {

    return gulp.src([
        'bower_components/datatables/media/images/*'
    ])
    .pipe(gulp.dest('server/public/dist/images'));
});

gulp.task('icons', ['bower'], () => {
    return gulp.src('bower_components/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('server/public/dist/fonts')); 
});

// Compile LESS files from /less into /css
gulp.task('sbadmin-less', function() {
    return gulp.src('server/public/src/less/sb-admin-2.less')
        .pipe(less())
        .pipe(gulp.dest('server/public/dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('sbadmin-minify-css', function() {
    return gulp.src('server/public/src/css/sb-admin-2.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('server/public/dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy JS to dist
gulp.task('sbadmin-js', function() {
    return gulp.src(['server/public/src/js/sb-admin-2.js'])
        .pipe(gulp.dest('server/public/dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

// Minify JS
gulp.task('sbadmin-minify-js', function() {
    return gulp.src('server/public/src/js/sb-admin-2.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('server/public/dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy vendor libraries from /bower_components into /vendor
gulp.task('copy', function() {
    gulp.src(['bower_components/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('server/public/dist/vendor/bootstrap'))

    gulp.src(['bower_components/bootstrap-social/*.css', 'bower_components/bootstrap-social/*.less', 'bower_components/bootstrap-social/*.scss'])
        .pipe(gulp.dest('server/public/dist/vendor/bootstrap-social'))

    gulp.src(['bower_components/datatables/media/**/*'])
        .pipe(gulp.dest('server/public/dist/vendor/datatables'))

    gulp.src(['bower_components/datatables-plugins/integration/bootstrap/3/*'])
        .pipe(gulp.dest('server/public/dist/vendor/datatables-plugins'))

    gulp.src(['bower_components/datatables-responsive/css/*', 'bower_components/datatables-responsive/js/*'])
        .pipe(gulp.dest('server/public/dist/vendor/datatables-responsive'))

    gulp.src(['bower_components/flot/*.js'])
        .pipe(gulp.dest('server/public/dist/vendor/flot'))

    gulp.src(['bower_components/flot.tooltip/js/*.js'])
        .pipe(gulp.dest('server/public/dist/vendor/flot-tooltip'))

    gulp.src(['bower_components/font-awesome/**/*', '!bower_components/font-awesome/*.json', '!bower_components/font-awesome/.*'])
        .pipe(gulp.dest('server/public/dist/vendor/font-awesome'))

    gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('server/public/dist/vendor/jquery'))

    gulp.src(['bower_components/metisMenu/dist/*'])
        .pipe(gulp.dest('server/public/dist/vendor/metisMenu'))

    gulp.src(['bower_components/morrisjs/*.js', 'bower_components/morrisjs/*.css', '!bower_components/morrisjs/Gruntfile.js'])
        .pipe(gulp.dest('server/public/dist/vendor/morrisjs'))

    gulp.src(['bower_components/raphael/raphael.js', 'bower_components/raphael/raphael.min.js'])
        .pipe(gulp.dest('server/public/dist/vendor/raphael'))

})

gulp.task('default', [
    'bower',
    'css:application',
    'js:application',
    'images:default',
    'icons',
    'copy',
    'sbadmin-less',
    'sbadmin-minify-css',
    'sbadmin-js',
    'sbadmin-minify-js'
]);

gulp.task('release', [
    'bower',
    'js:epoch',
    'sass:epoch'
]);
