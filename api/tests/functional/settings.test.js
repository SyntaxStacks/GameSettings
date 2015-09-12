var api = require('./api');
var promise = require('bluebird');

describe('Setting API', function () {
  describe('Create Endpoint', function () {
    it('should create a setting', function (done) {
      var req = {
        method: 'POST',
        url: '/api/difficulty/easy/setting',
        body: ''
      };
      api(req).then(function (res) {
        var expectedResponse = {};
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.equal(expectedResponse);
        done();
      });
    });
  });

  describe('Read Endpoint', function () {
    it('should list settings', function (done) {
      var req = {
        method: 'GET',
        url: '/api/difficulty/easy/setting',
      };
      api(req).then(function (res) {
        var expectedResponse = {};
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal(expectedResponse);
        done();
      });
    });
  });

  describe('Update Endpoint', function () {
    it('should update setting', function (done) {
      var req = {
        method: 'PUT',
        url: '/api/difficulty/easy/setting',
        body: ''
      };
      api(req).then(function (res) {
        var expectedResponse = {};
        expect(res.statusCode).to.equal(204);
        expect(res.body).to.equal(expectedResponse);
        done();
      });
    });
  });

  describe('Delete Endpoint', function () {
    it('should delete settings', function (done) {
      var req = {
        method: 'DELETE',
        url: '/api/difficulty/easy/setting/maxEnemies',
      };
      api(req).then(function (res) {
        var expectedResponse = {};
        expect(res.statusCode).to.equal(204);
        expect(res.body).to.equal(expectedResponse);
        done();
      });
    });
  });
});

