var app = angular.module('PrototypeApp', [
    "ngRoute",
    "mobile-angular-ui"
])
.factory('jsonGetter', function ($http) {
     return {
         getBars: function () {
             return $http.get('/data/bars.json');
         },
          getPricesForBar: function (barId) {
                      var allPrices = $http.get('/data/prices.json');

                      return allPrices;

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

app.controller('BarController', function($rootScope, $scope, jsonGetter) {

    var bars = [];

    jsonGetter.getBars().then(function(response) {
      bars = response.data;
      $scope.bars = bars;
    });

    $scope.getDrinks = function(barId){

//        assuming search functionality will be handled in the service
        var prices = [];

        jsonGetter.getPricesForBar(barId).then(function(response){
            prices = response.data;

            console.log(prices);

        });


    }

});

