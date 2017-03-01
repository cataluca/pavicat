'use strict';
const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});

module.exports.home = function *home(ctx) {
    var view = yield render('index');
    this.body = yield render('layout', { title: "home", body: view });
};
