'use strict';

angular.module('solidBarnacleApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });


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
