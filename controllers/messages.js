'use strict';
const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});

module.exports.home = function *home(ctx) {
  var works = { "work":[
    {"img":"PavCemento1-830x620.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"PavCemento2-830x620.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"PavCemento3-830x620.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"PavCemento4-830x620.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"PavCemento5-830x620.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"PavCemento6-830x620.jpg","type":"pav","title":"Pavimento in cemento armato"},
    {"img":"Rampa1-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa2-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa3-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa4-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa5-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa6-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Stampato1-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato2-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato3-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato4-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato5-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato6-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"resina1.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"resina2.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"resina3.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"acidificato1.jpg","type":"acidificato","title":"Pavimento acidificato"},
    {"img":"acidificato2.jpg","type":"acidificato","title":"Pavimento acidificato"},
    {"img":"acidificato3.jpg","type":"acidificato","title":"Pavimento acidificato"},
    {"img":"lavato1.jpg","type":"lavato","title":"Pavimento in sasso lavato"},
    {"img":"lavato2.jpg","type":"lavato","title":"Pavimento in sasso lavato"},
    {"img":"lavato4.jpg","type":"lavato","title":"Pavimento in sasso lavato"}
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
