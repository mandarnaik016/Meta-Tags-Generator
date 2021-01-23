const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const clean = require("gulp-clean");

// gulp include:html
gulp.task("include:html", () => {
  return gulp
    .src(["./src/partial/index.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "./src/partial/component",
      })
    )
    .pipe(gulp.dest("./"));
});

// gulp minify:js
gulp.task("minify:js", () => {
  return gulp
    .src([
      "./src/js/jquery.min.js",
      "./src/js/popper.min.js",
      "./src/js/bootstrap-material-design.min.js",
      "./src/js/moment.min.js",
      "./src/js/bootstrap-datetimepicker.js",
      "./src/js/nouislider.min.js",
      "./src/js/material-kit.min.js",
      "./src/js/main.js",
    ])
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("./dist/js"));
});

// gulp minify:css
gulp.task("minify:css", () => {
  return gulp
    .src([
      "./src/css/material-kit.css",
      "./src/css/font-awesome.min.css",
      "./src/css/main.css",
    ])
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("./dist/css"));
});

// gulp copy:font
gulp.task("copy:font", () => {
  return gulp.src("./src/font/**/*.*").pipe(gulp.dest("./dist/font"));
});

// gulp compress:img
gulp.task("compress:img", () => {
  return gulp
    .src("./src/img/**/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img"));
});

// gulp clean:dist
gulp.task("clean:dist", () => {
  return gulp.src("./dist").pipe(clean());
});

// gulp default
gulp.task(
  "default",
  gulp.series(
    "include:html",
    "minify:js",
    "minify:css",
    "copy:font",
    "compress:img"
  )
);
