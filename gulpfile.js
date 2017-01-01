'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');

const project = ts.createProject('tsconfig.json');

gulp.task('build', () => {
	const tsResult = project
		.src()
		.pipe(project());

	return merge([
		tsResult.pipe(gulp.dest('./built/')),
		tsResult.dts.pipe(gulp.dest('./built/'))
	]);
});
