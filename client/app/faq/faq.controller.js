'use strict';

angular.module('solidBarnacleApp')
  .controller('FaqCtrl', function ($scope) {
    $scope.questions = [
      {
        'q': 'How Long is the Free Trial?',
        'a': 'The Free Trial is 14 days long and allows you to cancel at any time. You will not be charged for your first 14 days.'
      },
      {
        'q': 'How do I accept my customers payments?',
        'a': 'We have partnered with stripe to offer you the easiest, most secure payment method for your customers. Its very fast to sign up and integrates with our platform. You can track & modify all your customers orders from the stripe dashboard and within our own application.'
      }, 
      {
        'q': 'How do I get paid?',
        'a': 'Once your customer pays your money will immediately show up in your stripe account. You will be able to withdraw this as per Stripes T&C\'s but generally it is a very short period of time until the money is cleared.'
      },
      {
        'q': 'What should I sell?',
        'a': 'Althought we would love to, we can\'t tell you exactly what to sell.. but we are writing a great guide based upon our crazy experiences using one page stores. ShopYak is so simple to set up and start selling that we recommend trying your hand at multiple products.'
      },       
      {
        'q': 'Can I use my own domain?',
        'a': 'Of course! Our paid plans allow you to add your own custom domain to your store. We have found that stores with their own domain often sell a much higher volume than those on our subdomain. We purchase and link your chosen domain to your store automatically.'
      },
      {
        'q': 'Can I sell subscription based products?',
        'a': 'Yes! You can sell both single sale and subscription products through our platform. You are only limited by Stripes T&C\'s in what you sell'
      }];

    $scope.indicies = [];
    $scope.itemClicked = function ($index) {
      $scope.indicies[$index] = !$scope.indicies[$index];
    };
  });
