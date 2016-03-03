'use strict';

angular.module('solidBarnacleApp')
  .controller('FaqCtrl', function ($scope) {
    $scope.questions = [
      {
        'q': 'Why do we need to give our email?',
        'a': 'This is the way we will provide you with access to your free questions. Also, as we are a new business, we can update you when more offers become available.'
      },
      {
        'q': 'How do I know payments are secure?',
        'a': 'All our payments are handled by Stripe, an extremely secure payment processor that handles payments for hundreds of thousands of businesses. Lyft, Kickstarter and Shopify are a few of the companies that trust Stripe.'
      }, 
      {
        'q': 'What if I am unhappy with the product?',
        'a': 'We highly doubt this, but it does happen. We offer free questions in a very similar format to our paid options. We ask you to judge the quality and relevance of the questions before making a purchase decision (We are very sure you will be satisfied with the paid options). Due to the nature of the product we do not offer money back on our products. However, if you have any serious concerns do not hesitate to contact us.'
      },
      {
        'q': 'What does the offer “Limited email help” stand for?',
        'a': 'Our standard offer comes with up to 5 email help queries. We have a genuine interest in helping you pass your exam. After 5 queries you have the option to upgrade to more email support (plus a huge increase in question count) with platinum.'
      },       
      {
        'q': 'How do I get an answer to all my other questions?',
        'a': 'Please do not hesitate to contact us at acethecfanow@gmail.com'
      }];

    $scope.indicies = [];
    $scope.itemClicked = function ($index) {
      $scope.indicies[$index] = !$scope.indicies[$index];
    };
  });
