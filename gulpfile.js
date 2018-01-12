'use strict';

const gulp = require('gulp');

function requireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(callback) {
        var task = require(path).call(this, options);
        return task(callback);
    })
}