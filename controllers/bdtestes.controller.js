var config = require('../config/config.js');
var helpers = require('../config/functions.js');


module.exports.bdconect = function (mssql) {
  mssql.connect(config.config, function(err) {
    if (err) {
      console.log('error config' + err);
    }
  })
}
module.exports.serv = function(server, mssql) {
  server.get("/tabela", function(req, res, next) {
    var request = new mssql.Request();
    request.query('select * from tabela', function(err, record) {
      if (err) {
        console.log("error" + err);
      }
      res.send(record);
    });
  });
  server.post("/include", function(req, res, next) {
    req.assert('Id', 'id is required').notEmpty().isInt();
    req.assert('Ano', 'Ano is required').notEmpty().isInt();
    var request = new mssql.Request();
    var ano = req.query;
    var query = 'insert Ano(id, Ano) Values(' 
    query += String(ano.Id);
    query += ', '
    query += String(ano.Ano);
    query += ')'
    request.query(query, function(err, record) {
      if (err) {
        console.log("error" + err);
      }
    })
    helpers.success(res, next);
  });

  server.post("/gerdata", function(req, res, next) {
    var request = new mssql.Request();
    var data = req.body;
    console.log(req.body);
    var query= 'INSERT DADOS_INDICE (ID, Val, Ano) VALUES (';
    query += String(data.ID);
    query += ', ';
    query += String(data.Val);
    query += ', ';
    query += String(data.Ano);
    query += ')'
    request.query(query, function(err, record) {
      if (err) {
        console.log("error" + err);
      }
    })
    helpers.success(res, next);
  }) 

  server.get("/getdata", function(req, res, next) {
    var request = new mssql.Request();
    var data = req.body;
    var query = 'select * from DADOS_INDICE order by Ano';
    request.query(query, function(err, recordset) {
      if (err) {
        console.log("error", err);
      }
      console.log(recordset);
      res.send(recordset.recordset);
      next();
    });
  });

} 
