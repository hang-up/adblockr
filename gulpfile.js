var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');


gulp.task('compress', function() {
  return gulp.src(['js/adblockr.js', 'js/adblockr_jquery.js'])
    .pipe(uglify())
    .pipe(gulp.dest('js/min'));
});

gulp.task('css', function () {
  gulp.src('/adblockr.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('/'));
});

gulp.task('default', ["compress", "css"]);
