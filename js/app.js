(function () {
  var app = angular.module('SwapiApp', []);

  app.factory('swapiFilms', ['$http', function($http) {
    return $http.get('http://swapi.co/api/films/') 
              .success(function(data) { 
                return data; 
              }) 
              .error(function(err) { 
                return err; 
              }); 
  }]);

  app.controller('FilmsController', ['swapiFilms', function(swapiFilms) {
    var films = this;

    swapiFilms.success(function(data) {
      films.filmList = data.results;
    });
  }]);
})();
