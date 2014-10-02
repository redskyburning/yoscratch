'use strict';

describe('Service: sectionFactory', function () {

  // load the service's module
  beforeEach(module('yoscratchApp'));

  // instantiate service
  var sectionFactory;
  beforeEach(inject(function (_sectionFactory_) {
    sectionFactory = _sectionFactory_;
  }));

  it('should do something', function () {
    expect(!!sectionFactory).toBe(true);
  });

});
