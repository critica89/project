var gulp = require('gulp');
var connect = require('gulp-connect');
var opn = require('opn');

// Сервер с лайврилоадом
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port:888
  });
  opn('http://localhost:8888')
});

//Работа с html
gulp.task('html',function(){
	gulp.src('./app/*.html')
	.pipe(connect.reload());
});

//Работа с css
gulp.task('css',function(){
	gulp.src('./app/css/*.css')
	.pipe(connect.reload());
});

//Работа с js
gulp.task('js',function(){
	gulp.src('./app/js/*.js')
	.pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(['./app/*.html'], ['html']),
	gulp.watch(['./app/css/*.css'], ['css']),
	gulp.watch(['./app/js/*.js'], ['js']);
});
// Задача по-умолчаню
gulp.task('default', ['connect','watch'], function() {

});
