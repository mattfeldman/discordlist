var gulp = require('gulp');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

// Start Watching: Run "gulp"
gulp.task('default', ['watch']);

// Default task
gulp.task('watch', function() {

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['_site/**']).on('change', livereload.changed);

});