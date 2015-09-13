var page = require('../pages/difficulty.page');

describe('Difficulty Menu', function () {
  it('should display the nav', function () {
    expect(page.difficultyLink('Default').isDisplayed()).to.eventually.be.true;
    expect(page.difficultyLink('Easy').isDisplayed()).to.eventually.be.true;
  });

  it('should add a difficulty', function () {
    page.addDifficulty('ultra');
    expect(page.difficultyLink('Easy').isDisplayed()).to.eventually.be.true;
  });

  it('should add a setting', function () {
    page.addSetting('health', 70);
    expect(page.setting('health').isDisplayed()).to.eventually.be.true;
  });
});

