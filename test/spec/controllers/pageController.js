'use strict';

describe('Controller: PagecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoscratchApp'));

  var PagecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagecontrollerCtrl = $controller('PagecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
