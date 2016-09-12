angular.module('angularMail')
  .controller('contactsCtrl', function($scope, contactsService, $state) {
    $scope.contacts = contactsService.getContacts();

    $scope.autofill = function(contact) {
      $state.go('draft', {email: contact.email})
    }
  })
