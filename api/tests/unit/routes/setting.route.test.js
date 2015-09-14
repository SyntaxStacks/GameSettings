var promise = require('bluebird');
var routes = require(apiPath + '/routes/setting.route');
var settingCtrl = require(apiPath + '/controller/setting.ctrl');

describe('Setting Routes', function () {
  var res;
  var req;
  var settingCtrlStub;

  beforeEach(function () {
    res = { send: sinon.stub() };
    req = { params: { difficulty: 'test', label: 'setting', value: 'value' } };
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
      settingCtrlStub = sinon.stub(settingCtrl, 'update').returns(new promise(function (resolve, reject) {
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
      settingCtrlStub = sinon.stub(settingCtrl, 'create').returns(new promise(function (resolve, reject) {
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
      settingCtrlStub = sinon.stub(settingCtrl, 'delete').returns(new promise(function (resolve, reject) {
        resolve('test');
      }));
    });

    it('should return a 204', function (done) {
      routes.delete(req, res).then(function () {
        expect(res.statusCode).to.equal(204);
        done();
      });
    });

    it('should send the response', function (done) {
      routes.delete(req, res).then(function () {
        expect(res.send.calledOnce).to.be.true;
        done();
      });
    });

  });
});

