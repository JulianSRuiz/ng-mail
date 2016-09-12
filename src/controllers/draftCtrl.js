angular.module('angularMail')
  .controller('draftCtrl', function($scope, $stateParams) {

    $scope.newMessage = {
      to: $stateParams.email
    }

    $scope.sendMessage = function() {
      $scope.newMessage = {};
    }



  });
