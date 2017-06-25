var app = angular.module('PrototypeApp', [ "ngRoute", "mobile-angular-ui" ])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl : "bars.html"
    });
    $routeProvider.when('/drinks', {
        templateUrl : 'drinks.html'
    });
});
