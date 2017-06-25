app.controller('DrinkController', function($scope, jsonGetter) {
    var order = [];
    var drinks = [];

    $scope.order = order;

    jsonGetter.getDrinksForBar(101).then(function(response) {
        drinks = response.data;
        $scope.drinks = drinks;
    });

    $scope.selectDrink = function(drink) {

        var found = false;
        for ( var o in order) {
            if (order[o].id === drink.id) {
                order[o].quantity++;
                found = true;
                break;
            }
        }

        if (!found) {
            var item = drink;
            item.quantity = 1;
            order.push(item);
        }
    }

    $scope.unselectDrink = function(drink) {
        for ( var o in order) {
            if (order[o].id === drink.id) {
                if (order[o].quantity > 0) {
                    order[o].quantity--;
                }
                break;
            }
        }
    }

    $scope.orderTotal = function() {

        var total = 0;
        for ( var o in order) {
            total += order[o].current_price * order[o].quantity;
        }
        return total;
    }

});
