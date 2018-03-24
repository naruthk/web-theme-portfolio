'use strict';

var gulp = require('gulp');
var pkg = require('./package.json');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var gulpPugBeautify = require('gulp-pug-beautify');
var cleanCSS = require('gulp-clean-css');

// Copy required files to their distributions folder
gulp.task('copy', function() {
    // Javascript
    return gulp.src('./js/**/*.js')
        .pipe(gulp.dest('dist'));
});

// Turn SCSS files into CSS
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

// Minified CSS
gulp.task('minify-css', () => {
  return gulp.src('./dist/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

// // Build HTML using PUG template, then Prettify it
gulp.task('pug', function () {
  return gulp.src(['modules/**/*.pug', '*.pug'])
    .pipe(gulpPugBeautify({ omit_empty_lines: true }))
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Run everything
gulp.task('default', ['sass', 'pug', 'minify-css', 'copy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
});

// Dev task with browserSync
gulp.task('watch', ['browserSync', 'sass', 'pug', 'minify-css'], function() {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch(pugFiles, ['pug']);
    // Reloads the browser whenever HTML, custom CSS, or JS files change
    gulp.watch('dist/*.html', browserSync.reload);
    gulp.watch('dist/*.css', browserSync.reload);
    gulp.watch('dist/*.js', browserSync.reload);
    gulp.watch(pugFiles, browserSync.reload);
});
