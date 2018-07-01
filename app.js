var restify = require('restify'); // inclui o modulo
var server = restify.createServer(); // cria o server
var setupcontroller = require('./controllers/setup.controller.js');
var th = require('./controllers/th.controller');
var restifyvalidator = require('restify-validator');
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['http://localhost:4200'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
})

server.pre(cors.preflight);
server.use(cors.actual);

th.server(server);
setupcontroller.setup(server, restify, restifyvalidator);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});