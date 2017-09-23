// eslint-disable-next-line
var app = angular.module('app', ['ngRoute', 'ui.bootstrap'])

app.run(['$rootScope', '$route', function ($rootScope, $route) {
  $rootScope.$on('$routeChangeSuccess', function () {
    document.title = $route.current.title + ' | M214'
  })
}])

app.controller('CoreController', function ($scope, $route, $routeParams, $location) {
  $scope.$route = $route
  $scope.$location = $location
  $scope.$routeParams = $routeParams

  // eslint-disable-next-line
  Particles.init({
    selector: '.background',
    color: '#ffffff',
    connectParticles: false
  })
})
