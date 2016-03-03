'use strict';

angular.module('solidBarnacleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('download', {
        url: '/download',
        templateUrl: 'app/download/download.html',
        controller: 'DownloadCtrl'
      });
  });