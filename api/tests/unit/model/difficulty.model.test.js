var model = require(apiPath + '/model/difficulty.model');

describe('Difficulty Model', function () {
  var stub;
  beforeEach(function  () {
    stub = sinon.stub(model, 'model');
  });

  afterEach(function () {
    stub.restore();
  });

  it('should create difficulty levels', function () {
    var build = {
      label: 'normal',
      settings: ['1', '2']
    };
    model.create(build).then(function () {
      expect(stub.model.calledWith(build)).to.be.true;
    });
  });

  it('should read a difficulty', function () {
    model.read('ultraviolence').then(function () {
      expect(stub.read.calledWith({ label: level })).to.be.true;
    });
  });

  it('should list difficulties', function  () {
    model.read().then(function () {
      expect(stub.read.calledWith()).to.be.true;
    });
  });

  it('should update a difficulty', function () {
    var level = 'casual';
    var data = { settings: ['3', '4', '5'] };
    model.update(level, data).then(function () {
      expect(stub.findOneAndUpdate.calledWith({ label: level }, data)).to.be.true;
    });
  });

  it('should delete a difficulty', function () {
    var level = 'casual';
    model.destroy(level).then(function () {
      expect(stub.remove.calledWith({ label: level })).to.be.true;
    });
  });
});
