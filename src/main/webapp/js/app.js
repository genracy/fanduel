var app = angular.module('PrototypeApp', [
    "ngRoute",
    "mobile-angular-ui"
])
.factory('jsonGetter', function ($http) {
     return {
         getBars: function () {
             return $http.get('/data/bars.json');
         },
          getDrinksForBar: function (barId) {
                      var drinks = $http.get('/data/drinks.json');
//TODO mock the search and table join
                      return drinks;

                  }
     }
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: "bars.html"
    });
    $routeProvider.when('/drinks', {
        templateUrl: 'drinks.html'
    });
});

app.controller('BarController', function($scope, $location, jsonGetter) {

    var bars = [];

    jsonGetter.getBars().then(function(response) {
      bars = response.data;
      $scope.bars = bars;
    });

    $scope.getDrinks = function(bar){
    //        assuming search functionality and table join will be handled in the service
         $location.path("/drinks")
    }
});


app.controller('DrinkController', function($scope, jsonGetter){
        var drinks = [];
        jsonGetter.getDrinksForBar(101).then(function(response){
            drinks = response.data;
            $scope.drinks = drinks;
        });

});





