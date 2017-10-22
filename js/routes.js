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
    .when('/moderator-und-fragetechniken', {
      title: '6.2 Moderator und Fragetechniken',
      templateUrl: 'views/moderator-und-fragetechniken.html'
    })
    .when('/fragearten', {
      title: '6.3 Fragearten',
      templateUrl: 'views/fragearten.html'
    })
})
