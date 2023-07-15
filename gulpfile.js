const gulp = require('gulp');
const zip = require('gulp-zip');
const del = require('del');

gulp.task('clean', () => {
	return del([
		'languages',
		'bundled'
	]);
});

exports.bundle = () => (
	gulp.src([
		'**/*',
		'!bundled/**',
		'!node_modules/**',
		'!src/**',
		'!.eslintrc.js',
		'!.gitignore',
		'!gulpfile.js',
		'!package.json',
		'!package-lock.json',
		'!readme.md',
		'!README.md',
		'!todo.txt',
		'!webpack.config.js',
	])
		.pipe(zip('info-cards.zip'))
		.pipe(gulp.dest('bundled'))
);