'use strict';

describe('Controller: SectioncontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoscratchApp'));

  var SectioncontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SectioncontrollerCtrl = $controller('SectioncontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
