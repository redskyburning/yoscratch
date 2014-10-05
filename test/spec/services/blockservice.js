'use strict';

describe('Service: blockService', function () {

  // load the service's module
  beforeEach(module('yoscratchApp'));

  // instantiate service
  var blockService;
  beforeEach(inject(function (_blockService_) {
    blockService = _blockService_;
  }));

  it('should do something', function () {
    expect(!!blockService).toBe(true);
  });

});
