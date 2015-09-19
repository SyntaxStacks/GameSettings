var promise = require('bluebird');
var setting = require(apiPath + '/controller/setting.ctrl.js');
var difficultyModel = require(apiPath + '/model/difficulty.model');

describe('Setting Controller', function () {
  var modelStub;

  afterEach(function () {
    modelStub.restore();
  });

  describe('Create', function () {
    it('should call models createSetting function', function (done) {
      modelStub = sinon.stub(difficultyModel, 'createSetting').returns(new promise (function (resolve, reject) {
        resolve('test');
      }));
      var difficulty = 'easy';
      var label = 'rockets';
      var value = '8';
      var type = 'number';
      setting.create(difficulty, label, value, type).then(function () {
        expect(modelStub.calledWith(difficulty, label, Number(value))).to.be.true;
        done();
      });
    });
  });

  describe('Read', function () {
    it('should call models read function', function () {
      modelStub = sinon.stub(difficultyModel, 'readSetting');
      var difficulty = 'easy';
      var label = 'rockets';
      setting.read(difficulty, label);
      expect(modelStub.calledWith(difficulty, label)).to.be.true;
    });
  });

  describe('Update', function () {
    it('should call models update function', function (done) {
      var difficulty = 'easy';
      var settingName = 'rockets';
      var label = 'rockets';
      var value = '80';
      var type = 'number';
      modelStub = sinon.stub(difficultyModel, 'updateSetting').returns(new promise (function (resolve, reject) {
        resolve('test');
      }));
      setting.update(difficulty, settingName, label, value, type).then(function () {
        expect(modelStub.calledWith(difficulty, settingName, label, Number(value))).to.be.true;
        done();
      });
    });
  });

  describe('Delete', function () {
    it('should call models delete function', function () {
      modelStub = sinon.stub(difficultyModel, 'destroySetting');
      var difficulty = 'easy';
      var label = 'rockets';
      setting.delete(difficulty, label);
      expect(modelStub.calledWith(difficulty, label)).to.be.true;
    });
  });
});
