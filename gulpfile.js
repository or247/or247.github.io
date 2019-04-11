var gulp = require('gulp');
var sass = require('gulp-sass');

// create minified css from sass files
gulp.task('styles', function () {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'))

});
