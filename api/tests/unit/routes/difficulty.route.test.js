var promise = require('bluebird');
var routes = require(apiPath + '/routes/difficulty.route');
var difficultyCtrl = require(apiPath + '/controller/difficulty.ctrl');

describe('Difficulty Routes', function () {
  var res;
  var req;
  var difficultyCtrlStub;

  beforeEach(function () {
    res = { send: sinon.stub() };
    req = { param: { level: 'test' } };
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

    it('should return a 200', function () {
      routes.get(req, res).then(function () {
        expect(res.statusCode).to.equal(200);
      });
    });

    it('should send the response', function () {
      routes.get(req, res).then(function () {
        expect(res.send.calledOnce).to.be.true;
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

    it('should return a 200', function () {
      routes.put(req, res).then(function () {
        expect(res.statusCode).to.equal(200);
      });
    });

    it('should send the response', function () {
      routes.put(req, res).then(function () {
        expect(res.send.calledOnce).to.be.true;
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

    it('should return a 200', function () {
      routes.post(req, res).then(function () {
        expect(res.statusCode).to.equal(200);
      });
    });

    it('should send the response', function () {
      routes.post(req, res).then(function () {
        expect(res.send.calledOnce).to.be.true;
      });
    });
  });

  describe('DELETE', function () {
    beforeEach(function () {
      difficultyCtrlStub = sinon.stub(difficultyCtrl, 'delete').returns(new promise(function (resolve, reject) {
        resolve('test');
      }));
    });

    it('should return a 200', function () {
      routes.delete(req, res).then(function () {
        expect(res.statusCode).to.equal(200);
      });
    });

    it('should send the response', function () {
      routes.delete(req, res).then(function () {
        expect(res.send.calledOnce).to.be.true;
      });
    });
  });
});

