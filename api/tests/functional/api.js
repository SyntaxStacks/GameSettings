var request = require('request');
var promise = require('bluebird');

module.exports = function (opts) {
  var base = 'http://127.0.0.1:8080';
  var req = {
    url: base + opts.url,
    method: opts.method,
  };
  if (opts.body) {
    req.body = opts.body;
  }
  return new promise(function (resolve, reject) {
    request(req, function (error, response, body) {
      if (error) {
        return reject(error);
      }
      resolve({
        statusCode: response.statusCode,
        body: body
      });
    });
  });
};
