'use strict';

describe('Service: rangyservice', function () {

  // load the service's module
  beforeEach(module('yoscratchApp'));

  // instantiate service
  var rangyservice;
  beforeEach(inject(function (_rangyservice_) {
    rangyservice = _rangyservice_;
  }));

  it('should do something', function () {
    expect(!!rangyservice).toBe(true);
  });

});
