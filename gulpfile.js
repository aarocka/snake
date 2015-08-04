var gulp = require('gulp'),
	qunit = require('gulp-qunit'),
	bower = require('gulp-bower');
	
gulp.task('bower', function(){
	return bower()
	.pipe(gulp.dest('lib/'));
});
gulp.task('default', function(){
	return gulp.src('./test/test.html')
	.pipe(qunit());
});