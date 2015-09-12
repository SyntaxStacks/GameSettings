var promise = require('bluebird');
var routes = require(apiPath + '/routes/setting.route');
var settingCtrl = require(apiPath + '/controller/setting.ctrl');

describe('Setting Routes', function () {
  var res;
  var req;
  var settingCtrlStub;

  beforeEach(function () {
    res = { send: sinon.stub() };
    req = { param: { level: 'test' } };
  });

  afterEach(function () {
    res = {};
    req = {};
    settingCtrlStub.restore();
  });

  describe('GET', function () {
    beforeEach(function () {
      settingCtrlStub = sinon.stub(settingCtrl, 'read').returns(new promise(function (resolve, reject) {
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
      settingCtrlStub = sinon.stub(settingCtrl, 'update').returns(new promise(function (resolve, reject) {
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
      settingCtrlStub = sinon.stub(settingCtrl, 'create').returns(new promise(function (resolve, reject) {
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
      settingCtrlStub = sinon.stub(settingCtrl, 'delete').returns(new promise(function (resolve, reject) {
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

