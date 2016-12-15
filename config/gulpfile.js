'use strict';

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'run-sequence', 'del']
});

gulp.buildSettings = {
  paths: {
    extensionTmp: './../tmp',
    buildSrc: './../build/static',
    assets: './../src/assets',
    archives: './../archives'
  },
  zipName: 'p-img-extension'
};


gulp.task('build extension', function () {
  plugins.runSequence('clean', ['misc', 'html'], 'copyBackgroundJS', 'copyAppJS', 'rename', 'removeUnnecessary', 'zipPublish' /*, 'clean'*/);
});

gulp.task('clean', function () {
  return plugins.del([
    gulp.buildSettings.paths.extensionTmp + '/**'
  ], {force: true});
});

gulp.task('misc', ['manifest'], function () {
  return gulp.src([gulp.buildSettings.paths.assets + '/**/*.png'])
    .pipe(gulp.dest(gulp.buildSettings.paths.extensionTmp + '/assets'));
});

gulp.task('manifest', function () {
  return gulp.src(gulp.buildSettings.paths.assets + '/manifest.json')
    .pipe(gulp.dest(gulp.buildSettings.paths.extensionTmp));
});

gulp.task('html', function () {
  return gulp.src([
    gulp.buildSettings.paths.assets + '/views/*.html'
  ])
    .pipe(gulp.dest(gulp.buildSettings.paths.extensionTmp + '/views/'));
});

gulp.task('copyBackgroundJS', function () {
  return gulp.src(gulp.buildSettings.paths.assets + '/background.js')
    .pipe(gulp.dest(gulp.buildSettings.paths.extensionTmp + '/assets'));
});

gulp.task('copyAppJS', function () {
  return gulp.src(gulp.buildSettings.paths.buildSrc + '/**')
    .pipe(gulp.dest(gulp.buildSettings.paths.extensionTmp + '/static'));
});

gulp.task('rename', function () {
  return gulp.src(gulp.buildSettings.paths.extensionTmp + '/static/js/main.**.js')
    .pipe(plugins.rename('app.js'))
    .pipe(gulp.dest(gulp.buildSettings.paths.extensionTmp + '/static/js/'));
});


gulp.task('removeUnnecessary', function () {
  return plugins.del([
    gulp.buildSettings.paths.extensionTmp + '/static/js/**.map',
    gulp.buildSettings.paths.extensionTmp + '/static/js/main.**.js'
  ], {force: true});
});

gulp.task('zipPublish', function () {
  let currentDate = new Date().toJSON().slice(0, 10);
  return gulp.src(gulp.buildSettings.paths.extensionTmp + '/**/*')
    .pipe(plugins.zip(gulp.buildSettings.zipName + '_' + currentDate + '.zip'))
    .pipe(gulp.dest(gulp.buildSettings.paths.archives));
});