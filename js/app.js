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

    ApiService.getAll('films')
      .success(function(data) {
        films.filmList = data.results;
      });
  }]);

  app.controller('PeopleController', ['ApiService', function(ApiService) {
    var people = this;

    ApiService.getOne('people', 1)
      .success(function(data) {
        people.person = data;
      });
  }]);

})();
