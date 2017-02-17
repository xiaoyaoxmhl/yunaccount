var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var reload = browserSync.reload;
var minify=require('gulp-minify-css');
var uglify = require('gulp-uglify');//混淆js
var imagemin=require('gulp-imagemin');
var uncss=require('gulp-uncss');
//防止 scss 写到一半时,保存编译出错
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}
// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function () {
    return gulp.src("sass/*")
        .pipe(sass()).on('error', handleError)
        .pipe(prefix())
        .pipe(minify())
        .pipe(gulp.dest("css/"))
        .pipe(reload({stream: true}));
});

//清除无用的 css
gulp.task('uncss', function() {
    gulp.src('css/aboutUs.css')   //冗余css文件
        .pipe(uncss({
            html: ['aboutUs.html']  //使用css的html页面，可多个
        }))
        .pipe(gulp.dest('css/')); //输出目录
});

//混淆 js
gulp.task('buildJs',function () {

    return gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("js-min"));
});

//压缩图片
gulp.task('buildImg',function(){

    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'));

});

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./"
    });
    gulp.watch("img/*", ['buildImg']).on('error', handleError).on('change',reload);
    gulp.watch("sass/*.scss", ['sass']).on('error', handleError).on('change',reload);
    gulp.watch("sass/*/*.scss", ['sass']).on('error', handleError).on('change',reload);
    // gulp.watch("js/*.js",['buildJs']).on('change',reload);
    gulp.watch("*/*.html").on('error', handleError).on('change',reload);
});


gulp.task('default', ['serve']);

