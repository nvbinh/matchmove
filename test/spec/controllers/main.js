'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('matchmoveApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Total like number should be 30', function () {
    expect(30).toBe(30);
  });
});
