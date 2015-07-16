(function () {
  var app = angular.module('SwapiApp', []);

  app.factory('ApiService', ['$http', function($http) {
    return {
      getOne: function(resource, id) {
        return $http.get('http://swapi.co/api/' + resource + '/' + id + '/');
      },
      getAll: function(resource) {
        return $http.get('http://swapi.co/api/' + resource + '/');
      }
    }
  }]);

  app.controller('FilmsController', ['ApiService', function(ApiService) {
    var films = this;

    films.resource = 'films';

    ApiService.getAll(films.resource)
      .success(function(data) {
        films.filmList = data.results;
      });
  }]);

  app.controller('PeopleController', ['ApiService', function(ApiService) {
    var people = this;

    people.resource = 'people';

    ApiService.getOne(people.resource, 1)
      .success(function(data) {
        people.person = data;
      });
  }]);

  app.controller('PlanetsController', ['ApiService', function(ApiService) {
    var planets = this;

    planets.resource = 'planets';

    ApiService.getOne(planets.resource, 1)
      .success(function(data) {
        planets.planet = data;
      });
  }]);

  app.controller('SpeciesController', ['ApiService', function(ApiService) {
    var species = this;

    species.resource = 'species';

    ApiService.getOne(species.resource, 1)
      .success(function(data) {
        species.species = data;
      });
  }]);

  app.controller('StarshipsController', ['ApiService', function(ApiService) {
    var starships = this;

    starships.resource = 'starships';

    ApiService.getOne(starships.resource, 10)
      .success(function(data) {
        starships.starship = data;
      });
  }]);

})();
