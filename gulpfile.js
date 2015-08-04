var gulp = require('gulp'),
	qunit = require('gulp-qunit'),
	bower = require('gulp-bower');
gulp.task('test', function(){
	return gulp.src('./test/test.html')
	.pipe(qunit());
});
gulp.task('bower', function(){
	return bower()
	.pipe(gulp.dest('bower_components/'));
});