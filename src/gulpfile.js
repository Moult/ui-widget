var gulp = require('gulp');
var ngannotate = require('gulp-ng-annotate');
var concat = require('gulp-concat-sourcemap');

gulp.task('default', function() {
    gulp.src([
        'bower_components/angular/angular.js'
    ]).pipe(ngannotate()).pipe(gulp.dest('../www/js/'));

    gulp.src([
        'myapp/angular.js',
        'myapp/myapp.js',
        'myapp/element/**/*.js',
        'myapp/widget/**/*.js',
        '!myapp/**/*.spec.js'
    ]).pipe(ngannotate())
        .pipe(concat('myapp.js'))
        .pipe(gulp.dest('../www/js/'));

});
