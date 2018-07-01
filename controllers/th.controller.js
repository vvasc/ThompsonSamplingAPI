var helpers = require('../config/functions.js');

var users = {};
var max_user_id = 0;



module.exports.server =  function (server) {
    server.get("/", function(req, res, next) {
      helpers.success(res, next, users);
    });
    
  //  server.get("/user/:id", function(req, res, next) {
   //   req.assert('id', 'Id is requite and must be numeric').notEmpty().isInt(); //Validation
    //  var errors = req.validationErrors();
     // if (errors) {
      //  helpers.failure(res, next, errors[0], 400);
     // }
     // if(typeof(users[parseInt(req.params.id)]) === 'undefined') {
   // helpers.failure(res, next, 'the specific user not found', 404);
 // }
 // helpers.success(res, next, users[parseInt(req.params.id)]);
 // });

  server.post("/", function(req, res, next) {
    //req.assert('', '').notEmpty();  
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