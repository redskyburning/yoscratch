'use strict';

describe('Service: pageFactory', function () {

  // load the service's module
  beforeEach(module('yoscratchApp'));

  // instantiate service
  var pageFactory;
  beforeEach(inject(function (_pageFactory_) {
    pageFactory = _pageFactory_;
  }));

  it('should do something', function () {
    expect(!!pageFactory).toBe(true);
  });

});
