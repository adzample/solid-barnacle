'use strict';

angular.module('solidBarnacleApp')
  .controller('MainCtrl', function ($scope, $http, $location, $anchorScroll) {
    $scope.awesomeThings = [];
    $scope.gotoTop = gotoTop;
    $scope.sendMail = sendMail;
    $scope.userEmail = ''
    $scope.errorMessage = ''
    $scope.sendingMessage = ''

    function sendMail(){
      if(!$scope.myForm.$valid){
          $scope.errorMessage = 'Please Enter a Valid Email'
      }else{
        $scope.errorMessage = ''
        $scope.sendingMessage = 'Sending Your Email..'
        var data = {
          email: $scope.userEmail
        }
        $scope.submitting = true;
        $http.post('/api/things', data).then(function successCallback(response) {
          $scope.submitting = false;
          $scope.sendingMessage = ''
          $scope.errorMessage = 'Awesome! Please Check Your Inbox for Your Unique Download Link' 
        }, function errorCallback(response) {
          $scope.submitting = false;
          $scope.sendingMessage = ''
          $scope.errorMessage = 'Unfortunately the email failed to send, We have recorded this error and will fix it as soon as possible. Please try again later.'
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
      }
    }
    


    function gotoTop() {
      console.log('yo')
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');

      // call $anchorScroll()
      $anchorScroll();
    };


  var $window           = $(window),
  win_height_padded = $window.height() * 1.1,
  isTouch           = Modernizr.touch;
  if (isTouch) { 
    $('.revealOnScroll').addClass('reveal'); 
  }
  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 0.8;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
          $this.addClass('reveal');
          $this.addClass('animated ' + $this.data('animation'));
      }
    });
  }
  revealOnScroll();




  }).directive('focus',
      function($timeout) {
       return {
       scope : {
         trigger : '@focus'
       },
       link : function(scope, element) {
        scope.$watch('trigger', function(value) {
          if (value === "true") {
            $timeout(function() {
             element[0].focus();
            });
         }
       });
       }
      };
}); 
