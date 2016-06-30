'use strict';

var path='./external-libs/node_modules/';

var gulp = require('gulp');

//gulp-sass
var sass = require(path + 'gulp-sass');

gulp.task('styles', function() {
    gulp.src('./app/topNavBar/topNavBar.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/topNavBar/'));

    gulp.src('./app/chat/chat.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/chat/'));
});


//Watch gulp-sass task
gulp.task('sass-watch',function() {
    gulp.watch('./app/topNavBar/topNavBar.scss',['styles']);
    gulp.watch('./app/chat/layout.scss',['styles']);
});



//Watch gulp-connect task
var connect = require(path + 'gulp-connect');

gulp.task('connect', function() {
  connect.server();
});


//default task
gulp.task('default', ['connect']);
