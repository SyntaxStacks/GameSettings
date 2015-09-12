/**
 * init.js
 * Initializes Game Settings API
 *
 * @param app: Express App Object
 */

var difficulty = require('./routes/difficulty.route');
var setting = require('./routes/setting.route');

module.exports = function (app) {
  var endpoints = {
    post: {
      '/api/difficulty/:level': difficulty.post,
      '/api/difficulty/:level/setting': setting.post
    },
    get: {
      '/api/difficulty/:level': difficulty.get,
      '/api/difficulty/:level/setting': setting.get
    },
    put: {
      '/api/difficulty/:level': difficulty.put,
      '/api/difficulty/:level/setting': setting.put
    },
    delete: {
      '/api/difficulty/:level': difficulty.delete,
      '/api/difficulty/:level/setting': setting.delete,
    }
  }

  for (var method in endpoints) {
    var routes = endpoints[method];
    for (var route in routes) {
      app[method](route, routes[route]);
    }
  }
};
