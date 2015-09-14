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
    var difficulty = 'normal';
    var isDefault = false;
    var settings = ['1', '2'];


    model.create(difficulty, isDefault, settings).then(function () {
      var expected = {
        label: difficulty,
        isDefault: isDefault,
        setting: settings
      };
      expect(stub.model.calledWith(expected)).to.be.true;
    });
  });

  it('should read a difficulty', function () {
    var difficulty = 'ultraviolence';
    model.read(difficulty).then(function () {
      expect(stub.findOne.calledWith({ label: difficulty})).to.be.true;
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

  it('should create settings', function () {
    var difficulty = 'hard';
    var isDefault = true;
    var settings = [];
    var build = {
      label: 'normal',
      settings: ['1', '2']
    };
    model.createSetting(difficulty, isDefault, settings).then(function () {
      expect(stub.model.calledWith(build)).to.be.true;
    });
  });

  it('should read a setting', function () {
    model.read('ultraviolence').then(function () {
      expect(stub.readSetting.calledWith({ label: level })).to.be.true;
    });
  });

  it('should list settings', function  () {
    model.readSetting().then(function () {
      expect(stub.read.calledWith()).to.be.true;
    });
  });

  it('should update a setting', function () {
    var difficulty = 'casual';
    var label = 'bombs';
    var value = 7
    var data = {};
    data.label = value;
    model.updateSetting(difficulty, label, value).then(function () {
      expect(stub.findOneAndUpdate.calledWith({ label: level }, data)).to.be.true;
    });
  });

  it('should delete a setting', function () {
    var difficulty = 'casual';
    var label = 'lives';
    model.destroySetting(difficulty, label).then(function () {
      expect(stub.remove.calledWith({ label: label })).to.be.true;
    });
  });
});
