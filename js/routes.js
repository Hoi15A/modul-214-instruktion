// eslint-disable-next-line
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      title: 'Main',
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when('/grundlagen', {
      title: '6.1 Grundlagen der Kommunikation',
      templateUrl: 'views/grundlagen.html',
      controller: 'GrundlagenController'
    })
})
