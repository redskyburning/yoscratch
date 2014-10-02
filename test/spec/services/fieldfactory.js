'use strict';

describe('Service: fieldFactory', function () {

  // load the service's module
  beforeEach(module('yoscratchApp'));

  // instantiate service
  var fieldFactory;
  beforeEach(inject(function (_fieldFactory_) {
    fieldFactory = _fieldFactory_;
  }));

  it('should do something', function () {
    expect(!!fieldFactory).toBe(true);
  });

});
