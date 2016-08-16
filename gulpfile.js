var gulp = require('gulp')
//load plugins
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var inlinesource = require('gulp-inline-source');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });
var removeHtmlComments = require('gulp-remove-html-comments');
var concat = require('gulp-concat');


