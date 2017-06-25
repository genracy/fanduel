app.controller('BarController', function($scope, $location, jsonGetter) {

    var bars = [];

    jsonGetter.getBars().then(function(response) {
        bars = response.data;
        $scope.bars = bars;
    });

    $scope.getDrinks = function(bar) {
        // assuming search functionality and table join will be handled in the service
        $location.path("/drinks")
    }
});