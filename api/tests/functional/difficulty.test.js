var api = require('./api');

describe('Difficulty API', function () {
  describe('Create Endpoint', function () {
    it('should create a difficulty level', function (done) {
      var req = {
        method: 'POST',
        url: '/api/difficulty',
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
    it('should read a difficulty', function (done) {
      var req = {
        method: 'GET',
        url: '/api/difficulty/0',
      };
      api(req).then(function (res) {
        var expectedResponse = {};
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal(expectedResponse);
        done();
      });
    });

    it('should list difficulty', function (done) {
      var req = {
        method: 'GET',
        url: '/api/difficulty',
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
    it('should update difficulty', function (done) {
      var req = {
        method: 'PUT',
        url: '/api/difficulty/0',
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
    it('should delete difficulty', function (done) {
      var req = {
        method: 'DELETE',
        url: '/api/difficulty/0',
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

