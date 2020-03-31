'use strict';
const conf = require('./conf.json');
const home = require('./controllers/home');
const positions = require('./controllers/positions');
const services = require('./controllers/services');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const app = module.exports = koa();

// Logger
app.use(logger());

app.use(route.get('/', home.home));

app.use(route.get('/servizi', services.servizi));
app.use(route.get('/servizi/pavimenti-stampato', services.stampato)); // old
app.use(route.get('/servizi/pavimenti-cemento-stampato', services.stampato));
app.use(route.get('/servizi/pavimenti-cemento-tradizionale', services.elicotterato)); //old
app.use(route.get('/servizi/pavimenti-cemento-elicotterato', services.elicotterato));
app.use(route.get('/servizi/pavimenti-cemento-acidificato', services.acidificato));
app.use(route.get('/servizi/pavimenti-cemento-sasso-lavato', services.sassolavato));
app.use(route.get('/servizi/pavimenti-cemento-levigato-lucidato', services.levigato));
app.use(route.get('/servizi/pavimenti-resina', services.resina));
app.use(route.get('/servizi/rampe-cemento', services.rampa));

app.use(route.get('/lavora-con-noi', positions.all));
app.use(route.get('/lavora-con-noi/apprendista', positions.apprendista));
app.use(route.get('/lavora-con-noi/pavimentista', positions.pavimentista));

app.use(route.get('/test', home.test));
app.use(route.get('/test/about', home.about));
app.use(route.get('/test/single', home.about));
app.use(route.get('/test/service-item', home.serviceItem));
app.use(route.get('/test/service', home.service));


// Serve static files
app.use(serve(path.join(__dirname, 'public'), { hidden: true }));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(conf.port);
    console.log('listening on port '+conf.port);
}
