'use strict';

describe('Filter: prodize', function () {

  // load the filter's module
  beforeEach(module('yoscratchApp'));

  // initialize a new instance of the filter before each test
  var prodize;
  beforeEach(inject(function ($filter) {
    prodize = $filter('prodize');
  }));

  it('should return the input prefixed with "prodize filter:"', function () {
    var text = 'angularjs';
    expect(prodize(text)).toBe('prodize filter: ' + text);
  });

});
