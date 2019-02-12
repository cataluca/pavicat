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
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi"},
    {"title":"Pavimenti in cemento tradizionale", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-tradizionale"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Pavimentazione naturale, di grande effetto estetico e particolarmente resistente.", "link":"/servizi/pavimenti-cemento-sasso-lavato"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina"}
    
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



module.exports.servizi = function *servizi(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"on"},
    {"title":"Pavimenti in cemento tradizionale", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-tradizionale", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Pavimentazione naturale, di grande effetto estetico e particolarmente resistente.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"}
    
  ]}
  
  var view = yield render('servizi/index',{ titlePage:"I NOSTRI SERVIZI",
					    page:"Servizi",
					    services:services });
  
  this.body = yield render('layout', { title: "Pavicat di Catalano - I nostri servizi: Pavimenti industriali e civili in cemento e in resina. Rampe veicolari in cemento", 
				       description: "Pavimentazioni in calcestruzzo di tipo elicotterato, stampato, acidificato, sasso lavato, levigato e lucidato. Trattamenti in resina.", 
				       cl: "",
				       id: "servizi",
				       body: view });
};



module.exports.stampato = function *stampato(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"off"},
    {"title":"Pavimenti in cemento tradizionale", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-tradizionale", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"on"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Pavimentazione naturale, di grande effetto estetico e particolarmente resistente.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"}
  ]}
  
  var items = { "item":[
    {"img":"/image/home/work/Stampato1-830x620.jpg","type":"stampati","alt":"Pavimento in cemento stampato", "text":"Grazie a questa tipologia di pavimento si ottiene una superficie che mantiene la stessa praticità del calcestruzzo ma trasformata in un'opera di particolare bellezza che propone l'estetica della roccia, della ceramica, della pietra naturale, dei mattoni e anche del legno."},
    {"img":"/image/home/work/Stampato2-830x620.jpg","type":"stampati","alt":"Pavimento in cemento stampato", "text":"Si ottiene una superficie monolitica, quindi non a rischio avvallamenti e assestamenti, che richiede pochissima manutenzione nel corso degli anni."},
    {"img":"/image/home/work/Stampato4-830x620.jpg","type":"stampati","alt":"Pavimento in cemento stampato", "text":"Pavimento in cemento stampato", "text":"Ogni pavimentazione è un'opera unica e originale, si possono utilizzare differenti colorazioni e decorazioni allo scopo di ottenere un risultato che soddisfi a pieno le esigenze, i gusti e la personalità del cliente."},
    {"img":"/image/home/work/Stampato5-830x620.jpg","type":"stampati","alt":"Pavimento in cemento stampato", "text":""},
  ]}

  var view = yield render('servizi/singleService/index',{ titlePage: "PAVIMENTI IN CEMENTO STAMPATO",
							  page: "Stampato",
							  services: services, 
							  items: items });
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento stampato a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in cemento stampato",
				       cl: "",
				       id: "stampato",
				       body: view });
};

module.exports.tradizionale = function *tradizionale(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"off"},
    {"title":"Pavimenti in cemento tradizionale", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-tradizionale", "status":"on"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Pavimentazione naturale, di grande effetto estetico e particolarmente resistente.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"}
  ]}
  
  var items = { "item":[
    {"img":"/image/home/work/PavCemento1-830x620.jpg","type":"pav","alt":"Pavimento in cemento tradizionale", "text":"Il cemento armato lavorato con indurente al quarzo, è composto principalmente da cemento, acqua ed inerti miscelati tra di loro in dosi corrette, il risultato è molto resistente con un ottimo livello di permeabilità."},
    {"img":"/image/home/work/PavCemento2-830x620.jpg","type":"pav","alt":"Pavimento in cemento tradizionale", "text":"Ha diversi utilizzi nel settore dell’edilizia per le sue caratteristiche di resistenza e durezza."},
    {"img":"/image/home/work/PavCemento3-830x620.jpg","type":"pav","alt":"Pavimento in cemento tradizionale", "text":"Consigliamo questa tipologia di pavimentazione per infrastrutture, grandi opere, aree industriali, magazzini, piazzali, parcheggi e altre tipi di superfici che necessitano di basi d’appoggio sicure e forti."},
    {"img":"/image/home/work/PavCemento4-830x620.jpg","type":"pav","alt":"Pavimento in cemento tradizionale", "text":"Ci operiamo per garantire al cliente il miglior risultato funzionale con finiture superficiali di alta qualità meccanica con possibilità di scelta di differenti colorazioni sia per la lavorazione a spolvero che a pastina."},
    {"img":"/image/home/work/PavCemento5-830x620.jpg","type":"pav","alt":"Pavimento in cemento tradizionale", "text":""},
    {"img":"/image/home/work/PavCemento6-830x620.jpg","type":"pav","alt":"Pavimento in cemento tradizionale", "text":""}
  ]}
  
  var view = yield render('servizi/singleService/index',{ titlePage: "PAVIMENTI IN CEMENTO TRADIZIONALE",
							  page: "Tradizionale",
							  services: services, 
							  items: items });
  
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento elicotterato a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo lisciato con indurenti al quarzo",
				       cl: "",
				       id: "tradizionale",
				       body: view });
};

module.exports.acidificato = function *acidificato(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"off"},
    {"title":"Pavimenti in cemento tradizionale", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-tradizionale", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"on"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Pavimentazione naturale, di grande effetto estetico e particolarmente resistente.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"}
  ]}

  var items = { "item":[
    {"img":"/image/home/work/acidificato1.jpg","type":"acidificato","alt":"Pavimento acidificato", "text":"Il lavoro finito trasforma il calcestruzzo in una bellezza ricca e naturale. Effetto scenico, aspetto moderno, praticità di pulizia e manutenzione sono le caratteristiche principali di questa pavimentazione."},
    {"img":"/image/home/work/acidificato2.jpg","type":"acidificato","alt":"Pavimento acidificato", "text":"Ideale per chi vuole realizzare una superficie di tendenza, molto bella e resistente; perfetto per show room, centri commerciali e anche abitazioni private."},
    {"img":"/image/home/work/acidificato3.jpg","type":"acidificato","alt":"Pavimento acidificato", "text":"Viene realizzato mediante l’utilizzo di particolari acidi a base di sali metallici che penetrano nel calcestruzzo e ne cambiano chimicamente la tonalità per produrre effetti di colore unici, permanenti, variegati e traslucidi."}
  ]}

  var view = yield render('servizi/singleService/index',{ titlePage: "PAVIMENTI ACIDIFICATI",
							  page: "Acidificato",
							  services: services, 
							  items: items });
  
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento acidificato a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo acidificato mediante l’utilizzo di particolari acidi a base di sali metallici",
				       cl: "",
				       id: "acidificato",
				       body: view });
};

module.exports.sassolavato = function *sassolavato(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"off"},
    {"title":"Pavimenti in cemento tradizionale", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-tradizionale", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Pavimentazione naturale, di grande effetto estetico e particolarmente resistente.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"on"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"}
  ]}

  var items = { "item":[
    {"img":"/image/home/work/lavato1.jpg","type":"lavato","alt":"Pavimento in sasso lavato", "text":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata."},
    {"img":"/image/home/work/lavato2.jpg","type":"lavato","alt":"Pavimento in sasso lavato", "text":"Consigliamo questa soluzione per piazze, marciapiedi, aree pedonali, piscine, terrazze e viali in parchi e giardini. Le principali caratteristiche sono: praticità, sicurezza, resistenza e antisdrucciolo."},
    {"img":"/image/home/work/lavato4.jpg","type":"lavato","alt":"Pavimento in sasso lavato", "text":"Abbiamo la possibilità di realizzare diverse configurazioni con tipologie e colorazioni a scelta del cliente. E’ la migliore alternativa alla ghiaia per manutenzione e costi ridotti, elimina il problema delle erbe infestanti e la necessità di ricomporre i ciottoli che presentano problematiche col tempo"}
  ]}
  
  var view = yield render('servizi/singleService/index',{ titlePage: "PAVIMENTI IN SASSO LAVATO",
							  page: "Sassolavato",
							  services: services, 
							  items: items});
  
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento sassolavato a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo sassolavato",
				       cl: "",
				       id: "sassolavato",
				       body: view });
};

module.exports.rampa = function *rampa(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"off"},
    {"title":"Pavimenti in cemento tradizionale", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-tradizionale", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"on"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Pavimentazione naturale, di grande effetto estetico e particolarmente resistente.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"}
  ]}

  var items = { "item":[
    {"img":"/image/home/work/Rampa1-830x620.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":"Per le caratteristiche di robustezza e resistenza nel tempo, le rampe di accesso veicolare si realizzano comunemente in calcestruzzo."},
    {"img":"/image/home/work/Rampa2-830x620.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":"Due tipi di finiture: pettinata e a spina di pesce. Quest’ultima si realizza incidendo a fresco lo strato di quarzo-cemento con degli stampi appositi, la superficie che si ottiene favorisce l’aderenza degli pneumatici anche in condizioni difficili."},
    {"img":"/image/home/work/Rampa3-830x620.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":"La tipologia pettinata è maggiormente consigliata per passaggi pedonali e carrozzine."},
    {"img":"/image/home/work/Rampa4-830x620.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":"Le rampe in calcestruzzo sono utilizzate in abitazioni private, centri commerciali, garage, autosilo e industrie."},
    {"img":"/image/home/work/Rampa5-830x620.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":""}
  ]}

  var view = yield render('servizi/singleService/index',{ titlePage: "RAMPE ANTISCIVOLO",
							  page: "Rampe",
							  services: services, 
							  items: items });
  this.body = yield render('layout', { title: "Pavicat di Catalano - Rampe in cemento a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle rampe in calcestruzzo lavorate a spina di pesce o pettinata",
				       cl: "",
				       id: "rampa",
				       body: view });
};

module.exports.resina = function *resina(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"off"},
    {"title":"Pavimenti in cemento tradizionale", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-tradizionale", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Pavimentazione naturale, di grande effetto estetico e particolarmente resistente.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"on"}
  ]}

  var items = { "item":[
    {"img":"/image/home/work/resina1.jpg","type":"resina","alt":"Pavimento in resina", "text":"Pavimenti specifici per richieste di alti standard, hanno svariate caratteristiche: resistenza chimica e all’usura, durevolezza  ed elasticità."},
    {"img":"/image/home/work/resina2.jpg","type":"resina","alt":"Pavimento in resina", "text":"Il risultato sono superfici continue ed igieniche in conformità con le norme vigenti in ogni specifico settore. I trattamenti in resina sono adatti per superfici nuove o ammalorate  da recuperare."},
    {"img":"/image/home/work/resina3.jpg","type":"resina","alt":"Pavimento in resina", "text":"Utilizziamo le migliori soluzioni tecnologiche, personalizzabili ed ecosostenibili con materiali privi di inquinanti e solventi."}
  ]}

  var view = yield render('servizi/singleService/index',{ titlePage: "Pavimenti in resina",
							  page: "Resina",
							  services: services, 
							  items: items });
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in resina a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in resina",
				       cl: "",
				       id: "resina",
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


