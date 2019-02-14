'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

const sassFiles = ['./sass/grid.scss', './sass/header.scss', './sass/design.scss',
    './sass/features.scss', './sass/design1.scss', './sass/feedback.scss',
    './sass/browser.scss', './sass/form.scss', './sass/footer.scss'];

gulp.task('sass', function () {
    return gulp.src(sassFiles)
        .pipe(sourcemaps.init())
        .pipe(sass( {sourcemap: true}).on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

