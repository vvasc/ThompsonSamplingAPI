var restify = require('restify'); // inclui o modulo
var server = restify.createServer(); // cria o server
var setupcontroller = require('./controllers/setup.controller.js');
var usercontroller = require('./controllers/user.controller.js');
var bdtestescontroller = require('./controllers/bdtestes.controller.js');
var restifyvalidator = require('restify-validator');
var mssql = require('mssql');
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['http://localhost:4200'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
})
server.pre(cors.preflight);
server.use(cors.actual);

usercontroller.server(server);
setupcontroller.setup(server, restify, restifyvalidator);
bdtestescontroller.bdconect(mssql);
bdtestescontroller.serv(server, mssql);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});