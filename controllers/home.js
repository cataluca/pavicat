'use strict';
const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});

module.exports.home = function *home(ctx) {
  var works = { "work":[
    {"img":"PavCemento1-830x620.jpg","type":"pav","title":"Pavimento in cemento elicotterato"},
    {"img":"PavCemento2-830x620.jpg","type":"pav","title":"Pavimento in cemento elicotterato"},
    {"img":"PavCemento3-830x620.jpg","type":"pav","title":"Pavimento in cemento elicotterato"},
    // {"img":"PavCemento4-830x620.jpg","type":"pav","title":"Pavimento in cemento elicotterato"},
    // {"img":"PavCemento5-830x620.jpg","type":"pav","title":"Pavimento in cemento elicotterato"},
    // {"img":"PavCemento6-830x620.jpg","type":"pav","title":"Pavimento in cemento elicotterato"},
    {"img":"Rampa1-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa2-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"Rampa3-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    // {"img":"Rampa4-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    // {"img":"Rampa5-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    // {"img":"Rampa6-830x620.jpg","type":"rampe","title":"Rampa antiscivolo"},
    {"img":"resina1.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"resina2.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"resina3.jpg","type":"resina","title":"Pavimento in resina"},
    {"img":"Stampato1-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato2-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"Stampato3-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    // {"img":"Stampato4-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    // {"img":"Stampato5-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    // {"img":"Stampato6-830x620.jpg","type":"stampati","title":"Pavimento in cemento stampato"},
    {"img":"levigato1.jpg","type":"levigato","title":"Pavimento in cemento levigato e lucidato"},
    {"img":"levigato2.jpg","type":"levigato","title":"Pavimento in cemento levigato e lucidato"},
    {"img":"levigato3.jpg","type":"levigato","title":"Pavimento in cemento levigato e lucidato"},
    {"img":"lavato1.jpg","type":"lavato","title":"Pavimento in cemento sasso lavato"},
    {"img":"lavato2.jpg","type":"lavato","title":"Pavimento in cemento sasso lavato"},
    {"img":"lavato4.jpg","type":"lavato","title":"Pavimento in cemento sasso lavato"},
    {"img":"Acidificato1-830x620.jpg","type":"acidificato","title":"Pavimento in cemento acidificato"},
    {"img":"Acidificato2-830x620.jpg","type":"acidificato","title":"Pavimento in cemento acidificato"},
    {"img":"Acidificato3-830x620.jpg","type":"acidificato","title":"Pavimento in cemento acidificato"}
  ]}

  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi"},
    {"title":"Pavimenti in cemento elicotterato", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo.", "link":"/servizi/pavimenti-cemento-elicotterato"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato"},
    {"title":"Pavimenti in cemento levigato", "img":"/image/home/service/levigato.jpg", "desc":"Un pavimento con una resistenza all’abrasione elevatissima, traspirabile, con una superficie lucida come il vetro, antiscivolo e  di facile pulizia con macchine lava asciuga.", "link":"/servizi/pavimenti-cemento-levigato-lucidato"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata.", "link":"/servizi/pavimenti-cemento-sasso-lavato"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato"}
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

  var view = yield render('home/index',{works:works, clients:clients, services:services, page: "Home"});
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti industriali e civili in cemento e in resina. Rampe veicolari in cemento. A Torino, Milano e nel resto del nord Italia.", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo di tipo elicotterato, stampato, acidificato, sasso lavato, levigato e lucidato. Specializzati anche nei trattamenti in resina.",
				       cl: "home",
				       id: "home",
				       body: view });
};

module.exports.test = function *test(ctx) {
  this.body = yield render('/template/multipage/index');
};

module.exports.about = function *about(ctx) {
  this.body = yield render('/template/multipage/about');
};
module.exports.about = function *about(ctx) {
  this.body = yield render('/template/multipage/single');
};
module.exports.serviceItem = function *serviceItem(ctx) {
  this.body = yield render('/template/multipage/service-item');
};
module.exports.service = function *service(ctx) {
  this.body = yield render('/template/multipage/service');
};


