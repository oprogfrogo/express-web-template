'use strict';

const gulp = require('gulp');
const packet = require('./package.json');

const bower = require('gulp-bower');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const gzip = require('gulp-gzip');
const sass = require('gulp-sass');
const scssLint = require('gulp-scss-lint');
const tar = require('gulp-tar');
const uglify = require('gulp-uglify');

gulp.task('bower', () => {

    return bower();
});

gulp.task('css:application', ['bower'], () => {

    return gulp.src([
        'bower_components/datatables/media/css/jquery.dataTables.min.css',
        'bower_components/datatables.net-zf/css/dataTables.foundation.min.css',
        'bower_components/flatpickr/dist/flatpickr.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/foundation-sites/dist/foundation.min.css',
        'server/public/src/stylesheets/application.css'
    ])
    .pipe(concat('application.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('server/public/dist/stylesheets'));
});

gulp.task('js:application', ['bower'], () => {

    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/motion-ui/dist/motion-ui.js',
        'bower_components/foundation-sites/dist/foundation.js',
        'bower_components/datatables.net/js/jquery.dataTables.min.js',
        'bower_components/datatables.net-zf/js/dataTables.foundation.min.js',
        'bower_components/flatpickr/dist/flatpickr.min.js',
        'server/public/src/javascripts/application.js'
    ])
    .pipe(concat('application.js'))
    .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
    .pipe(gulp.dest('server/public/dist/javascripts'));
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

gulp.task('default', [
    'bower',
    'css:application',
    'js:application',
    'images:default',
    'icons'
]);

gulp.task('release', [
    'bower',
    'js:epoch',
    'sass:epoch'
]);
