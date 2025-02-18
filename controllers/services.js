'use strict';
const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});

module.exports.servizi = function *servizi(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"on"},
    {"title":"Pavimenti in cemento elicotterato", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-elicotterato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento levigato e lucidato", "img":"/image/home/service/levigato.jpg", "desc":"Un pavimento con una resistenza all’abrasione elevatissima, traspirabile, con una superficie lucida come il vetro, antiscivolo e di facile pulizia con macchine lava asciuga.", "link":"/servizi/pavimenti-cemento-levigato-lucidato", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/acidificato1.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"}
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
    {"title":"Pavimenti in cemento elicotterato", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-elicotterato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"on"},
    {"title":"Pavimenti in cemento levigato e lucidato", "img":"/image/home/service/levigato.jpg", "desc":"Un pavimento con una resistenza all’abrasione elevatissima, traspirabile, con una superficie lucida come il vetro, antiscivolo e di facile pulizia con macchine lava asciuga.", "link":"/servizi/pavimenti-cemento-levigato-lucidato", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/Acidificato1-830x620.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"}
  ]}
  
  var items = { "item":[
    {"img":"/image/home/work/Stampato1.jpg","type":"stampati","alt":"Pavimento in cemento stampato", "text":"Grazie a questa tipologia di pavimento si ottiene una superficie che mantiene la stessa praticità del calcestruzzo ma trasformata in un'opera di particolare bellezza che propone l'estetica della roccia, della ceramica, della pietra naturale, dei mattoni e anche del legno."},
    {"img":"/image/home/work/Stampato2.jpg","type":"stampati","alt":"Pavimento in cemento stampato", "text":"Si ottiene una superficie monolitica, quindi non a rischio avvallamenti e assestamenti, che richiede pochissima manutenzione nel corso degli anni."},
    {"img":"/image/home/work/Stampato4.jpg","type":"stampati","alt":"Pavimento in cemento stampato", "text":"Pavimento in cemento stampato", "text":"Ogni pavimentazione è un'opera unica e originale, si possono utilizzare differenti colorazioni e decorazioni allo scopo di ottenere un risultato che soddisfi a pieno le esigenze, i gusti e la personalità del cliente."},
    {"img":"/image/home/work/Stampato5.jpg","type":"stampati","alt":"Pavimento in cemento stampato", "text":""},
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

module.exports.elicotterato = function *elicotterato(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"off"},
    {"title":"Pavimenti in cemento elicotterato", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-elicotterato", "status":"on"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento levigato e lucidato", "img":"/image/home/service/levigato.jpg", "desc":"Un pavimento con una resistenza all’abrasione elevatissima, traspirabile, con una superficie lucida come il vetro, antiscivolo e di facile pulizia con macchine lava asciuga.", "link":"/servizi/pavimenti-cemento-levigato-lucidato", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/Acidificato1-830x620.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"}
  ]}
  
  var items = { "item":[
    {"img":"/image/home/work/PavCemento1.jpg","type":"pav","alt":"Pavimento in cemento elicotterato", "text":"Il cemento armato lavorato con indurente al quarzo, è composto principalmente da cemento, acqua ed inerti miscelati tra di loro in dosi corrette, il risultato è molto resistente con un ottimo livello di permeabilità."},
    {"img":"/image/home/work/PavCemento2.jpg","type":"pav","alt":"Pavimento in cemento elicotterato", "text":"Ha diversi utilizzi nel settore dell’edilizia per le sue caratteristiche di resistenza e durezza."},
    {"img":"/image/home/work/PavCemento3.jpg","type":"pav","alt":"Pavimento in cemento elicotterato", "text":"Consigliamo questa tipologia di pavimentazione per infrastrutture, grandi opere, aree industriali, magazzini, piazzali, parcheggi e altre tipi di superfici che necessitano di basi d’appoggio sicure e forti."},
    {"img":"/image/home/work/PavCemento4.jpg","type":"pav","alt":"Pavimento in cemento elicotterato", "text":"Ci operiamo per garantire al cliente il miglior risultato funzionale con finiture superficiali di alta qualità meccanica con possibilità di scelta di differenti colorazioni sia per la lavorazione a spolvero che a pastina."},
    {"img":"/image/home/work/PavCemento5.jpg","type":"pav","alt":"Pavimento in cemento elicotterato", "text":""},
    {"img":"/image/home/work/PavCemento6.jpg","type":"pav","alt":"Pavimento in cemento elicotterato", "text":""}
  ]}
  
  var view = yield render('servizi/singleService/index',{ titlePage: "PAVIMENTI IN CEMENTO ELICOTTERATO",
							  page: "Elicotterato",
							  services: services, 
							  items: items });
  
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento elicotterato a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in calcestruzzo lisciato con indurenti al quarzo",
				       cl: "",
				       id: "elicotterato",
				       body: view });
};

module.exports.acidificato = function *acidificato(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"off"},
    {"title":"Pavimenti in cemento elicotterato", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-elicotterato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento levigato e lucidato", "img":"/image/home/service/levigato.jpg", "desc":"Un pavimento con una resistenza all’abrasione elevatissima, traspirabile, con una superficie lucida come il vetro, antiscivolo e di facile pulizia con macchine lava asciuga.", "link":"/servizi/pavimenti-cemento-levigato-lucidato", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/Acidificato1-830x620.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"on"}
  ]}

  var items = { "item":[
    {"img":"/image/home/work/Acidificato1.jpg","type":"acidificato","alt":"Pavimento acidificato", "text":"Il lavoro finito trasforma il calcestruzzo in una bellezza ricca e naturale. Effetto scenico, aspetto moderno, praticità di pulizia e manutenzione sono le caratteristiche principali di questa pavimentazione."},
    {"img":"/image/home/work/Acidificato2.jpg","type":"acidificato","alt":"Pavimento acidificato", "text":"Ideale per chi vuole realizzare una superficie di tendenza, molto bella e resistente; perfetto per show room, centri commerciali e anche abitazioni private."},
    {"img":"/image/home/work/Acidificato3.jpg","type":"acidificato","alt":"Pavimento acidificato", "text":"Viene realizzato mediante l’utilizzo di particolari acidi a base di sali metallici che penetrano nel calcestruzzo e ne cambiano chimicamente la tonalità per produrre effetti di colore unici, permanenti, variegati e traslucidi."}
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
    {"title":"Pavimenti in cemento elicotterato", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-elicotterato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento levigato e lucidato", "img":"/image/home/service/levigato.jpg", "desc":"Un pavimento con una resistenza all’abrasione elevatissima, traspirabile, con una superficie lucida come il vetro, antiscivolo e di facile pulizia con macchine lava asciuga.", "link":"/servizi/pavimenti-cemento-levigato-lucidato", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"on"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/Acidificato1-830x620.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"}
  ]}

  var items = { "item":[
    {"img":"/image/home/work/Lavato1.jpg","type":"lavato","alt":"Pavimento in sasso lavato", "text":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata."},
    {"img":"/image/home/work/Lavato2.jpg","type":"lavato","alt":"Pavimento in sasso lavato", "text":"Consigliamo questa soluzione per piazze, marciapiedi, aree pedonali, piscine, terrazze e viali in parchi e giardini. Le principali caratteristiche sono: praticità, sicurezza, resistenza e antisdrucciolo."},
    {"img":"/image/home/work/Lavato4.jpg","type":"lavato","alt":"Pavimento in sasso lavato", "text":"Abbiamo la possibilità di realizzare diverse configurazioni con tipologie e colorazioni a scelta del cliente. E’ la migliore alternativa alla ghiaia per manutenzione e costi ridotti, elimina il problema delle erbe infestanti e la necessità di ricomporre i ciottoli che presentano problematiche col tempo"}
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
    {"title":"Pavimenti in cemento elicotterato", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-elicotterato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"on"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento levigato e lucidato", "img":"/image/home/service/levigato.jpg", "desc":"Un pavimento con una resistenza all’abrasione elevatissima, traspirabile, con una superficie lucida come il vetro, antiscivolo e di facile pulizia con macchine lava asciuga.", "link":"/servizi/pavimenti-cemento-levigato-lucidato", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/Acidificato1-830x620.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"}
  ]}

  var items = { "item":[
    {"img":"/image/home/work/Rampa1.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":"Per le caratteristiche di robustezza e resistenza nel tempo, le rampe di accesso veicolare si realizzano comunemente in calcestruzzo."},
    {"img":"/image/home/work/Rampa2.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":"Due tipi di finiture: pettinata e a spina di pesce. Quest’ultima si realizza incidendo a fresco lo strato di quarzo-cemento con degli stampi appositi, la superficie che si ottiene favorisce l’aderenza degli pneumatici anche in condizioni difficili."},
    {"img":"/image/home/work/Rampa3.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":"La tipologia pettinata è maggiormente consigliata per passaggi pedonali e carrozzine."},
    {"img":"/image/home/work/Rampa4.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":"Le rampe in calcestruzzo sono utilizzate in abitazioni private, centri commerciali, garage, autosilo e industrie."},
    {"img":"/image/home/work/Rampa5.jpg","type":"rampe","alt":"Rampa antiscivolo", "text":""}
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
    {"title":"Pavimenti in cemento elicotterato", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-elicotterato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"on"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento levigato e lucidato", "img":"/image/home/service/levigato.jpg", "desc":"Un pavimento con una resistenza all’abrasione elevatissima, traspirabile, con una superficie lucida come il vetro, antiscivolo e di facile pulizia con macchine lava asciuga.", "link":"/servizi/pavimenti-cemento-levigato-lucidato", "status":"off"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/Acidificato1-830x620.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"}
  ]}

  var items = { "item":[
    {"img":"/image/home/work/Resina1.jpg","type":"resina","alt":"Pavimento in resina", "text":"Pavimenti specifici per richieste di alti standard, hanno svariate caratteristiche: resistenza chimica e all’usura, durevolezza  ed elasticità."},
    {"img":"/image/home/work/Resina2.jpg","type":"resina","alt":"Pavimento in resina", "text":"Il risultato sono superfici continue ed igieniche in conformità con le norme vigenti in ogni specifico settore. I trattamenti in resina sono adatti per superfici nuove o ammalorate  da recuperare."},
    {"img":"/image/home/work/Resina3.jpg","type":"resina","alt":"Pavimento in resina", "text":"Utilizziamo le migliori soluzioni tecnologiche, personalizzabili ed ecosostenibili con materiali privi di inquinanti e solventi."}
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

module.exports.levigato = function *levigato(ctx) {
  var services = { "service":[
    {"title":"Tutti i servizi", "img":"", "desc":"", "link":"/servizi", "status":"off"},
    {"title":"Pavimenti in cemento elicotterato", "img":"/image/home/service/calcestruzzo.jpg", "desc":"Uniscono praticità d'uso e gradevole effetto estetico. Hanno un'elevata resistenza all'usura, all'urto e lunga durata nel tempo. Ideali per capannoni industriali, cortili, box e cantine.", "link":"/servizi/pavimenti-cemento-elicotterato", "status":"off"},
    {"title":"Rampe in cemento antiscivolo", "img":"/image/home/service/spinata.jpg", "desc":"La miglior soluzione per funzionalità e aspetto estetico. Realizzate in calcestruzzo lavorato in modo 'pettinato' o 'spina di pesce'.", "link":"/servizi/rampe-cemento", "status":"off"},
    {"title":"Pavimenti in resina", "img":"/image/home/service/resina.jpg", "desc":"Particolarmente indicato per realizzare superfici di notevole valore architettonico ed estetico. Ideale per locali commerciali e interni abitativi.", "link":"/servizi/pavimenti-resina", "status":"off"},
    {"title":"Pavimenti in cemento stampato", "img":"/image/home/service/stampati.jpg", "desc":"Una novità nel campo dell'edilizia, adatto per la ricreazione di pietre naturali, marmi e roccia. Ideale per piscine, giardini, viali e corsie di varie dimensioni.", "link":"/servizi/pavimenti-cemento-stampato", "status":"off"},
    {"title":"Pavimenti in cemento levigato e lucidato", "img":"/image/home/service/levigato.jpg", "desc":"Un pavimento con una resistenza all’abrasione elevatissima, traspirabile, con una superficie lucida come il vetro, antiscivolo e di facile pulizia con macchine lava asciuga.", "link":"/servizi/pavimenti-cemento-levigato-lucidato", "status":"on"},
    {"title":"Pavimenti in cemento sasso lavato", "img":"/image/home/service/lavato.jpg", "desc":"Particolare pavimentazione ottenuta mescolando al cemento: sassi di fiume o pietra naturale, graniglia di marmi e una miscela fibrorinforzata colorata e additivata.", "link":"/servizi/pavimenti-cemento-sasso-lavato", "status":"off"},
    {"title":"Pavimenti in cemento acidificato", "img":"/image/home/service/Acidificato1-830x620.jpg", "desc":"La soluzione migliore per negozi, uffici, centri commerciali e tavernette. Grazie all'utilizzo di specifici acidi si ottengono pavimentazioni in calcestruzzo con particolari sfumature e effetti cromatici.", "link":"/servizi/pavimenti-cemento-acidificato", "status":"off"}
  ]}

  var items = { "item":[
    {"img":"/image/home/work/Levigato1.jpg","type":"levigato","alt":"Pavimento in cemento levigato e lucidato", "text":"Processo di nobilitazione del pavimento nuovo o esistente, molto utilizzato in America, la superficie viene trattata e lavorata con appositi macchinari per la levigazione e con particolari silicati di litio che aumentano la durezza e la densità del cemento fino al 500%."},
    {"img":"/image/home/work/Levigato2.jpg","type":"levigato","alt":"Pavimento in cemento levigato e lucidato", "text":"Il risultato sarà un pavimento con una resistenza all’abrasione elevatissima, traspirabile e con una superficie lucida come il vetro di facile pulizia con macchine lava asciuga."},
    {"img":"/image/home/work/Levigato3.jpg","type":"levigato","alt":"Pavimento in cemento levigato e lucidato", "text":"Ideale per autosaloni, depositi, officine ma anche per il settore alimentare, della ristorazione e elettronica."}
  ]}


  var view = yield render('servizi/singleService/index',{ titlePage: "Pavimenti in cemento levigato e lucidato",
							  page: "Levigato",
							  services: services, 
							  items: items });
  this.body = yield render('layout', { title: "Pavicat di Catalano - Pavimenti in cemento levigato e lucidato a Torino, Milano e nord Italia", 
				       description: "Leader nel settore delle pavimentazioni in cemento levigato e lucidato",
				       cl: "",
				       id: "levigato",
				       body: view });
};
