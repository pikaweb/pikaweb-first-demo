var gulp = require('gulp')
//load plugins
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var inlinesource = require('gulp-inline-source');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

var htmlclean = require('gulp-htmlclean');
var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

//generate css from less ( + slick less files + slick files).
gulp.task('less-to-css', function() {

  gulp.src(['node_modules/slick-carousel/slick/ajax-loader.gif'])
    .pipe(gulp.dest('./public/css/'));

  gulp.src(['node_modules/slick-carousel/slick/fonts/*'])
    .pipe(gulp.dest('./public/css/fonts/'));

  return gulp.src(['./assets/less/*.less', 'node_modules/slick-carousel/slick/slick.less', 'node_modules/slick-carousel/slick/slick-theme.less'])
        .pipe(less({
          plugins: [autoprefix, cleancss]
        }))
        .pipe(concat('build.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public/css'));
});


//minify fonts
gulp.src('./assets/fonts/*.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('./public/fonts/'));


//move images to public
gulp.src(['./assets/img/*']).pipe(gulp.dest('./public/img/'));
gulp.src(['./assets/img/**/*']).pipe(gulp.dest('./public/img/'));

//inline link, script and img in index.html . Clean html.
gulp.task('index', function () {
    var options = {
        compress: true
    }; 
    return gulp.src('./index.html')
        .pipe(htmlclean())
        .pipe(inlinesource(options))        
        .pipe(gulp.dest('./public/'));
});

/* making build.js */
gulp.task('slickJs', function(){
  return gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/slick-carousel/slick/slick.min.js', 'assets/js/*.js'])
  .pipe(concat('build.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./public/js/'));
});

gulp.watch('./assets/less/*.less', ['less-to-css']); 

gulp.watch('./index.html', ['index']); 

gulp.task('default', ['less-to-css','index', 'slickJs']);