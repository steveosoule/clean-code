var gulp = require('gulp');

var baseSrc = 'examples/';

/**
Favorites:
	- htmllint
	- eslint
	- stylelint
	- phpcs
*/

function lint_htmlhint(){
	var htmlhint = require('gulp-htmlhint');
	// return gulp.src([baseSrc + '**/*.html', baseSrc + '**/*.htm', '!./node_modules/**'])
	return gulp.src([baseSrc + '**/*.html', baseSrc + '**/*.htm'])
		.pipe(htmlhint({
			htmlhintrc: './.htmlhintrc'
		}))
		.pipe(htmlhint.reporter())
		.pipe(htmlhint.failReporter({ suppress: true }));
}
gulp.task('lint:htmlhint', lint_htmlhint);

function lint_htmllint(){
	var htmllint = require('gulp-htmllint');
	return gulp.src(baseSrc + '**/*.html')
		.pipe(htmllint());
}
gulp.task('lint:htmllint', lint_htmllint);

function lint_eslint(){
	var eslint = require('gulp-eslint');
	return gulp.src(baseSrc + '**/*.js')
		.pipe(eslint({
			configFile: './.eslintrc.js'
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}
gulp.task('lint:eslint', lint_eslint);

function lint_jshint(){
	var jshint = require('gulp-jshint');
	return gulp.src(baseSrc + '**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
}
gulp.task('lint:jshint', lint_jshint);

function lint_jslint(){
	var jslint = require('gulp-jslint');
	return gulp.src(baseSrc + '**/*.js')
		.pipe(jslint())
		.pipe(jslint.reporter('default'));
}
gulp.task('lint:jslint', lint_jslint);

function lint_csslint(){
	var csslint = require('gulp-csslint');
	return gulp.src(baseSrc + '**/*.css')
		.pipe(csslint())
		.pipe(csslint.formatter());
}
gulp.task('lint:csslint', lint_csslint);

function lint_stylelint(){
	var stylelint = require('gulp-stylelint');
	return gulp.src(baseSrc + '**/*.css')
		.pipe(stylelint({
			reporters: [
				{
					formatter: 'string',
					console: true
				}
			]
		}));
}
gulp.task('lint:stylelint', lint_stylelint);

function lint_phplint(callback){
	var phplint = require('phplint').lint;
	return phplint([baseSrc + '**/*.php'], {}, function (err) {
		if (err) {
			callback(err);
		} else {
			callback();
		}
	});
}
gulp.task('lint:phplint', lint_phplint);

function lint_phpcs(){
	var phpcs = require('gulp-phpcs');
	return gulp.src([baseSrc + '**/*.php'])
		.pipe(phpcs({
			// standard: 'Zend', //  MySource, PEAR, PSR1, PSR12, PSR2, Squiz and Zend
			standard: './phpcs.xml',
			warningSeverity: 0
		}))
		.pipe(phpcs.reporter('log'));
}
gulp.task('lint:phpcs', lint_phpcs);

function lint_remark(){
	var remark = require('gulp-remark');
	var html = require('remark-html');
	var lint = require('remark-preset-lint-markdown-style-guide');

	return gulp.src(baseSrc + '**/*.md')
		.pipe(remark().use(html).use(lint));
}
gulp.task('lint:remark', lint_remark);


function lint_markdownlint(){
	var through2 = require('through2');
	var markdownlint = require('markdownlint');

	return gulp.src('*.md', { 'read': false })
		.pipe(through2.obj(function obj(file, enc, next) {
			markdownlint(
				{ 'files': [ file.relative ] },
				function callback(err, result) {
					var resultString = (result || '').toString();
					if (resultString) {
						console.log(resultString);
					}
					next(err, file);
				}
			);
		}));
}
gulp.task('lint:markdownlint', lint_markdownlint);
