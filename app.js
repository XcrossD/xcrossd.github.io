var app = angular.module('myWebsite', ['ui.bootstrap']);

app.controller('pageCtrl', ['$scope', function($scope){
  $scope.tab = 0;
  $scope.isCollapsed = true;

  $scope.setTab = function(tab){
    $scope.tab = tab;
  };

  $scope.isSelected = function(check){
    return $scope.tab === check;
  };
}]);