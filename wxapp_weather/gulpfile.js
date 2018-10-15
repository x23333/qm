// 从package.json 分析，node_modules引入
const gulp = require('gulp');

const src = './client';//开发目录
const dist = './dist';//项目目录
const jsonminify = require('gulp-jsonminify');
const combiner = require('stream-combiner2');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
// gulp 的思想很简单 将我们的开发流程分成一个个任务 最后让任务自己走起来
gulp.task('json',() => {//创建了一个json 专业任务
  return gulp
    .src(`${src}/**/*.json`)//找到文件
    .pipe(jsonminify())
    .pipe(gulp.dest(dist))//进行一翻处理
});

gulp.task('wxss',() => {
  const combined = combiner.obj([
    gulp.src(`${src}/**/*.{wxss,scss}`),
    sass().on('error',sass.logError),
    rename((path) => (path.extname = ".wxss")),
    gulp.dest(dist)
  ]);
  combined.on('error',()=>{});
});

gulp.task('default',['wxss','json']);