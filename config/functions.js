function _response(res, next, status, data) {
  var response = {
    'status': status,
    'data': data,
  };
  res.setHeader('context-type', 'application/json');
  res.writeHead(200);
  res.end(JSON.stringify(response));
  return next();
};

module.exports.success =  function (res, next, data) {
  _response(res, next, 'success', data);
}

module.exports.failure =  function (res, next, data, http_error) {
  _response(res, next, 'failure', data, http_error);
}