app.controller('BarController', function($rootScope, $scope, $location, jsonGetter, barService) {

    var bars = [];

    //this relies on user granting permission - we should also have a way of searching without browser location
    var currentLocation = {};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            currentLocation = position.coords;
        });
    }

    jsonGetter.getBars(currentLocation).then(function(response) {
        bars = response.data;
        $scope.bars = bars;
    });

    $scope.getDrinks = function(bar) {
        // assuming search functionality and table join will be handled in the service
        barService.selectBar(bar);
        $location.path("/drinks")
    }
});