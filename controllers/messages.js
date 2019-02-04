'use strict';
const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});

module.exports.home = function *home(ctx) {
  var works = { "work":[
    {"img":"PavCemento1-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento2-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento3-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento4-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento5-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento6-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
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
  var view = yield render('index',{ works:works, clients:clients });
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti e rampe in cemento tradizionale, cemento stampato e in resina - Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni e rampe veicolari in calcestruzzo tradizionale, stampato, acidificato e in resina. Opera in Torino, provincia e nel resto del nord Italia",
				       cl: "home",
				       id: "home",
				       body: view });
};


module.exports.stampato = function *stampato(ctx) {
  var works = { "work":[
    {"img":"Stampato1-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato2-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato3-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato4-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato5-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato6-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"}
  ]}
  var view = yield render('stampato',{works:works});
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento stampato a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in cemento stampato",
				       cl: "home",
				       id: "stampato",
				       body: view });
};

module.exports.tradizionale = function *tradizionale(ctx) {
  var works = { "work":[
    {"img":"PavCemento1-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento2-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento3-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento4-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento5-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"},
    {"img":"PavCemento6-830x620.jpg","type":"pav","title":"Pavimento in cemento tradizionale"}
  ]}
  var view = yield render('tradizionale',{works:works});
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento tradizionale a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo lisciato con indurenti al quarzo",
				       cl: "home",
				       id: "tradizionale",
				       body: view });
};

module.exports.acidificato = function *acidificato(ctx) {
  var works = { "work":[
    {"img":"acidificato1.jpg","type":"acidificato","title":"Pavimento acidificato"},
    {"img":"acidificato2.jpg","type":"acidificato","title":"Pavimento acidificato"},
    {"img":"acidificato3.jpg","type":"acidificato","title":"Pavimento acidificato"}
  ]}
  var view = yield render('acidificato',{works:works});
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento acidificato a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo acidificato mediante l’utilizzo di particolari acidi a base di sali metallici",
				       cl: "home",
				       id: "acidificato",
				       body: view });
};

module.exports.sassolavato = function *sassolavato(ctx) {
  var works = { "work":[
    {"img":"lavato1.jpg","type":"lavato","title":"Pavimento in sasso lavato"},
    {"img":"lavato2.jpg","type":"lavato","title":"Pavimento in sasso lavato"},
    {"img":"lavato4.jpg","type":"lavato","title":"Pavimento in sasso lavato"}
  ]}
  var view = yield render('sassolavato',{works:works});
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento sassolavato a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo sassolavato",
				       cl: "home",
				       id: "sassolavato",
				       body: view });
};

module.exports.rampa = function *rampa(ctx) {
  var works = { "work":[
    {"img":"Rampa1-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa2-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa3-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa4-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa5-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"}
  ]}
  var view = yield render('rampa',{works:works});
  this.body = yield render('layout', { title: "Pavicat di Catalano - Rampe in cemento a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle rampe in calcestruzzo lavorate a spina di pesce o pettinata",
				       cl: "home",
				       id: "rampa",
				       body: view });
};

module.exports.resina = function *resina(ctx) {
  var works = { "work":[
    {"img":"resina1.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"resina2.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"resina3.jpg","type":"resina","title":"Pavimento in resina"}
  ]}
  var view = yield render('resina',{works:works});
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in gresina a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo resina",
				       cl: "home",
				       id: "resina",
				       body: view });
};
