'use strict';

let gulp = require('gulp');
const stripDebug = require('gulp-strip-debug');
const imagemin = require('gulp-imagemin');

gulp.task('clean_logs', function () {
  return gulp.src('dist/*.js')
    .pipe(stripDebug())
    .pipe(gulp.dest('dist'));
});

gulp.task('imagemin', function () {
  return gulp.src(['dist/*.{gif,png,jpg}'])
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [
        {
          removeViewBox: true
        }
      ]
    }))
    .pipe(gulp.dest('dist/'));
});