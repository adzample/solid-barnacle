'use strict';

describe('Controller: DownloadCtrl', function () {

  // load the controller's module
  beforeEach(module('solidBarnacleApp'));

  var DownloadCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DownloadCtrl = $controller('DownloadCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
