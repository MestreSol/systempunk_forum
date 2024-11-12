const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const imagemin = require('gulp-imagemin'); 
const uglify = require('gulp-uglify');

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./css'));
    }
);

gulp.task('image', function () {
    return gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images'));
    }
);

gulp.task('js', function () {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
    }
);

gulp.task('default', ['less', 'image', 'js']);