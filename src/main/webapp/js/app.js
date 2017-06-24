var app = angular.module('PrototypeApp', [
    "ngRoute",
    "mobile-angular-ui"
]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: "bars.html"
    });
    $routeProvider.when('/drinks', {
        templateUrl: 'drinks.html'
    });
});

app.controller('BarController', function($rootScope, $scope) {

  var bars = [];

//TODO get the bar items
  for (var i = 1; i <= 100; i++) {
    var bar  = {
        name: 'bar ' + i,
        imageUrl: 'images/' + i + '.jpg'
    }
    bars.push(bar);
  }

  $scope.bars = bars;
});

