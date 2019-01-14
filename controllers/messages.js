'use strict';
const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});

module.exports.home = function *home(ctx) {
  var works = { "work":[
    {"img":"pav1.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"pav2.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"pav3.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"pav4.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"pav5.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"lavato3.jpg","type":"lavato","title":"Pavimento in sasso lavato"},
    {"img":"lavato2.jpg","type":"lavato","title":"Pavimento in sasso lavato"},
    {"img":"lavato1.jpg","type":"lavato","title":"Pavimento in sasso lavato"},
    {"img":"lavato4.jpg","type":"lavato","title":"Pavimento in sasso lavato"},
    {"img":"rampa1.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"rampa2.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"rampa3.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"resina1.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"resina2.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"resina3.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"resina4.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"stampato1.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"stampato2.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"acidificato1.jpg","type":"acidificato","title":"Pavimento acidificato"},
    {"img":"acidificato2.jpg","type":"acidificato","title":"Pavimento acidificato"},
    {"img":"acidificato3.jpg","type":"acidificato","title":"Pavimento acidificato"}
  ]}
  var clients = {"client":[
    {"img":"fca.jpg","title":"fca"},
    {"img":"carrefour.jpg","title":"carrefour"},
    {"img":"bricoman.jpg","title":"bricoman"},
    {"img":"selghis.jpg","title":"selghis"},
    {"img":"edilcalce.jpg","title":"edilcalce"},
    {"img":"lidl.jpg","title":"lidl"},
    {"img":"unical.jpg","title":"unical"}
  ]}
  var view = yield render('index',{ works:works, clients: clients });
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti e rampe in cemento armato, resina e stampati - Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo, pavimenti in resina, rampe veicolari, pavimenti stampati e pavimenti acidificati. Opera in Torino, provincia e nel resto del nord Italia",
				       cl: "home",
				       id: "home",
				       body: view });
};
