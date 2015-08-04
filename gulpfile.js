var gulp = require('gulp'),
	qunit = require('gulp-qunit'),
	bower = require('gulp-bower');
	

gulp.task('default', function(){
	return bower()
	.pipe(gulp.dest('bower_components/'));
	return gulp.src('./test/test.html')
	.pipe(qunit());
});