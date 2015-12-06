var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

gulp.task('build-js', function() {
  gulp.src('src/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({preserveComments: "license"}))
    .pipe(gulp.dest('dist/'));
});
