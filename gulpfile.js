var gulp = require("gulp");
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');


gulp.task("build", function () {
    return gulp.src('src/ts/search.ts')
        .pipe(plumber())
        .pipe(tsProject())
        .pipe(gulp.dest("dist/"));
});

Error.stackTraceLimit = Infinity;