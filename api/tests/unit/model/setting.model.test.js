var model = require(apiPath + '/model/setting.model');

describe('Setting Model', function () {
  var stub;
  beforeEach(function  () {
    stub = sinon.stub(model, 'model');
  });

  afterEach(function () {
    stub.restore();
  });

  it('should create a setting', function () {
    var build = {
      label: 'normal',
      settings: ['1', '2']
    };
    model.create(build).then(function () {
      expect(stub.model.calledWith(build)).to.be.true;
    });
  });

  it('should read a setting', function () {
    model.read('ultraviolence').then(function () {
      expect(stub.read.calledWith({ label: level })).to.be.true;
    });
  });

  it('should list settings', function  () {
    model.read().then(function () {
      expect(stub.read.calledWith()).to.be.true;
    });
  });

  it('should update a setting', function () {
    var level = 'casual';
    var data = { settings: ['3', '4', '5'] };
    model.update(level, data).then(function () {
      expect(stub.findOneAndUpdate.calledWith({ label: level }, data)).to.be.true;
    });
  });

  it('should delete a setting', function () {
    var level = 'casual';
    model.destroy(level).then(function () {
      expect(stub.remove.calledWith({ label: level })).to.be.true;
    });
  });
});
