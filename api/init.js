/**
 * init.js
 * Initializes Game Settings API
 *
 * @param app: Express App Object
 */

var difficulty = require('./routes/difficulty');

module.exports = function (app) {
  var endpoints = {
    post: {
      '/api/default': difficulty.default.post,
      '/api/easy': difficulty.easy.post,
      '/api/normal': difficulty.normal.post,
      '/api/hard': difficulty.hard.post
    },
    get: {
      '/api/default': difficulty.default.get,
      '/api/easy': difficulty.easy.get,
      '/api/normal': difficulty.normal.get,
      '/api/hard': difficulty.hard.get
    }
  }

  for (var method in endpoints) {
    var routes = endpoints[method];
    for (var route in routes) {
      app[method](route, routes[route]);
    }
  }
};
