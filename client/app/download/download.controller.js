'use strict';

angular.module('solidBarnacleApp')
  .controller('DownloadCtrl', function ($scope, $http, $location) {
    $scope.downloadButton = downloadButton;
    

    function downloadButton(){
      var data = $location.search()
      $http.post('/api/downloads/', data, {responseType:'arraybuffer'})
      .then(function successCallback(response) {
        var blob = new Blob([response.data], {type: 'application/pdf'});
        saveAs(blob, 'acethecfa-25-practice-questions.pdf');
        }, function errorCallback(response) {
          $location.path("/");
        });
    }
    downloadButton()


  });
