var buildPaths =  {
  srcRoot: "resources/",
  destRoot: "public/uncompresed/"
};

require("./build/es5")({
  paths: buildPaths
});

var gulp = require("gulp");
var uglify = require("gulp-uglify");
var zTask = require("require-dir")("../../zhilizhili-gulp-task/build").index;

zTask.scope(gulp);

gulp.task('build-sass', function () {
	zTask.require('build-sass')({
		src: buildPaths.srcRoot + 'sass/**/*.scss',
		dest: buildPaths.destRoot + 'css'
	});
});

gulp.task('watch', function(){
	gulp.watch(buildPaths.srcRoot + '/sass/**/*.scss', ['build-sass']);
});

gulp.task("uglify", function() {
    return  gulp.src("public/uncompresed/*.js")
                .pipe(uglify())
                .pipe(gulp.dest("public/minified"));
});
