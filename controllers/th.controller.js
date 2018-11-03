var helpers = require('../config/functions.js');
module.exports.server =  function (server) {
  server.get("/", function(req, res, next) {
    helpers.success(res, next, users);
  });

  server.post("/", function(req, res, next) {
    var value = req.body;
    var click = new Array();
    var n_click = new Array();
    value.forEach(d => {
      click.push(d.click);
      n_click.push(d.n_click);
    });
    var spawn = require('child_process').spawn,
    py    = spawn('python', ['Algorithm.py']),
    dataString = '';
    py.stdout.on('data', function(data){
      dataString += data.toString();
    });
    py.stdout.on('end', function(){
      helpers.success(res, next, dataString);
    });
    py.stdin.write(JSON.stringify(click +'/'+ n_click));
      py.stdin.end();
  });
}