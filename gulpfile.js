var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-sass', function() {
  return gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/*.scss', ['build-sass']);
});

gulp.task('default', ['watch']);
