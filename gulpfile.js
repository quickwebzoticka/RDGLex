const gulp = require("gulp")
const del = require("del")
const browserSync = require("browser-sync").create()
const image = require("gulp-image")
const cache = require("gulp-cache")
const autoprefixer = require("gulp-autoprefixer")

// styles
const sass = require("gulp-sass")
const rename = require("gulp-rename")
const sourcemaps = require("gulp-sourcemaps")

const paths = {
  root: "./build",
  templates: {
    pages: "src/templates/pages/*.html",
    src: "src/templates/**/*.html",
    dest: "./build/",
  },
  styles: {
    src: "src/styles/**/*.*",
    dest: "./build/styles/",
  },
  scripts: {
    src: "src/scripts/**/*.*",
    dest: "./build/scripts/",
  },
  images: {
    src: "src/images/**/*.*",
    dest: "./build/images/",
  },
  fonts: {
    src: "src/fonts/**/*.*",
    dest: "./build/fonts/",
  },
  libs: {
    src: "src/libs/**/*.*",
    dest: "./build/libs/",
  },
}

//pug
function templates() {
  return gulp.src(paths.templates.pages).pipe(gulp.dest(paths.root))
}

//scss
function styles() {
  return gulp
    .src("./src/styles/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
        cascade: true,
      }),
    ) // Создаем префиксы
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.styles.dest))
}

//scripts
function scripts() {
  return gulp.src(paths.scripts.src).pipe(gulp.dest(paths.scripts.dest))
}

//libs
function libs() {
  return gulp.src(paths.libs.src).pipe(gulp.dest(paths.libs.dest))
}

//fonts
function fonts() {
  return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest))
}

// картинки
function images() {
  return gulp
    .src(paths.images.src) // Берем все изображения из app
    .pipe(image())
    .pipe(gulp.dest(paths.images.dest)) // Выгружаем на продакшен
}

// очистка
function clean() {
  return del(paths.root)
}

// следим за исходниками, папка src
function watch() {
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.templates.src, templates)
  gulp.watch(paths.images.src, images)
  gulp.watch(paths.scripts.src, scripts)
  gulp.watch(paths.libs.src, libs)
}

// следим за build и релоадим браузер
function server() {
  browserSync.init({
    server: paths.root,
  })
  browserSync.watch(paths.root + "/**/*.*", browserSync.reload)
}

// просто работаем
gulp.task(
  "default",
  gulp.series(
    gulp.parallel(styles, templates, images, scripts, fonts, libs),
    gulp.parallel(watch, server),
  ),
)

// контрольная сборка на продакшен
gulp.task(
  "build",
  gulp.series(
    clean,
    gulp.parallel(styles, templates, images, scripts, fonts, libs),
  ),
)
