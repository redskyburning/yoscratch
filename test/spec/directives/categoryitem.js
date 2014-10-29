'use strict';

describe('Directive: categoryItem', function () {

  // load the directive's module
  beforeEach(module('yoscratchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<category-item></category-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the categoryItem directive');
  }));
});
