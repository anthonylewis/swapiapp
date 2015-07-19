(function () {
  angular.module('SwapiApp').factory('ApiService', ['$http', function ($http) {
    return {
      getOne: function (resource, id) {
        return $http.get('http://swapi.co/api/' + resource + '/' + id + '/');
      },
      getAll: function (resource) {
        return $http.get('http://swapi.co/api/' + resource + '/');
      }
    }
  }]);
})();
