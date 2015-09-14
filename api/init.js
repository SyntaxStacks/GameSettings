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
      '/api/difficulty/:difficulty': difficulty.post,
      '/api/difficulty/:difficulty/setting/:label/value/:value': setting.post,
      '/api/reset-database': difficulty.reset
    },
    get: {
      '/api/difficulty/': difficulty.get,
      '/api/difficulty/:difficulty': difficulty.get,
      '/api/difficulty/:difficulty/setting/:label': setting.get
    },
    put: {
      '/api/difficulty/:difficulty': difficulty.put,
      '/api/difficulty/:difficulty/setting/:settingName/value/:value/label/:label': setting.put
    },
    delete: {
      '/api/difficulty/:difficulty': difficulty.delete,
      '/api/difficulty/:difficulty/setting/:label': setting.delete,
    }
  }

  for (var method in endpoints) {
    var routes = endpoints[method];
    for (var route in routes) {
      app[method](route, routes[route]);
    }
  }
};
