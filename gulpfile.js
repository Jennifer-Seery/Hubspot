var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var del = require('del');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var ejs = require('gulp-ejs');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
	return gulp.src('src/scss/styles.scss')
	.pipe(sass())
	.pipe(gulp.dest('build/pages'))
});

gulp.task('js', function() {
  return gulp.src('src/js/**')
   .pipe(gulp.dest('build/pages'))
});

gulp.task('data', function() {
  return gulp.src('src/js/data/**')
   .pipe(gulp.dest('build/pages'))
});

gulp.task('ejs', function() {
  return gulp.src('src/views/**/*.ejs')
   .pipe(ejs({}, {ext:'.html'}))
   .pipe(gulp.dest('build'))
});

gulp.task('serve', function() {

 browserSync.init({
        server: "./build/pages/"  
    });

});

// The default task (called when we run `gulp` from cli)
gulp.task('default', [ 'css', 'js', 'data', 'ejs','serve'], function() {

});
