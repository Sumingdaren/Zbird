const gulp = require("gulp");//加载gulp模块;
const connect = require("gulp-connect");//加载 gulp-connect 插件;
const babel = require("gulp-babel");//加载gulp-babel 插件；
const sass = require("gulp-sass-china");


gulp.task("html",()=>{
	return gulp
				.src(["*.html"])
			 	.pipe(gulp.dest("dist"))
			 	.pipe(connect.reload());//自动刷新;
})
gulp.task("watch",()=>{
	gulp.watch(["scss/*.scss","*.html","src/*.js","libs/*.js"],["sass","html","js"]);
})
gulp.task('server',function(){
    connect.server({
        root:'dist',  //以谁为服务器根目录
        port:8888,  // 端口号 
        livereload:true //开启自动刷新;
    });
});

gulp.task("sass",()=>{
	 return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

gulp.task("default",["watch","server"]);

// gulp.task('es6',() =>{
// 	   return gulp.src('es6/*.js')
// 	        .pipe(babel({
// 	            presets: ['env']
// 	        }))
// 	        .pipe(gulp.dest('dist/scripts/'))
// });
gulp.task("js",()=>{
     return gulp.src(['src/*.js',"libs/*.js"])
    // .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/scripts'));
})

// gulp.task("html",()=>{
//      return gulp.src(['Zbird/*.html',"libs/*.html"])
//     // .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('dist/html'));
// })