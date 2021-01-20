const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task("css", function () {
    return gulp.src("dist/css/app.a5c29f03.css")
        .pipe(autoprefixer())
        .pipe(gulp.dest("dist/maincss"))
        
    
});