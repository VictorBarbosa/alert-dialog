 
/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    
};

paths.js =  "./scripts/*.js";
  
gulp.task("min:js", function () {
    return gulp.src([paths.js], { base: "." })
        .pipe(concat("./alertFile..min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./scripts/"));
});

 
gulp.task("min", ["min:js", "min:css"]);
