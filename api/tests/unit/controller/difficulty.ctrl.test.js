var difficulty = require(apiPath + '/controller/difficulty.ctrl.js');
var difficultyModel = require(apiPath + '/model/difficulty.model');

describe('Difficulty Controller', function () {
  var modelStub;

  afterEach(function () {
    modelStub.restore();
  });

  describe('Create', function () {
    it('should call models create function', function () {
      modelStub = sinon.stub(difficultyModel, 'create').returns({ then: function (f) { f(); } });
      var difficultyName = 'normal';
      var isDefault = false;
      var settings = [];
      difficulty.create(difficultyName, isDefault, settings);
      expect(modelStub.calledWith(difficultyName, isDefault, settings)).to.be.true;
    });
  });

  describe('Read', function () {
    it('should call models read function', function () {
      modelStub = sinon.stub(difficultyModel, 'read');
      difficulty.read('easy');
      expect(modelStub.calledWith('easy')).to.be.true;
    });
  });

  describe('Update', function () {
    it('should call models update function', function () {
      modelStub = sinon.stub(difficultyModel, 'update').returns({ then: function (fn) { fn(); } });
      difficulty.update('easy', false);
      expect(modelStub.calledWith('easy', false)).to.be.true;
    });
  });

  describe('Delete', function () {
    it('should call models delete function', function () {
      modelStub = sinon.stub(difficultyModel, 'destroy');
      difficulty.delete('easy');
      expect(modelStub.calledWith('easy')).to.be.true;
    });
  });
});
