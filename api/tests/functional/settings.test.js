var _ = require('lodash');
var promise = require('bluebird');
var api = require('./api');

describe('Setting API', function () {
  describe('Create Endpoint', function () {
    it('should create a setting', function (done) {
      var req = {
        method: 'POST',
        url: '/api/difficulty/easy/setting/max-health/100'
      };
      api(req).then(function (res) {
        var body = JSON.parse(res.body);
        expect(res.statusCode).to.equal(201);
        expect(body.label).to.equal('easy');
        var setting = _.find(body.settings, { label: 'max-health', value: '100' });
        expect(_.isUndefined(setting)).to.be.false;
        done();
      });
    });
  });

  describe('Read Endpoint', function () {
    it('should list settings', function (done) {
      var req = {
        method: 'GET',
        url: '/api/difficulty/easy/setting/max-health',
      };
      api(req).then(function (res) {
        var body = JSON.parse(res.body);
        expect(res.statusCode).to.equal(200);
        expect(body.label).to.equal('max-health');
        expect(body.value).to.equal('100');
        done();
      });
    });
  });

  describe('Update Endpoint', function () {
    it('should update setting', function (done) {
      var req = {
        method: 'PUT',
        url: '/api/difficulty/easy/setting/max-health/110'
      };
      api(req).then(function (res) {
        var body = JSON.parse(res.body);
        var setting = _.find(body.settings, { label: 'max-health', value: '110' });
        expect(res.statusCode).to.equal(200);
        expect(_.isUndefined(setting)).to.be.false;
        done();
      });
    });
  });

  describe('Delete Endpoint', function () {
    it('should delete settings', function (done) {
      var req = {
        method: 'DELETE',
        url: '/api/difficulty/easy/setting/max-health',
      };
      api(req).then(function (res) {
        expect(res.statusCode).to.equal(204);
        done();
      });
    });
  });
});

