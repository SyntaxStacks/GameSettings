var page = require('../pages/difficulty.page');
var request = require('request');

describe('Difficulty Menu', function () {
  before(function (done) {
    request.post(browser.baseUrl + '/api/reset-database', function  () {
      browser.refresh();
      done();
    });
  });
  describe('Difficult Nav', function () {

    it('should display the nav', function () {
      expect(page.difficultyLink('Easy').isDisplayed()).to.eventually.be.true;
      expect(page.difficultyLink('Normal').isDisplayed()).to.eventually.be.true;
    });

    it('should add a difficulty', function () {
      page.addDifficulty('Ultra');
      expect(page.difficultyLink('Ultra').isDisplayed()).to.eventually.be.true;
    });

    it('should set current difficulty', function () {
      page.setDifficultyAsDefault();
      expect(page.makeDefaultBtn.isEnabled()).to.eventually.be.false;
    });

    it('should remove current difficulty', function () {
      page.difficultyLink('Normal').click();
      page.removeCurrentDifficulty();
      expect(page.difficultyLink('Normal').isPresent()).to.eventually.be.false;
    });

  });

  describe('Settings', function () {
    it('should add a setting', function () {
      page.addSetting('health', 70);
      expect(page.setting('health').isDisplayed()).to.eventually.be.true;
    });

    it('should remove a setting', function () {
      page.removeSetting('health');
      expect(page.setting('health').isPresent()).to.eventually.be.false;
    });

    it('should modify a setting', function () {
      page.modifySetting('health', 100);
      expect(page.settingValue('health')).to.eventually.equal('100');
    });
  });
});

