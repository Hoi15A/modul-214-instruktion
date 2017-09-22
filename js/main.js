// eslint-disable-next-line
app.controller('MainController', function ($scope, $route, $routeParams, $location) {
  $scope.$route = $route
  $scope.$location = $location
  $scope.$routeParams = $routeParams
})
