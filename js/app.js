(function () {
  var app = angular.module('SwapiApp', []);

  app.factory('films', ['$http', function($http) { 
    return $http.get('http://swapi.co/api/films/') 
              .success(function(data) { 
                return data; 
              }) 
              .error(function(err) { 
                return err; 
              }); 
  }]);

  app.controller('FilmsController', function() {
  });
})();
