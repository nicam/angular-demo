var app = angular.module('app', []);

app.controller('TestController', function ($scope) {
  $scope.persons = [
    { name: 'Pascal', location: 'Wil' },
    { name: 'Peter', location: 'St. Gallen' },
    { name: 'Hans', location: 'Ebenalp' }
  ];

  $scope.addPerson = function() {
    $scope.persons.push({
      name: $scope.name,
      location: $scope.location
    });
  }

  $scope.removePerson = function(person) {
    $scope.persons.splice($scope.persons.indexOf(person), 1);
  }
});