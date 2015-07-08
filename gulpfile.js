var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('compress', function() {
  return gulp.src(['js/adblockr.js', 'js/adblockr_jquery.js'])
    .pipe(uglify())
    .pipe(gulp.dest('js/min'));
});
