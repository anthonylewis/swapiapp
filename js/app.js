(function () {
  var app = angular.module('SwapiApp', []);

  app.factory('FilmService', ['$http', function($http) {
    return {
      getFilm: function(id) {
        return $http.get('http://swapi.co/api/films/' + id + '/');
      },
      getFilms: function() {
        return $http.get('http://swapi.co/api/films/');
      }
    }
  }]);

  app.factory('PeopleService', ['$http', function($http) {
    return {
      getPerson: function(id) {
        return $http.get('http://swapi.co/api/people/' + id + '/');
      },
      getPeople: function() {
        return $http.get('http://swapi.co/api/people/');
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

  app.controller('PeopleController', ['PeopleService', function(PeopleService) {
    var people = this;

    PeopleService.getPerson(1)
      .success(function(data) {
        people.person = data;
      });
  }]);

})();
