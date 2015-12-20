angular.module('app1',[]).controller('mycontroller', function($scope) {
  $scope.angularApp = 'app1';
});

angular.module('app2',[]).controller('mycontroller', function($scope) {
  $scope.angularApp = 'app2';
});