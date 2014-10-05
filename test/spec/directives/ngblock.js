'use strict';

describe('Directive: ngBlock', function () {

  // load the directive's module
  beforeEach(module('yoscratchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-block></ng-block>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngBlock directive');
  }));
});
