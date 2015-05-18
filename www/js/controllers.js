angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) {})


    .controller('MyCtrl', function($scope) {

      $scope.testBtn = function(chat) {
        console.log("CLICK");
      }
    });

