'use strict';

describe('Directive: productItem', function () {

  // load the directive's module
  beforeEach(module('yoscratchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<product-item></product-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the productItem directive');
  }));
});
