'use strict';

let gulp = require('gulp');
const stripDebug = require('gulp-strip-debug');

gulp.task('clean_logs', function () {
  return gulp.src('dist/*.js')
    .pipe(stripDebug())
    .pipe(gulp.dest('dist'));
});