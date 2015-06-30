(function () {
  var app = angular.module('SwapiApp', []);

  app.controller('FilmsController', ['$http', function($http) {
    var films = this;

    $http.get('http://swapi.co/api/films/')
      .success(function(data) {
        films.filmList = data.results;
      });
  }]);
})();
