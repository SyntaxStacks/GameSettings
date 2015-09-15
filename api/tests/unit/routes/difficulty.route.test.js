var promise = require('bluebird');
var routes = require(apiPath + '/routes/difficulty.route');
var difficultyCtrl = require(apiPath + '/controller/difficulty.ctrl');

describe('Difficulty Routes', function () {
  var res;
  var req;
  var difficultyCtrlStub;

  beforeEach(function () {
    res = { send: sinon.stub() };
    req = { params: { difficulty: 'test' } };
  });

  afterEach(function () {
    res = {};
    req = {};
    difficultyCtrlStub.restore();
  });

  describe('GET', function () {

    beforeEach(function () {
      difficultyCtrlStub = sinon.stub(difficultyCtrl, 'read').returns(new promise(function (resolve, reject) {
        resolve('test');
      }));
    });

    it('should return a 200', function (done) {
      routes.get(req, res).then(function () {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should send the response', function (done) {
      routes.get(req, res).then(function () {
        expect(res.send.calledOnce).to.be.true;
        done();
      });
    });
  });

  describe('PUT', function () {

    beforeEach(function () {
      difficultyCtrlStub = sinon.stub(difficultyCtrl, 'update').returns(new promise(function (resolve, reject) {
        resolve('test');
      }));
      req.body = '{}';
    });

    it('should return a 200', function (done) {
      routes.put(req, res).then(function () {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should send the response', function (done) {
      routes.put(req, res).then(function () {
        expect(res.send.calledOnce).to.be.true;
        done();
      });
    });
  });

  describe('POST', function () {
    beforeEach(function () {
      difficultyCtrlStub = sinon.stub(difficultyCtrl, 'create').returns(new promise(function (resolve, reject) {
        resolve('test');
      }));
      req.body = '{}';
    });

    it('should return a 201', function (done) {
      routes.post(req, res).then(function () {
        expect(res.statusCode).to.equal(201);
        done();
      });
    });

    it('should send the response', function (done) {
      routes.post(req, res).then(function () {
        expect(res.send.calledOnce).to.be.true;
        done();
      });
    });
  });

  describe('DELETE', function () {
    beforeEach(function () {
      difficultyCtrlStub = sinon.stub(difficultyCtrl, 'delete').returns(new promise(function (resolve, reject) {
        resolve('test');
      }));
    });

    it('should return a 200', function (done) {
      routes.delete(req, res).then(function () {
        expect(res.statusCode).to.equal(204);
        done();
      });
    });

    it('should send the response', function () {
      routes.delete(req, res).then(function () {
        expect(res.send.calledOnce).to.be.true;
      });
    });
  });
});

