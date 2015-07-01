(function () {
  var app = angular.module('SwapiApp', []);

  app.factory('FilmService', ['$http', function($http) {
    return {
      getFilms: function() {
        return $http.get('http://swapi.co/api/films/');
      }
    }
  }]);

  app.controller('FilmsController', ['FilmService', function(FilmService) {
    var films = this;

    FilmService.getFilms()
      .success(function(data) {
        films.filmList = data.results;
      });
  }]);
})();
