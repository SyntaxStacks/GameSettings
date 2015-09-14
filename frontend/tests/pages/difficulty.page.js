module.exports = Object.create({}, {
  difficultyLink: {
    value: function (text) {
      return element(by.cssContainingText('.nav li.link', text));
    }
  },
  activeDifficultyLink: {
    value: function (text) {
      return $('nav li.active');
    }
  },
  addDifficultyBtn: {
    get: function () {
      return $('#addDifficulty');
    }
  },
  difficultyNameInput: {
    get: function () {
      return $('#newDifficultyName');
    },
    set: function (name) {
      this.difficultyNameInput.clear();
      this.difficultyNameInput.sendKeys(name);
    }
  },
  confirmDifficultyNameBtn: {
    get: function () {
      return $('#confirmDifficulty');
    }
  },
  addDifficulty: {
    value: function (difficulty) {
      this.addDifficultyBtn.click();
      this.difficultyNameInput = difficulty;
      this.confirmDifficultyNameBtn.click();
    }
  },
  makeDefaultBtn: {
    get: function () {
      return $('#makeDefault');
    }
  },
  setDifficultyAsDefault: {
    value: function () {
      this.makeDefaultBtn.click();
    }
  },
  removeDifficultyBtn: {
    get: function () {
      return $('#removeDifficulty');
    }
  },
  removeCurrentDifficulty: {
    value: function () {
      this.removeDifficultyBtn.click();
    }
  },
  settings:{
    get: function () {
      return element.all(by.repeater('setting in currentSettings track by $index'));
    }
  },
  setting: {
    value: function (name) {
      return element(by.cssContainingText('ul.settings li', name));
    }
  },
  addSettingBtn: {
    get: function () {
      return $('#addSetting');
    }
  },
  settingNameInput: {
    get: function () {
      return $('#newSettingName');
    },
    set: function (name) {
      this.settingNameInput.clear();
      this.settingNameInput.sendKeys(name);
    }
  },
  settingValueInput: {
    get: function () {
      return $('#newSettingValue');
    },
    set: function (value) {
      this.settingValueInput.clear();
      this.settingValueInput.sendKeys(value);;
    }
  },
  confirmSettingNameBtn: {
    get: function () {
      return $('#confirmSetting');
    }
  },
  addSetting: {
    value: function (name, value) {
      this.addSettingBtn.click();
      this.settingNameInput = name;
      this.settingValueInput = value;
      this.confirmSettingNameBtn.click();
    }
  },
  modifySetting: {
    value: function (name, value) {
      var setting = this.setting(name);
      setting.element('.edit').click()
      this.editSettingNameInput = name;
      this.editSettingValueInput = value;
      this.confirmSettingEditBtn.click();
    }
  },
  removeSetting: {
    value: function (name, value) {
      var setting = this.setting(name);
      setting.element('.remove').click()
    }
  },

});
