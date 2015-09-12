var setting = require(apiPath + '/controller/setting.ctrl.js');
var settingModel = require(apiPath + '/model/setting.model');

describe('Setting Controller', function () {
  var modelStub;

  afterEach(function () {
    modelStub.restore();
  });

  describe('Create', function () {
    it('should call models create function', function () {
      modelStub = sinon.stub(settingModel, 'create');
      setting.create({});
      expect(modelStub.calledWith({})).to.be.true;
    });
  });

  describe('Read', function () {
    it('should call models read function', function () {
      modelStub = sinon.stub(settingModel, 'read');
      setting.read('easy');
      expect(modelStub.calledWith('easy')).to.be.true;
    });
  });

  describe('Update', function () {
    it('should call models update function', function () {
      modelStub = sinon.stub(settingModel, 'update');
      setting.update('easy', {});
      expect(modelStub.calledWith('easy', {})).to.be.true;
    });
  });

  describe('Delete', function () {
    it('should call models delete function', function () {
      modelStub = sinon.stub(settingModel, 'destroy');
      setting.delete('easy');
      expect(modelStub.calledWith('easy')).to.be.true;
    });
  });
});
