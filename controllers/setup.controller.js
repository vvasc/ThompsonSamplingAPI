module.exports.setup = function (server, restify, restifyvalidator) {
  server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });
  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.queryParser());
  server.use(restifyvalidator);
}
