(function () {
    'use strict';

    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var htmlreplace = require('gulp-html-replace');
    var source = require('vinyl-source-stream');
    var browserify = require('browserify');
    var watchify = require('watchify');
    var reactify = require('reactify');
    var streamify = require('gulp-streamify');
    var less = require('gulp-less');
    var pathes = require('path');

    var path = {
        HTML: 'src/index.html',

        SCRIPTS: './src/scripts/**/*.js',
        STYLES: './src/styles/**/*.less',

        MINIFIED_CSS_OUT: 'build.min.css',
        MINIFIED_JS_OUT: 'build.min.js',

        CSS_OUT: 'build.css',
        JS_OUT: 'build.js',

        DEST_BUILD: 'dist/build',
        DEST_SRC: 'dist/src',

        DEST: 'dist',
        JS_ENTRY_POINT: './src/scripts/App.js',
        LESS_ENTRY_POINT: './src/styles/App.less'
    };

    gulp.task('copy', function(){
        gulp.src(path.HTML)
            .pipe(gulp.dest(path.DEST));
    });

    gulp.task('watch', function() {
        gulp.watch(path.HTML, ['copy']);
        gulp.watch(path.SCRIPTS, ['develop']);
        gulp.watch(path.STYLES, ['less-dev']);

//        var watcher  = watchify(browserify({
//            entries: [path.JS_ENTRY_POINT],
//            transform: [reactify],
//            debug: true,
//            cache: {}, packageCache: {}, fullPaths: true
//        }));
//
//        return watcher.on('update', function () {
//            watcher.bundle()
//                .pipe(source(path.OUT))
//                .pipe(gulp.dest(path.DEST_SRC));
//            console.log('Updated');
//        })
//            .bundle()
//            .pipe(source(path.OUT))
//            .pipe(gulp.dest(path.DEST_SRC));
    });

    gulp.task('develop', function(){
        browserify({
            entries: [path.JS_ENTRY_POINT],
            transform: [reactify],
            debug: true,
            cache: {}, packageCache: {}, fullPaths: true
        })
            .bundle()
            .pipe(source(path.JS_OUT))
            .pipe(gulp.dest(path.DEST_SRC));
    });

    gulp.task('build', function(){
        browserify({
            entries: [path.JS_ENTRY_POINT],
            transform: [reactify]
        })
            .bundle()
            .pipe(source(path.MINIFIED_JS_OUT))
            .pipe(streamify(uglify(gulp.dest(path.MINIFIED_JS_OUT))))
            .pipe(gulp.dest(path.DEST_BUILD));
    });

    gulp.task('replaceHTML', function(){
        gulp.src(path.HTML)
            .pipe(htmlreplace({
                'js': 'build/' + path.MINIFIED_JS_OUT
            }))
            .pipe(gulp.dest(path.DEST));
    });

    gulp.task('less-prod', function () {
        return gulp.src(path.STYLES)
            .pipe(less({
                paths: [ pathes.join(__dirname, 'less', 'includes') ]
            }))
            .pipe(gulp.dest(path.DEST_SRC));
    });

    gulp.task('less-dev', function () {
        return gulp.src(path.LESS_ENTRY_POINT)
            .pipe(less())
            .pipe(gulp.dest(path.DEST_SRC));
    });

    gulp.task('production', ['replaceHTML', 'build',  'less-prod']);

    gulp.task('default', ['copy', 'develop', 'less-dev', 'watch']);

})();