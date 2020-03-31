'use strict';
const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});

var services = { "service":[
    {"title":"Tutti i servizi", "link":"/servizi"},
    {"title":"Pavimenti in cemento elicotterato", "link":"/servizi/pavimenti-cemento-elicotterato"},
    {"title":"Rampe in cemento antiscivolo", "link":"/servizi/rampe-cemento"},
    {"title":"Pavimenti in resina", "link":"/servizi/pavimenti-resina"},
    {"title":"Pavimenti in cemento stampato", "link":"/servizi/pavimenti-cemento-stampato"},
    {"title":"Pavimenti in cemento levigato e lucidato", "link":"/servizi/pavimenti-cemento-levigato-lucidato"},
    {"title":"Pavimenti in cemento sasso lavato", "link":"/servizi/pavimenti-cemento-sasso-lavato"},
    {"title":"Pavimenti in cemento acidificato", "link":"/servizi/pavimenti-cemento-acidificato"}
  ]}
var titleSideAll = "Offerte di lavoro";
var titleSideApprendista = "Apprendista";
var titleSidePavimentista = "Pavimentista";

// Page all job positions
module.exports.all = function *all(ctx) {
  var titlePageSeo = "Pavicat di Catalano - Lavora con noi";
  var descPageSeo = "Entra nel nostro team, siamo alla continua ricerca di personale con voglia e passione per le attività edili ed in particolare per le pavimentazioni in calcestruzzo e resina";
  var titlePos = "Vuoi far parte della nostra azienda?";
  var descPos = "Lavorare in Pavicat significa fare parte di una famiglia che condivide valori e passione: portare l’arte delle pavimentazioni nel mondo dei cantieri, attraverso la professionalità e la serietà che da sempre ci contraddistingue. <br>Se anche tu aspiri ad entrare in una squadra dove con passione, determinazione ed impegno potrai crescere e far crescere questa storia imprenditoriale, unisciti a noi. <br>Stiamo cercando <a href='/lavora-con-noi/apprendista'>giovani apprendisti</a> e <a href='/lavora-con-noi/pavimentista'>pavimentisti.</a>";
  var positions = { "position":[
    {"title":"Lavora con noi", "link":"/lavora-con-noi", "titleSide":titleSideAll, "title":titlePos, "description":descPos, "status":"on"},
    {"title":"Apprendista", "link":"/lavora-con-noi/apprendista", "titleSide":titleSideApprendista, "title":"", "description":"", "status":"off"},
    {"title":"Pavimentista", "link":"/lavora-con-noi/pavimentista", "titleSide":titleSidePavimentista, "title":"", "description":"", "status":"off"}
  ]}

  var view = yield render('positions/index',{ titlePage:"LAVORA CON NOI",
					      page:"Posizioni",
					      services:services,
					      positions:positions
					    });
  
  this.body = yield render('layout', { title: titlePageSeo, 
				       description: descPageSeo, 
				       cl: "",
				       id: "posizioni",
				       body: view });
};

// Page apprendista job positions
module.exports.apprendista = function *apprendista(ctx) {
  var titlePageSeo = "Pavicat di Catalano - Lavora con noi: offerta di lavoro per apprendista";
  var descPageSeo = "Entra nel nostro team, offerta di lavoro dedicata ai ragazzi con passione e tanta voglia di imparare a realizzare pavimentazioni in calcestruzzo e resina";
  var titlePos = "Apprendista operaio specializzato";
  var descPos = "Siamo alla ricerca di candidati giovani e dinamici da inserire nei nostri team operativi di cantiere.<br>La risorsa, con la supervisione dei responsabili di cantiere, svolgerà un percorso di formazione al fine di acquisire le competenze tipiche di un operaio specializzato nella realizzazione di pavimentazioni in calcestruzzo e resina.<br><br>SEDE DI PARTENZA AL MATTINO: ORBASSANO (TO)<br><br>Profilo ricercato:<br>- Possibilità di raggiungere la sede di Orbassano al mattino presto<br>- Disponibilità di orario<br>- Precisione e puntualità<br>- Capacità organizzative e di gestione delle priorità<br>- Attitudine a lavorare in team<br><br>Inquadramento:<br>- Si offre contratto di apprendistato professionalizzante<br>- L’orario di lavoro sarà nella modalità full-time<br><br>Per candidarsi alla posizione è necessario scrivere a info@pavicat.it inviando in allegato il proprio CV.";
  var positions = { "position":[
    {"title":"Lavora con noi", "link":"/lavora-con-noi", "titleSide":titleSideAll, "title":"", "description":"", "status":"off"},
    {"title":"Apprendista", "link":"/lavora-con-noi/apprendista", "titleSide":titleSideApprendista, "title":titlePos, "description":descPos, "status":"on"},
    {"title":"Pavimentista", "link":"/lavora-con-noi/pavimentista", "titleSide":titleSidePavimentista, "title":"", "description":"", "status":"off"}
  ]}

  var view = yield render('positions/singlePosition/index',{ titlePage:"LAVORA CON NOI: APPRENDISTA",
					      page:"Apprendista",
					      services:services,
					      positions:positions
					    });
  
  this.body = yield render('layout', { title: titlePageSeo, 
				       description: descPageSeo, 
				       cl: "",
				       id: "posizioni",
				       body: view });
};

// Page pavimentista job positions
module.exports.pavimentista = function *pavimentista(ctx) {
  var titlePageSeo = "Pavicat di Catalano - Lavora con noi: offerta di lavoro contratto full time";
  var descPageSeo = "Entra nel nostro team, offerta di lavoro dedicata agli operatori esperti di pavimentazioni in calcestruzzo e resina";
  var titlePos = "Pavimentista operaio specializzato";
  var descPos = "Siamo alla ricerca di candidati con esperienza nel settore delle pavimentazioni in calcestruzzo e resina da inserire nei nostri team operativi di cantiere.<br>La risorsa sarà inserito nel team operativo che si occupa della realizzazione di pavimentazioni in calcestruzzo e resina.<br><br>SEDE DI PARTENZA AL MATTINO: ORBASSANO (TO)<br><br>Profilo ricercato:<br>- Esperienza di almeno 3 anni nelle pavimentazioni in calcestruzzo e resina<br>- Possibilità di raggiungere la sede di Orbassano al mattino presto<br>- Disponibilità di orario<br>- Precisione e puntualità<br>- Capacità organizzative e di gestione delle priorità<br>- Attitudine a lavorare in team<br><br>Inquadramento:<br>- Si offre, per iniziare, contratto a tempo determinato<br>- L’orario di lavoro sarà nella modalità full-time<br><br>Per candidarsi alla posizione è necessario scrivere a info@pavicat.it inviando in allegato il proprio CV.";
  var positions = { "position":[
    {"title":"Lavora con noi", "link":"/lavora-con-noi", "titleSide":titleSideAll, "title":"", "description":"", "status":"off"},
    {"title":"Apprendista", "link":"/lavora-con-noi/apprendista", "titleSide":titleSideApprendista, "title":"", "description":"", "status":"off"},
    {"title":"Pavimentista", "link":"/lavora-con-noi/pavimentista", "titleSide":titleSidePavimentista, "title":titlePos, "description":descPos, "status":"on"}
  ]}

  var view = yield render('positions/singlePosition/index',{ titlePage:"LAVORA CON NOI: PAVIMENTISTA",
					      page:"Pavimentista",
					      services:services,
					      positions:positions
					    });
  
  this.body = yield render('layout', { title: titlePageSeo, 
				       description: descPageSeo, 
				       cl: "",
				       id: "posizioni",
				       body: view });
};
