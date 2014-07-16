var gulp = require("gulp"),
	jade = require('gulp-jade'),
	less = require('gulp-less'),
	path = require('path');

gulp.task('less', function () {
	return gulp.src('style/**/*.less')
		.pipe(less({
			paths: [ 
				path.join(__dirname, 'style'), 
				path.join(__dirname, 'bower_components/bootstrap/less'), 
				path.join(__dirname, 'bower_components/lesshat/build') ]
		}))
		.pipe(gulp.dest('./www/style'));
});

gulp.task('jade', function() {
	return gulp.src(['**/*.jade', '!bower_components/**', '!node_modules/**', '!www/**', '!style/**'])
		.pipe(jade({
			locals: {}
		}))
		.pipe(gulp.dest('./www'))
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch(['**/*.jade', '!bower_components/**', '!node_modules/**', '!www/**', '!style/**'], ['jade']);
	gulp.watch('style/**/*.less', ['less']);
});

// Default Task
gulp.task('default', ['less', 'jade']);