'use strict';
const conf = require('./conf.json');
const messages = require('./controllers/messages');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const app = module.exports = koa();

// Logger
app.use(logger());

app.use(route.get('/', messages.home));
app.use(route.get('/servizi', messages.servizi));

app.use(route.get('/servizi/pavimenti-stampato', messages.stampato)); // old
app.use(route.get('/servizi/pavimenti-cemento-stampato', messages.stampato));

app.use(route.get('/servizi/pavimenti-cemento-tradizionale', messages.elicotterato)); //old
app.use(route.get('/servizi/pavimenti-cemento-elicotterato', messages.elicotterato));

app.use(route.get('/servizi/pavimenti-cemento-acidificato', messages.acidificato));
app.use(route.get('/servizi/pavimenti-cemento-sasso-lavato', messages.sassolavato));
app.use(route.get('/servizi/pavimenti-cemento-levigato-lucidato', messages.levigato));
app.use(route.get('/servizi/pavimenti-resina', messages.resina));
app.use(route.get('/servizi/rampe-cemento', messages.rampa));


app.use(route.get('/test', messages.test));
app.use(route.get('/test/about', messages.about));
app.use(route.get('/test/single', messages.about));
app.use(route.get('/test/service-item', messages.serviceItem));
app.use(route.get('/test/service', messages.service));


// Serve static files
app.use(serve(path.join(__dirname, 'public'), { hidden: true }));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(conf.port);
    console.log('listening on port '+conf.port);
}
