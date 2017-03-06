'use strict';
const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});

module.exports.home = function *home(ctx) {
  var view = yield render('index');
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimentazioni in calcestruzzo e resina - Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni industriali, pavimentazioni in resisa, rampe veicolari, pavimenti stampati. Opera in Torino, provincia e nel resto del nord Italia",
				       cl: "home",
				       id: "home",
				       body: view });
};
