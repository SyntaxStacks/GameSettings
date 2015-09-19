var _ = require('lodash');
var promise = require('bluebird');
var api = require('./api');

describe('Setting API', function () {
  before(function (done) {
    var req = {
      method: 'POST',
      url: '/api/reset-database',
    };
    api(req).then(function () {
      done();
    });
  });
  describe('Create Endpoint', function () {
    it('should create a string setting', function (done) {
      var req = {
        method: 'POST',
        url: '/api/difficulty/Easy/setting/max-health/value/100/type/string'
      };
      api(req).then(function (res) {
        var body = JSON.parse(res.body);
        expect(res.statusCode).to.equal(201);
        expect(body.label).to.equal('Easy');
        var setting = _.find(body.settings, { label: 'max-health', value: '100' });
        expect(_.isUndefined(setting)).to.be.false;
        done();
      });
    });

    it('should create a number setting', function (done) {
      var req = {
        method: 'POST',
        url: '/api/difficulty/Easy/setting/max-health.number/value/100/type/number'
      };
      api(req).then(function (res) {
        var body = JSON.parse(res.body);
        expect(res.statusCode).to.equal(201);
        expect(body.label).to.equal('Easy');
        var setting = _.find(body.settings, { label: 'max-health.number', value: 100 });
        expect(_.isUndefined(setting)).to.be.false;
        done();
      });
    });

    it('should create a boolean setting', function (done) {
      var req = {
        method: 'POST',
        url: '/api/difficulty/Easy/setting/has-cape/value/true/type/boolean'
      };
      api(req).then(function (res) {
        var body = JSON.parse(res.body);
        expect(res.statusCode).to.equal(201);
        expect(body.label).to.equal('Easy');
        var setting = _.find(body.settings, { label: 'has-cape', value: true });
        expect(_.isUndefined(setting)).to.be.false;
        done();
      });
    });

    it('should create a boolean setting', function (done) {
      var req = {
        method: 'POST',
        url: '/api/difficulty/Easy/setting/bombs/value/null/type/null'
      };
      api(req).then(function (res) {
        var body = JSON.parse(res.body);
        expect(res.statusCode).to.equal(201);
        expect(body.label).to.equal('Easy');
        var setting = _.find(body.settings, { label: 'bombs', value: null });
        expect(_.isUndefined(setting)).to.be.false;
        done();
      });
    });
  });

  describe('Read Endpoint', function () {
    it('should list settings', function (done) {
      var req = {
        method: 'GET',
        url: '/api/difficulty/Easy/setting/max-health',
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
        url: '/api/difficulty/Easy/setting/max-health/value/110/type/number/label/max.health/'
      };
      api(req).then(function (res) {
        var body = JSON.parse(res.body);
        var setting = _.find(body.settings, { label: 'max.health', value: 110 });
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
        url: '/api/difficulty/Easy/setting/max.health',
      };
      api(req).then(function (res) {
        expect(res.statusCode).to.equal(204);
        api({ method: 'GET', url: '/api/difficulty/Easy' })
          .then(function (res) {
            var body = JSON.parse(res.body);
            var setting = _.find(body.settings, { label: 'max.health' });
            expect(setting).to.be.undefined;
            done();
          });
      });
    });
  });
});

