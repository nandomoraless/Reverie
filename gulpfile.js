const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

function style() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({

                cascade: false,
            })
        )
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}

gulp.task('concat', function () {
    return gulp.src('./src/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'));

});

function watch() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);

}



exports.style = style;
exports.watch = watch;