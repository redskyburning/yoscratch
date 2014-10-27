'use strict';

describe('Service: wishlistService', function () {

  // load the service's module
  beforeEach(module('yoscratchApp'));

  // instantiate service
  var wishlistService;
  beforeEach(inject(function (_wishlistService_) {
    wishlistService = _wishlistService_;
  }));

  it('should do something', function () {
    expect(!!wishlistService).toBe(true);
  });

});
