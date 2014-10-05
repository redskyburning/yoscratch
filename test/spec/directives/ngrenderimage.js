'use strict';

describe('Directive: ngRenderImage', function () {

  // load the directive's module
  beforeEach(module('yoscratchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-render-image></ng-render-image>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngRenderImage directive');
  }));
});
