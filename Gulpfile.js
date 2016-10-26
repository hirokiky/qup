const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css/'))
});
