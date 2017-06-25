app.controller('BarController', function($rootScope, $scope, $location, jsonGetter, barService) {

    var bars = [];

    jsonGetter.getBars().then(function(response) {
        bars = response.data;
        $scope.bars = bars;
    });

    $scope.getDrinks = function(bar) {
        // assuming search functionality and table join will be handled in the service
        barService.selectBar(bar);
        $location.path("/drinks")
    }
});