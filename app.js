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
app.use(route.get('/pavimenti-stampato', messages.stampato)); // old
app.use(route.get('/pavimenti-cemento-stampato', messages.stampato));
app.use(route.get('/pavimenti-cemento-tradizionale', messages.tradizionale));
app.use(route.get('/pavimenti-cemento-acidificato', messages.acidificato));
app.use(route.get('/pavimenti-cemento-sasso-lavato', messages.sassolavato));
app.use(route.get('/pavimenti-resina', messages.resina));
app.use(route.get('/rampe-cemento', messages.rampa));


app.use(route.get('/test', messages.test));
app.use(route.get('/test/about', messages.about));
app.use(route.get('/test/single', messages.about));
app.use(route.get('/test/service-item', messages.serviceItem));


// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(conf.port);
    console.log('listening on port '+conf.port);
}
