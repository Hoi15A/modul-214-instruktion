// eslint-disable-next-line
var app = angular.module('app', ['ngRoute', 'ui.bootstrap'])

app.run(['$rootScope', '$route', function ($rootScope, $route) {
  $rootScope.$on('$routeChangeSuccess', function () {
    document.title = $route.current.title + ' | M214'
  })
}])

app.controller('CoreController', function ($scope, $route, $routeParams, $location, $document, $window) {
  $scope.$route = $route
  $scope.$location = $location
  $scope.$routeParams = $routeParams

  $scope.displayParticles = true

  $document.bind('keypress', function (e) {
    switch (e.which) {
      case 0: // esc
        $window.location.href = './index.html#!/'
        break
      case 49: // 1
        $window.location.href = './index.html#!/grundlagen'
        break
      case 50: // 2
        $window.location.href = './index.html#!/moderator-und-fragetechniken'
        break
      case 51: // 3
        $window.location.href = './index.html#!/fragearten'
        break
      default:

    }
  })

  // eslint-disable-next-line
  Particles.init({
    selector: '.background',
    color: '#ffffff',
    connectParticles: false
  })
})
