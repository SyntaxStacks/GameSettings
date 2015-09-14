var _ = require('lodash');
var api = require('./api');

describe('Difficulty API', function () {
  describe('Create Endpoint', function () {
    it('should create a difficulty level', function (done) {
      var req = {
        method: 'POST',
        url: '/api/difficulty/hard',
        body: { isDefault: true, settings: [] }
      };
      api(req).then(function (res) {
        expect(res.statusCode).to.equal(200);
        var body = res.body;
        expect(body.label).to.equal('hard');
        expect(body.isDefault).to.equal(true);
        expect(body.settings).to.eql([]);
        done();
      });
    });
  });

  describe('Read Endpoint', function () {
    it('should read a difficulty', function (done) {
      var req = {
        method: 'GET',
        url: '/api/difficulty/hard',
      };
      api(req).then(function (res) {
        var expectedResponse = {};
        var body = JSON.parse(res.body);
        expect(res.statusCode).to.equal(200);
        expect(body.label).to.equal('hard');
        expect(body.isDefault).to.equal(true);
        expect(body.settings).to.eql([]);
        done();
      });
    });

    it('should list difficulty', function (done) {
      var req = {
        method: 'GET',
        url: '/api/difficulty',
      };
      api(req).then(function (res) {
        var body = JSON.parse(res.body);
        expect(res.statusCode).to.equal(200);
        expect(_.isEmpty(body)).to.be.false;
        done();
      });
    });
  });

  describe('Update Endpoint', function () {
    it('should update difficulty', function (done) {
      var req = {
        method: 'PUT',
        url: '/api/difficulty/hard',
        body: { isDefault: true }
      };
      api(req).then(function (res) {
        var expectedResponse = {};
        expect(res.statusCode).to.equal(200);
        expect(res.body.isDefault).to.equal(true);
        done();
      });
    });
  });

  describe('Delete Endpoint', function () {
    it('should delete difficulty', function (done) {
      var req = {
        method: 'DELETE',
        url: '/api/difficulty/hard',
      };
      api(req).then(function (res) {
        var expectedResponse = {};
        expect(res.statusCode).to.equal(204);
        done();
      });
    });
  });
});

