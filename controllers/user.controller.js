var helpers = require('../config/functions.js');

var users = {};
var max_user_id = 0;



module.exports.server =  function (server) {
    server.get("/", function(req, res, next) {
      helpers.success(res, next, users);
    });
    
    server.get("/user/:id", function(req, res, next) {
      req.assert('id', 'Id is requite and must be numeric').notEmpty().isInt(); //Validation
      var errors = req.validationErrors();
      if (errors) {
        helpers.failure(res, next, errors[0], 400);
      }
      if(typeof(users[parseInt(req.params.id)]) === 'undefined') {
    helpers.failure(res, next, 'the specific user not found', 404);
  }
  helpers.success(res, next, users[parseInt(req.params.id)]);
  });

  //server.post("/", function(req, res, next) {
   // req.assert('first_name', 'first name is require').notEmpty();
    //req.assert('last_name', 'last name is require').notEmpty();  //Validation 
    //var user = req.params;
    //max_user_id++;
   // user.id = max_user_id;
    //users[user.id] = user;
    //helpers.success(res, next, user);
  //});

  server.put("/user/:id", function(req, res, next) {
    var user = users[parseInt(req.params.id)];
    var updates = req.params;
    for (var field in updates) {
      user[field] = updates[field];
    }
    helpers.success(res, next, user);
    return next();
  });

  server.del("/user/:id", function(req, res, next) {
    delete users[parseInt(req.params.id)];
    helpers.success(res, next, []);
    return next();
  });
}