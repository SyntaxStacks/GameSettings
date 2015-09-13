describe('Difficulty Nav Directive', function () {
  var scope;

  beforeEach(module('GameSettings.difficulty'));
  beforeEach(inject(function ($compile, $scope) {
    var html = [
      '<div id="test">',
        '<difficulty-nav>',
      '</div>'
    ].join('\n');
    var element = angular.element(html);
    scope = $scope
    $compile(element)(scope);
    scope.$digest();
  }));

  it('should add all difficulties to nav', function () {
    expect(element.find('li.nav-item').count()).to.eventually.be(3);
  });

});

